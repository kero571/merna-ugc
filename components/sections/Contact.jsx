const WHATSAPP_NUMBER = "201XXXXXXXXX";

const whatsappMessage = encodeURIComponent(
  "Hi Karima! I'd love to collaborate with you on a project. Let's talk!",
);

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/mernaayman1416?igsh=NWtwaDB2ODdpbDJj&utm_source=qr",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },

  {
    name: "TikTok",
    href: "www.tiktok.com/@mernaayman6813",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.6 7.1a6.3 6.3 0 0 1-3.8-1.3v7.1a6.1 6.1 0 1 1-5.3-6.1v3.7a2.5 2.5 0 1 0 1.7 2.4V2.5h3.6a6.2 6.2 0 0 0 3.8 4.6v0Z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="defer overflow-hidden bg-gradient-to-b from-sand/70 to-cream px-5 py-20 md:py-28"
    >
      <div className="container-x mx-auto text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/5 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand">
          <span className="h-2 w-2 rounded-full bg-brand" />
          Let’s Work Together
        </span>

        <h2
          id="contact-title"
          className="h2 mx-auto mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl md:text-5xl"
        >
          Ready to Create Content That <em className="text-brand">Converts?</em>
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-ink/65 md:text-base">
          Have a brand, a vision, or a campaign in mind? Let’s turn your next
          idea into content people love and remember.
        </p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Karima on WhatsApp"
          className="group mx-auto mt-8 inline-flex min-h-[64px] w-full max-w-md items-center justify-center gap-3 rounded-full bg-brand px-6 py-5 text-sm font-extrabold text-white shadow-xl shadow-brand/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30 sm:text-base"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:scale-110"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L0 24l6.5-1.7a11.8 11.8 0 0 0 5.6 1.4h.1C18.7 23.7 24 18.4 24 11.9c0-3.2-1.2-6.2-3.5-8.4ZM12.2 21.7h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.9 1 1-3.8-.3-.4a9.8 9.8 0 0 1-1.5-5.1C2 6.4 6.5 1.9 12.1 1.9a9.9 9.9 0 0 1 7 2.9 9.8 9.8 0 0 1 2.9 7c0 5.5-4.4 9.9-9.8 9.9Zm5.4-7.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.5-.1-.1-.7-1.5-.9-2-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.7 1.2 2.9c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.6-.6 1.8-1.3.2-.7.2-1.2.2-1.3-.1-.2-.4-.3-.7-.5Z" />
          </svg>
          Let’s Talk About Your Project
          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        <div className="mx-auto mt-10 flex max-w-xs items-center gap-4">
          <span className="h-px flex-1 bg-brand/15" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/45">
            Find Me Online
          </p>
          <span className="h-px flex-1 bg-brand/15" />
        </div>

        <div className="mt-5 flex items-center justify-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Karima on ${social.name}`}
              title={social.name}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-brand/15 bg-white/60 text-brand transition duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/20"
            >
              <span className="h-5 w-5">{social.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
