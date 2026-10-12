import { STATS } from "@/data/content";

export default function Stats() {
  return (
    <section aria-label="Key numbers" className="bg-sand/80 py-8 md:py-10">
      <dl className="container-x mx-auto grid max-w-4xl grid-cols-2 gap-y-7 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div key={s.label} className={`flex flex-col-reverse items-center text-center ${i % 2 === 0 ? "border-e border-line" : ""} md:border-e md:last:border-e-0`}>
            <dt className="mt-1 text-[10px] font-bold uppercase tracking-wider text-ink/55">{s.label}</dt>
            <dd className="font-serif text-3xl font-bold md:text-4xl">{s.value.replace(/\+|X$/, "")}<span className="text-brand">{s.value.match(/\+|X$/)?.[0]}</span></dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
