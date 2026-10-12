import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE } from "../lib/site";

const sans = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const serif = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], weight: ["600", "700", "800"], display: "swap", variable: "--font-serif" });

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#f8f1e7" };

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s | ${SITE.creator}` },
  description: SITE.description,
  keywords: ["UGC creator", "direct response UGC", "TikTok ads creator", "Meta ads UGC", "UGC videos", "ROAS", "skincare UGC", "hook packs"],
  authors: [{ name: SITE.creator }],
  creator: SITE.creator,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", locale: "en_US", url: SITE.url, siteName: SITE.brand, title: SITE.title, description: SITE.description, images: [{ url: "/profile.jpg", width: 900, height: 1572, alt: "Valentina, UGC creator" }] },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description, images: ["/profile.jpg"] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
