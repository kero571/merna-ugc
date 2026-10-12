import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 text-center">
      <p className="font-serif text-lg font-bold">{SITE.brand} &copy; 2026</p>
      <p className="mt-1 text-[11px] text-ink/50">High-Performance User-Generated Content &amp; Video Strategy</p>
    </footer>
  );
}
