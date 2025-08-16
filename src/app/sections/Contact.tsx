"use client";

import * as React from "react";

type FormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type FormChangeHandler = React.ChangeEventHandler<FormElement>;
type FormData = { name: string; email: string; message: string };

const INITIAL_FORM: FormData = { name: "", email: "", message: "" };

// tiny HTML escaper so we can safely create an HTML body
function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default function Contact() {
  const [formData, setFormData] = React.useState(INITIAL_FORM);
  const [isLoading, setIsLoading] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = React.useState("");

  const handleChange = React.useCallback<FormChangeHandler>(
    (e) => {
      const el = e.currentTarget;
      const value =
        el instanceof HTMLInputElement && el.type === "checkbox"
          ? el.checked
          : el.value;
      setFormData((p) => ({ ...p, [el.name]: value }));
      if (status !== "idle") setStatus("idle");
    },
    [status]
  );

  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isValid =
    formData.name.trim().length > 1 &&
    isEmail(formData.email) &&
    formData.message.trim().length > 3;

  const handleSubmit = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!isValid) {
        setStatus("error");
        setErrorMsg("Please fill out all fields with a valid email.");
        return;
      }

      const formEl = e.currentTarget; // capture before any awaits
      setIsLoading(true);
      setStatus("idle");
      setErrorMsg("");

      // Build subject/text/html to match your route.ts sendMail signature
      const subject = `New message from ${formData.name}`;
      const text = `${formData.message}

---
From: ${formData.name} <${formData.email}>`;
      const html = `<div>
  <p>${escapeHtml(formData.message).replace(/\n/g, "<br/>")}</p>
  <hr/>
  <p><strong>From:</strong> ${escapeHtml(formData.name)} &lt;${escapeHtml(
        formData.email
      )}&gt;</p>
</div>`;

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email, // visitor's email (used as replyTo server-side)
            subject,
            text,
            html,
          }),
        });

        // Always try to read JSON and check { ok }
        let data: { ok?: boolean; error?: string } | null = null;
        try {
          data = await res.json();
        } catch {
          // ignore JSON parse errors; we'll fall back to res.ok
        }

        if (!res.ok || !data?.ok) {
          const msg = data?.error ?? `Request failed (${res.status})`;
          throw new Error(msg);
        }

        setStatus("ok");
        setFormData(INITIAL_FORM);
        formEl.reset();
      } catch (err) {
        console.error(err);
        setStatus("error");
        setErrorMsg(
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again."
        );
      } finally {
        setIsLoading(false);
      }
    },
    [formData, isValid]
  );

  return (
    <section className="relative flex items-center c-space section-spacing">
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let&apos;s Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you&apos;re starting from scratch, refining your online
            presence, or bringing that &quot;someday&quot; project to life,
            I&apos;m here to make it happen &mdash; without the stress.
          </p>
        </div>

        <form
          className="w-full"
          method="post"
          action="#"
          onSubmit={handleSubmit}
          noValidate
          aria-busy={isLoading}
        >
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Full name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-invalid={formData.name.trim().length <= 1}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="Email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-invalid={!isEmail(formData.email)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              required
              aria-invalid={formData.message.trim().length <= 3}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !isValid}
            aria-disabled={isLoading || !isValid}
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed bg-radial from-lavender to-royal hover-animation"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>

          <p className="mt-3 text-sm" role="status" aria-live="polite">
            {status === "ok" && "Thanks! Your message has been sent."}
            {status === "error" && errorMsg}
          </p>
        </form>
      </div>
    </section>
  );
}
