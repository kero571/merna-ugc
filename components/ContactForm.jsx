"use client";
import { PACKAGES } from "@/data/content";
import { SITE } from "@/lib/site";

// Opens the visitor's mail client with the form data (no backend required).
export default function ContactForm() {
  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name / Brand: ${f.get("name")}\nEmail: ${f.get("email")}\nPackage: ${f.get("pkg")}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Booking & Media Kit Request")}&body=${encodeURIComponent(body)}`;
  }
  return (
    <form onSubmit={onSubmit} className="card mx-auto mt-6 grid max-w-md gap-4 p-5 text-start shadow-lg">
      <div>
        <label htmlFor="name" className="label">Your Name / Brand</label>
        <input id="name" name="name" required autoComplete="organization" placeholder="e.g. Acme Cosmetics" className="field" />
      </div>
      <div>
        <label htmlFor="email" className="label">Email Address</label>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="founder@yourbrand.com" className="field" />
      </div>
      <div>
        <label htmlFor="pkg" className="label">Package / Goal</label>
        <select id="pkg" name="pkg" defaultValue={PACKAGES[1]} className="field">
          {PACKAGES.map((p) => <option key={p}>{p}</option>)}
        </select>
      </div>
      <button type="submit" className="btn w-full uppercase tracking-wide">Request Booking &amp; Media Kit</button>
      <p className="text-center text-[11px] text-ink/50">
        Direct Email: <a href={`mailto:${SITE.email}`} className="font-bold text-brand underline">{SITE.email}</a>
      </p>
    </form>
  );
}
