"use client";
import Image from "next/image";
import { useState } from "react";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { WORKS } from "@/data/content";

function VideoCard({ work, playing, onPlay, onEnd }) {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);

  const handlePlay = () => {
    setReady(false);
    setError(false);
    onPlay();
  };

  return (
    <div className="card relative aspect-[9/16] overflow-hidden bg-ink">
      {!playing ? (
        <button
          onClick={handlePlay}
          aria-label={`Play video ${work.id}`}
          className="group absolute inset-0 block h-full w-full"
        >
          <Image
            src={work.cover}
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
        </button>
      ) : (
        <>
          <video
            src={work.src}
            poster={work.cover}
            controls
            autoPlay
            playsInline
            preload="auto"
            onCanPlay={() => setReady(true)}
            onError={() => setError(true)}
            onEnded={onEnd}
            className={`absolute inset-0 h-full w-full bg-black object-cover transition-opacity duration-300 ${
              ready ? "opacity-100" : "opacity-0"
            }`}
          />

          {!ready && !error && (
            <div
              role="status"
              aria-live="polite"
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/60"
            >
              <span className="h-9 w-9 animate-spin rounded-full border-4 border-white/20 border-t-brand" />
              <span className="text-[11px] font-bold text-white/80">Loading…</span>
            </div>
          )}

          {error && (
            <div
              role="alert"
              className="absolute inset-0 flex items-center justify-center bg-black/80 p-4 text-center text-xs font-bold text-white/80"
            >
              Couldn't load the video.
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function Works() {
  const [activeId, setActiveId] = useState(null);

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

      <ul className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {WORKS.map((w) => (
          <li key={w.id}>
            <VideoCard
              work={w}
              playing={activeId === w.id}
              onPlay={() => setActiveId(w.id)}
              onEnd={() => setActiveId(null)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}