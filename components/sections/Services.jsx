import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { SERVICES } from "@/data/content";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section container-x defer">
      <SectionHeading id="services-title" eyebrow="Formats Offered" title="Services Tailored for Growth" />
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {SERVICES.map((s) => (
          <article key={s.title} className="card p-4 transition hover:border-brand/50 md:p-6">
            <span className="mb-3 inline-flex text-brand"><Icon name={s.icon} className="h-6 w-6" /></span>
            <h3 className="mb-1.5 text-sm font-extrabold">{s.title}</h3>
            <p className="text-xs leading-5 text-ink/60">{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
