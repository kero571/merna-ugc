import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { REVIEWS } from "@/data/content";

export default function Testimonials() {
  return (
    <section aria-labelledby="reviews-title" className="section container-x defer">
      <SectionHeading id="reviews-title" eyebrow="Client Feedback" title="Loved by Growth Marketers" />
      <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="card p-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex gap-0.5 text-amber-500" role="img" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="starFill" className="h-3.5 w-3.5" />)}
              </div>
              <span className="text-[10px] text-ink/45">{r.role}</span>
            </div>
            <blockquote className="font-serif text-sm italic leading-6 text-ink/80">&ldquo;{r.text}&rdquo;</blockquote>
            <figcaption className="mt-4 flex items-center gap-2 text-xs">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sand text-[11px] font-black">{r.initial}</span>
              <span><strong>{r.name}</strong> <span className="text-ink/50">• {r.company}</span></span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
