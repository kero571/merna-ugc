import SectionHeading from "../ui/SectionHeading";
import { FUNNEL } from "@/data/content";

const BADGE = { red: "bg-brand/10 text-brand", sand: "bg-sand text-ink", good: "bg-good/15 text-good" };

export default function Funnel() {
  return (
    <section aria-labelledby="funnel-title" className="section bg-sand/60 defer">
      <div className="container-x">
        <SectionHeading id="funnel-title" eyebrow="My Proven Methodology" title="The 3-Step UGC Conversion Funnel" />
        <ol className="mx-auto grid max-w-5xl gap-3 md:grid-cols-3 md:gap-5">
          {FUNNEL.map((f) => (
            <li key={f.stage} className="card flex items-center justify-between gap-3 p-5 md:flex-col md:items-start md:gap-5">
              <div>
                <p className={`text-[10px] font-extrabold uppercase tracking-wider ${f.tone === "good" ? "text-good" : "text-brand"}`}>{f.stage}</p>
                <h3 className="mt-1 text-base font-extrabold">{f.title}</h3>
                <p className="mt-1 text-xs text-ink/60">{f.text}</p>
              </div>
              <span className={`shrink-0 rounded-lg px-3 py-2 text-[11px] font-extrabold ${BADGE[f.tone]}`}>{f.badge}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
