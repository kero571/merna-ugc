import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { WHY } from "@/data/content";

const TONES = { red: "bg-brand/10 text-brand", amber: "bg-amber-100 text-amber-700", dark: "bg-ink text-white" };

export default function WhyConvert() {
  return (
    <section id="about" aria-labelledby="why-title" className="section container-x defer">
      <SectionHeading id="why-title" eyebrow="Behind the Camera" title="Why My Videos Convert" />
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-[1.1fr_1fr] md:gap-8">
        <p className="card p-5 text-sm leading-7 text-ink/70 md:self-start md:p-7 md:text-base">
          Hi, I&apos;m <strong className="text-ink">Valentina</strong>. I don&apos;t just shoot aesthetic videos; I build conversion assets. Coming from direct-response media buying principles, every video I produce is structured around psychology, retention drop-off prevention, and undeniable calls to action.
        </p>
        <div className="grid gap-3">
          {WHY.map((w) => (
            <article key={w.title} className="card p-5">
              <span className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${TONES[w.tone]}`}><Icon name={w.icon} className="h-4 w-4" /></span>
              <h3 className="mb-1 text-sm font-extrabold">{w.title}</h3>
              <p className="text-xs leading-6 text-ink/60">{w.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
