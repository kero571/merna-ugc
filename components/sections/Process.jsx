import SectionHeading from "../ui/SectionHeading";
import { STEPS } from "@/data/content";

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section container-x defer">
      <SectionHeading id="process-title" eyebrow="Effortless Process" title="4 Steps From Brief To Launch" />
      <ol className="mx-auto grid max-w-5xl gap-3 md:grid-cols-4 md:gap-4">
        {STEPS.map((s, i) => (
          <li key={s.title} className="card flex items-start gap-3 p-4 md:flex-col md:p-5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-black text-white">{i + 1}</span>
            <div>
              <h3 className="mb-1 text-sm font-extrabold">{s.title}</h3>
              <p className="text-xs leading-5 text-ink/60">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
