
import Image from "next/image";
import Icon from "../ui/Icon";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[calc(100svh-4rem)] w-full flex-col overflow-hidden bg-ink text-white md:min-h-0 md:overflow-visible md:bg-transparent md:text-ink"
    >
      {/* Mobile Background Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black via-black/75 via-25% to-black/5 md:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/25 via-transparent to-transparent md:hidden"
      />

      {/* Mobile Top Badge */}
      <span className="hero-reveal hero-delay-1 absolute left-5 top-4 z-30 inline-flex max-w-[calc(100%-2.5rem)] items-center gap-2 rounded-full border border-white/25 bg-black/30 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-white/95 backdrop-blur-md sm:left-8 sm:text-[10px] md:hidden">
        <Icon
          name="starFill"
          className="h-3.5 w-3.5 shrink-0 text-amber-400"
        />
        <span>Top 1% Direct Response Creator &amp; Strategist</span>
      </span>

      {/* Hero Layout */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-5 pb-7 pt-24 sm:px-8 sm:pb-10 md:grid md:min-h-[620px] md:grid-cols-2 md:items-center md:gap-12 md:px-6 md:py-12">
        {/* Portrait: Full Background on Mobile, Portrait Card on Desktop */}
        <div className="absolute inset-0 z-0 md:relative md:inset-auto md:order-2 md:mx-auto md:w-full md:max-w-sm">
          <div className="relative h-full md:h-auto">
            <div className="absolute inset-0 overflow-hidden md:relative md:aspect-[3/4] md:rounded-t-[999px] md:rounded-b-3xl md:border-4 md:border-paper md:shadow-xl">
              <Image
                src="/profile.jpg"
                alt="UGC creator portrait"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 767px) 100vw, 384px"
                className="hero-image-motion object-cover object-[50%_12%] md:object-[50%_22%]"
              />

              {/* Desktop Image Labels */}
              <span className="absolute bottom-14 left-3 hidden rounded-lg bg-paper/95 px-3 py-1.5 text-start shadow md:block">
                <span className="block text-[9px] font-extrabold uppercase tracking-wider text-brand">
                  High ROAS
                </span>
                <span className="block text-[11px] font-bold text-ink">
                  Content That Sells
                </span>
              </span>

              <span className="absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-10 text-center text-[10px] font-bold uppercase tracking-[.2em] text-white md:block">
                Direct-Response Specialist
              </span>
            </div>

            {/* Floating Track Record Card - Desktop */}
            <div className="hero-float absolute -left-6 -top-4 z-10 hidden items-center gap-2.5 rounded-xl border border-line bg-paper px-3 py-2 shadow-lg md:flex">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Icon name="bolt" className="h-4 w-4" />
              </span>

              <span className="text-start leading-tight">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-ink/45">
                  Track Record
                </span>
                <span className="block text-xs font-extrabold text-ink">
                  +50 Brands Served
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-2xl text-center md:order-1 md:text-start">
          {/* Desktop Badge */}
          <span className="hero-reveal hidden items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-[11px] font-semibold text-ink/75 md:inline-flex">
            <Icon
              name="starFill"
              className="h-3 w-3 text-amber-500"
            />
            Top 1% Direct Response Creator &amp; Strategist
          </span>

          {/* Headline */}
          <h1 className="hero-reveal hero-delay-2 mx-auto mt-4 max-w-xl font-serif text-[clamp(2.15rem,8vw,2.8rem)] font-bold leading-[1.07] tracking-tight text-white md:mx-0 md:mt-5 md:text-6xl md:leading-[1.1] md:text-ink">
            UGC That Doesn&apos;t Just Get Views —{" "}
            <em className="text-brand">It Gets Orders.</em>
          </h1>

          {/* Description */}
          <p className="hero-reveal hero-delay-3 mx-auto mt-4 max-w-md text-xs leading-relaxed text-white/80 sm:text-sm sm:leading-6 md:mx-0 md:mt-5 md:text-base md:leading-7 md:text-ink/65">
            Scroll-stopping hooks, organic aesthetics, and direct-response
            performance scripts designed to drop your CAC and boost TikTok
            &amp; Meta ROAS.
          </p>

          {/* Desktop Actions */}
          <div className="hero-reveal hero-delay-4 mt-7 hidden gap-3 md:flex">
            <a href="#contact" className="btn">
              Let&apos;s Work Together
              <Icon name="arrow" className="h-4 w-4" />
            </a>

            <a href="#works" className="btn-ghost">
              <Icon name="play" className="h-3 w-3 text-brand" />
              Watch My Work
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="hero-reveal hero-delay-4 mx-auto mt-5 flex w-full max-w-lg gap-2 sm:mt-7 sm:gap-3 md:hidden">
            <a
              href="#contact"
              className="inline-flex min-h-12 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full bg-brand px-2 py-3 text-[11px] font-bold text-white shadow-lg shadow-black/20 transition duration-300 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:gap-2 sm:px-4 sm:text-sm"
            >
              <span className="whitespace-nowrap">
                Let&apos;s Work Together
              </span>
              <Icon
                name="arrow"
                className="h-3.5 w-3.5 shrink-0"
              />
            </a>

            <a
              href="#works"
              className="inline-flex min-h-12 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full border border-white/40 bg-white/10 px-2 py-3 text-[11px] font-bold text-white backdrop-blur-md transition duration-300 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:gap-2 sm:px-4 sm:text-sm"
            >
              <Icon
                name="play"
                className="h-3 w-3 shrink-0"
              />
              <span className="whitespace-nowrap">Watch My Work</span>
            </a>
          </div>

          {/* Trust Indicator */}
          <div className="hero-reveal hero-delay-5 mt-5 flex items-center justify-center gap-2 text-[10px] font-semibold text-white/75 sm:mt-7 sm:text-xs md:justify-start md:text-ink/60">
            <Icon
              name="bolt"
              className="h-4 w-4 shrink-0 text-amber-400"
            />
            <span>50+ Brands Served</span>
            <span className="text-white/40 md:text-ink/30">•</span>
            <span>TikTok &amp; Meta Creative</span>
          </div>
        </div>
      </div>
    </section>
  );
}
