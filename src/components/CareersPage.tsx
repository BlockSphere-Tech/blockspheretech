"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { applyMailto, CAREERS_EMAIL, careerRoles } from "@/data/careers";

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-line bg-bg-elevated">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Careers
            </p>
            <h1 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight md:text-5xl">
              Build institutional crypto infrastructure
            </h1>
            <p className="mt-4 max-w-2xl text-muted">
              We are hiring remote talent across engineering and product to ship
              secure contracts and resilient protocol systems. Open roles below —
              apply directly by email.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {careerRoles.map((role) => (
              <article
                key={role.id}
                className="flex flex-col surface-card border border-line p-6 transition-all hover:-translate-y-0.5 hover:border-accent/35"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-accent-dim px-2.5 py-1 text-xs font-semibold text-accent">
                    {role.team}
                  </span>
                  <span className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
                    {role.type}
                  </span>
                </div>

                <h2 className="mt-4 font-[family-name:var(--font-display)] text-xl font-extrabold text-ink">
                  {role.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {role.summary}
                </p>

                <div className="mt-5 space-y-2 border-t border-line pt-4 text-sm">
                  <p>
                    <span className="font-semibold text-ink">Budget: </span>
                    <span className="text-accent">{role.budget}</span>
                  </p>
                  <p className="text-muted">{role.location}</p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Responsibilities
                  </p>
                  <ul className="mt-3 space-y-2">
                    {role.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={applyMailto(role)}
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Apply
                </a>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted">
            Applications go to{" "}
            <a
              href={`mailto:${CAREERS_EMAIL}`}
              className="font-medium text-accent hover:underline"
            >
              {CAREERS_EMAIL}
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
