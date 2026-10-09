import type { SiteData } from "@/lib/api";

export default function Trust({ site }: { site: SiteData }) {
  return (
    <section className="border-y border-line bg-bg-soft/50">
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-24">
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
          Enterprise-ready by default
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted">
          {site.positioning ||
            "SLA-backed uptime, regional residency, and audit-ready controls."}
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: "99.99%", label: "Uptime SLA" },
            { value: "3", label: "Regions" },
            { value: site.support.firstResponse, label: "First response" },
            { value: "24/7", label: "Support" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-accent">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-muted">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {site.compliance.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line bg-white px-3 py-1.5 text-xs text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
