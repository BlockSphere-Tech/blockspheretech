"use client";

import { useState, type FormEvent } from "react";
import { submitContact } from "@/lib/api";
import { useI18n } from "@/i18n/I18nProvider";

export default function Contact() {
  const { t, locale } = useI18n();
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    try {
      const result = submitContact(
        {
          name: String(form.get("name") || ""),
          email: String(form.get("email") || ""),
          company: String(form.get("company") || ""),
          message: String(form.get("message") || ""),
        },
        locale
      );
      setStatus("ok");
      setMessage(result.message);
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="contact" className="border-t border-line bg-[#0B1F44] text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              {t.contact.eyebrow}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-white/70">{t.contact.subtitle}</p>
            <blockquote className="mt-10 border-l-2 border-[#6B8CFF] pl-5 text-sm leading-relaxed text-white/75 md:text-base">
              {t.contact.quote}
            </blockquote>
          </div>

          <form
            onSubmit={onSubmit}
            className="border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="text-white/65">{t.contact.name}</span>
                <input
                  name="name"
                  required
                  className="mt-1.5 w-full border border-white/15 bg-white/10 px-3 py-2.5 text-white outline-none placeholder:text-white/35 focus:border-[#6B8CFF]"
                />
              </label>
              <label className="block text-sm">
                <span className="text-white/65">{t.contact.email}</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1.5 w-full border border-white/15 bg-white/10 px-3 py-2.5 text-white outline-none focus:border-[#6B8CFF]"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm">
              <span className="text-white/65">{t.contact.company}</span>
              <input
                name="company"
                className="mt-1.5 w-full border border-white/15 bg-white/10 px-3 py-2.5 text-white outline-none focus:border-[#6B8CFF]"
              />
            </label>
            <label className="mt-4 block text-sm">
              <span className="text-white/65">{t.contact.message}</span>
              <textarea
                name="message"
                required
                rows={4}
                className="mt-1.5 w-full resize-y border border-white/15 bg-white/10 px-3 py-2.5 text-white outline-none focus:border-[#6B8CFF]"
              />
            </label>
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 w-full rounded-full bg-white px-4 py-3 text-sm font-semibold text-accent disabled:opacity-60"
            >
              {status === "loading" ? t.contact.sending : t.contact.submit}
            </button>
            {message && (
              <p
                className={`mt-3 text-sm ${
                  status === "error" ? "text-red-300" : "text-[#9EB6FF]"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
