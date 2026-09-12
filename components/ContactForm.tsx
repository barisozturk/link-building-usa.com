"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const honeypot = String(data.get("company_website") ?? "").trim();

    const nextErrors: typeof errors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter your email address.";
    else if (!emailPattern.test(email))
      nextErrors.email = "That email address does not look valid.";
    if (!message) nextErrors.message = "Please add a short message.";
    else if (message.length < 12)
      nextErrors.message = "A little more context helps us reply usefully.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    if (honeypot) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(site.formspree, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-line bg-fog px-6 py-8" role="status">
        <p className="kicker">Sent</p>
        <h2 className="display mt-3 text-3xl text-ink">Thanks—your message is in.</h2>
        <p className="mt-4 text-ink-muted">
          If the enquiry is a fit, we will reply to the address you shared. Need to add
          detail? Write us at{" "}
          <a className="link-tide" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-describedby="form-note">
      <p id="form-note" className="text-ink-muted">
        Share your site, niche, and what you want from US placements. We respond with a
        scoped plan—not a generic rate card.
      </p>
      <div className="hidden" aria-hidden>
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
          Name
        </label>
        <input id="name" name="name" className="field" autoComplete="name" />
        {errors.name ? <p className="mt-1.5 text-sm text-signal">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
          Work email
        </label>
        <input id="email" name="email" type="email" className="field" autoComplete="email" />
        {errors.email ? <p className="mt-1.5 text-sm text-signal">{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
          Message
        </label>
        <textarea id="message" name="message" rows={6} className="field resize-y" />
        {errors.message ? (
          <p className="mt-1.5 text-sm text-signal">{errors.message}</p>
        ) : null}
      </div>
      {status === "error" ? (
        <p className="text-sm text-signal" role="alert">
          Something went wrong. Try again or email{" "}
          <a className="link-tide" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      ) : null}
      <button
        type="submit"
        className="btn btn-signal"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
