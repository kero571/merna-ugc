
"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "My Work", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="container-x mx-auto"
      >
        <div className="flex h-16 items-center justify-between gap-4 md:h-[76px]">
          {/* Brand */}
          <a
            href="#top"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-2.5"
            aria-label={`${SITE.creator} - Home`}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-sm font-bold text-white shadow-sm">
              {SITE.creator?.charAt(0) || "V"}
            </span>

            <span className="min-w-0">
              <span className="block truncate font-serif text-base font-bold tracking-tight text-ink sm:text-lg">
                {SITE.creator}
              </span>
              <span className="hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-ink/50 sm:block">
                UGC Creator & Strategist
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-2 text-xs font-semibold text-ink/65 transition-colors hover:text-brand lg:text-sm"
              >
                {link.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-brand transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-xs font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md lg:inline-flex"
          >
            Let&apos;s Collaborate
            <span aria-hidden="true">↗</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-paper text-ink transition hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 md:hidden"
          >
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="grid gap-1 border-t border-line pb-4 pt-3 md:hidden"
          >
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-ink/75 transition hover:bg-brand/5 hover:text-brand"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                {link.label}
                <span aria-hidden="true" className="text-brand/60">
                  →
                </span>
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition hover:brightness-95"
            >
              Let&apos;s Collaborate
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
