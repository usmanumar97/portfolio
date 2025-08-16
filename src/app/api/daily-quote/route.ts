import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const key = process.env.API_NINJAS_KEY;

  if (!key) {
    console.error(
      "API_NINJAS_KEY is missing. Check .env.local and restart dev."
    );
    return NextResponse.json({ error: "Missing API key" }, { status: 500 });
  }

  try {
    const r = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: { "X-Api-Key": key },
      next: { revalidate: 60 * 60 * 24 }, // 24h
    });

    if (!r.ok) {
      const txt = await r.text();
      return NextResponse.json(
        { error: `Upstream: ${txt}` },
        { status: r.status }
      );
    }

    const arr = (await r.json()) as Array<{ quote: string; author: string }>;
    const q = Array.isArray(arr) ? arr[0] : null;

    return NextResponse.json(
      {
        text: q?.quote ?? "Make it work, make it right, make it fast.",
        author: q?.author ?? "Kent Beck",
      },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=86400, stale-while-revalidate=3600",
        },
      }
    );
  } catch (err) {
    console.error("Quote fetch error:", err);
    return NextResponse.json(
      {
        text: "Make it work, make it right, make it fast.",
        author: "Kent Beck",
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  }
}
