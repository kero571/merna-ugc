"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import VideoModal from "../VideoModal";
import { WORKS } from "@/data/content";

export default function Works() {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section
      id="works"
      aria-labelledby="works-title"
      className="section container-x defer"
    >
      <SectionHeading
        id="works-title"
        eyebrow="Selected Deliverables"
        title="High-Converting Ads & UGC"
        text="Real video creatives that scaled paid TikTok & Instagram campaigns."
      />

      <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {WORKS.map((w) => (
          <li key={w.id}>
            <button
              onClick={() => setActive(w)}
              aria-label={`Play video ${w.id}`}
              className="card group block w-full overflow-hidden transition hover:-translate-y-0.5 hover:border-brand/50"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-ink">
                <Image
                  src={w.cover}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 45vw, 22vw"
                  loading="lazy"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white animate-ring">
                  <Icon name="play" className="h-5 w-5" />
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <VideoModal
          src={active.src}
          cover={active.cover}
          title={`Video ${active.id}`}
          onClose={close}
        />
      )}
    </section>
  );
}
