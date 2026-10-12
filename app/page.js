import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Works from "@/components/sections/Works";
import WhyConvert from "@/components/sections/WhyConvert";
import Funnel from "@/components/sections/Funnel";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/data/content";
import Navbar from "@/components/sections/Navbar";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.brand,
    url: SITE.url,
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.creator,
    jobTitle: "UGC Creator & Direct-Response Strategist",
    url: SITE.url,
    image: `${SITE.url}/profile.jpg`,
    email: SITE.email,
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.brand,
    url: SITE.url,
    image: `${SITE.url}/profile.jpg`,
    description: SITE.description,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "UGC formats",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.text },
      })),
    },
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Works />
        <WhyConvert />
        <Funnel />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
