"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import VideoModal from "../VideoModal";
import { FILTERS, WORKS } from "@/data/content";

export default function Works() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);
  const list = filter === "all" ? WORKS : WORKS.filter((w) => w.cat === filter);

  return (
    <section id="works" aria-labelledby="works-title" className="section container-x defer">
      <SectionHeading id="works-title" eyebrow="Selected Deliverables" title="High-Converting Ads & UGC" text="Real video creatives that scaled paid TikTok & Instagram campaigns." />

      <div role="tablist" aria-label="Filter work" className="no-scrollbar -mx-5 mb-6 flex gap-2 overflow-x-auto px-5 md:mx-0 md:justify-center md:px-0">
        {FILTERS.map((f) => (
          <button key={f.id} role="tab" aria-selected={filter === f.id} onClick={() => setFilter(f.id)}
            className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition ${filter === f.id ? "border-brand bg-brand text-white" : "border-line bg-paper text-ink/75 hover:border-brand"}`}>
            {f.label}
          </button>
        ))}
      </div>

      <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {list.map((w) => (
          <li key={w.id}>
            <button onClick={() => setActive(w)} aria-label={`Play video: ${w.title}`}
              className="card group block w-full overflow-hidden text-start transition hover:-translate-y-0.5 hover:border-brand/50">
              <div className="relative aspect-[9/16] overflow-hidden bg-ink">
                <Image src="/profile.jpg" alt="" fill sizes="(max-width: 768px) 45vw, 22vw" loading="lazy"
                  style={{ objectPosition: w.pos }} className="object-cover opacity-90 transition duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                <span className="absolute left-2 top-2 rounded-md bg-paper/95 px-2 py-1 text-[9px] font-extrabold">{w.tag}</span>
                <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white animate-ring">
                  <Icon name="play" className="h-5 w-5" />
                </span>
                <span className="absolute inset-x-2 bottom-2 rounded-md bg-brand px-2 py-1 text-center text-[10px] font-extrabold text-white">{w.result}</span>
              </div>
              <div className="p-3">
                <h3 className="line-clamp-1 text-xs font-extrabold">{w.title}</h3>
                <p className="mt-1 line-clamp-1 text-[10px] text-ink/50">{w.meta}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <div className="card mx-auto mt-6 max-w-5xl p-5 text-center">
        <p className="text-xs text-ink/65">Need specific niche samples (Supplements, App, Home)?</p>
        <a href="#contact" className="mt-1 inline-flex items-center gap-1.5 text-xs font-extrabold text-brand hover:underline">
          Request custom portfolio access <Icon name="arrow" className="h-3.5 w-3.5" />
        </a>
      </div>

      {active && <VideoModal src={active.src} title={active.title} onClose={close} />}
    </section>
  );
}
