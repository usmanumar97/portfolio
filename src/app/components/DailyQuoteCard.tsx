"use client";

import * as React from "react";

type Quote = { text: string; author: string };

const STORAGE_KEY = "daily-quote";
const DATE_KEY = "daily-quote-date";

function todayKey() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 10);
}

export default function DailyQuoteCard() {
  const [quote, setQuote] = React.useState<Quote | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [isCached, setIsCached] = React.useState(false);

  const load = React.useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const today = todayKey();
      const cachedDate =
        typeof window !== "undefined" ? localStorage.getItem(DATE_KEY) : null;
      const cached =
        typeof window !== "undefined"
          ? localStorage.getItem(STORAGE_KEY)
          : null;

      if (cached && cachedDate === today) {
        setQuote(JSON.parse(cached));
        setIsCached(true);
        return;
      }

      setIsCached(false);

      const controller = new AbortController();
      const res = await fetch("api/daily-quote", { signal: controller.signal });

      if (!res.ok) {
        let msg = `API ${res.status}`;
        try {
          const body = await res.json();
          if (body?.error) msg = body.error;
        } catch {}
        throw new Error(msg);
      }

      const data: Quote = await res.json();

      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        localStorage.setItem(DATE_KEY, today);
      }

      setQuote(data);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Could not load quote.";
      setError(msg);
      setQuote({
        text: "Make it work, make it right, make it fast.",
        author: "Kent Beck",
      });
      setIsCached(false);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    let alive = true;
    (async () => {
      if (!alive) return;
      await load();
    })();
    return () => {
      alive = false;
    };
  }, [load]);

  // dynamic sizing for long quotes
  const isLong = (quote?.text?.length ?? 0) > 150;

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="pointer-events-none absolute inset-0 select-none opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,255,255,.25),transparent_70%)]" />
      </div>

      <figure className="relative z-10 max-w-[34rem] text-center">
        {loading ? (
          <div className="mx-auto h-5 w-2/3 animate-pulse rounded bg-white/20" />
        ) : (
          <>
            <blockquote
              className={`font-semibold tracking-tight break-words ${
                isLong
                  ? "text-base md:text-xl leading-relaxed"
                  : "text-xl md:text-2xl leading-snug"
              }`}
            >
              “{quote?.text}”
            </blockquote>

            <figcaption className="mt-3 text-sm md:text-base text-white/70 flex items-center justify-center gap-2">
              <span> {quote?.author}</span>
              {isCached && <span className=""></span>}
            </figcaption>
          </>
        )}

        {/* Refresh only when not loading AND not showing cached quote */}
        {!loading && !isCached && (
          <button
            onClick={load}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 transition"
            aria-label="Get a new quote"
          >
            Refresh
          </button>
        )}

        {error && (
          <p className="mt-2 text-xs text-red-300/80" role="status">
            {error}
          </p>
        )}
      </figure>
    </div>
  );
}
