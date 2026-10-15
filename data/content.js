export const STATS = [
  { value: "50+", label: "Brands Collaborated" },
  { value: "300+", label: "Videos Created" },
  { value: "5M+", label: "Views Generated" },
  { value: "3.5X", label: "Avg ROAS Boost" },
];

export const FILTERS = [
  { id: "all", label: "All" },
  { id: "beauty", label: "Beauty & Skincare" },
  { id: "fashion", label: "Fashion & OOTD" },
  { id: "lifestyle", label: "Lifestyle" },
];

  export const WORKS = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    src: `/videos/${i + 1}.mp4`,
    cover: `/cover/${i + 1}.jpg`,
  }));
export const WHY = [
  { icon: "scissors", tone: "red", title: "Hook-First Editing", text: "First 3 seconds engineered with visual pattern interrupts, curiosity gaps, and sound triggers to halt endless scrolling." },
  { icon: "chat", tone: "amber", title: "Authentic Storytelling", text: "Speaking peer-to-peer, not like a polished corporate commercial. Builds rapid trust and organic social proof." },
  { icon: "bolt", tone: "dark", title: "48-Hour Fast Turnaround", text: "Rapid production so you can iterate on creative testing before campaign trends and seasonal angles fade." },
];

export const FUNNEL = [
  { stage: "Stage 01", title: "Attention (0–3s)", text: "Pique curiosity & stop the feed.", badge: "Stop Rate >35%", tone: "red" },
  { stage: "Stage 02", title: "Connection (3–20s)", text: "Relatable pain-point & solution demo.", badge: "Retention 60%+", tone: "sand" },
  { stage: "Stage 03", title: "Conversion (20–30s)", text: "Frictionless offer & call to action.", badge: "High CVR", tone: "good" },
];

export const SERVICES = [
  { icon: "box", title: "Unboxing Experiences", text: "Sensory focus, premium packaging reveals, and genuine first impressions." },
  { icon: "lipstick", title: "GRWM & How-To", text: "Seamless daily routine integration that highlights problem-solution naturally." },
  { icon: "star", title: "Direct Testimonials", text: "High-credibility selfie reviews addressing common customer hesitations." },
  { icon: "rocket", title: "TikTok & Meta Ads", text: "Scripted for paid acquisition with clear text overlays and fast pacing." },
  { icon: "search", title: "In-Depth Reviews", text: "Feature breakdowns, ingredient highlights, and side-by-side tests." },
  { icon: "headset", title: "Hook Packs (3x)", text: "3 diverse hooks paired with 1 core body for low-cost A/B creative testing." },
];

export const STEPS = [
  { title: "Brief & Kickoff", text: "You share your brand guidelines, unique selling points, and target demographics." },
  { title: "Script & Concepting", text: "I write high-converting hooks and visual storyboards for your green light." },
  { title: "Filming & Native Editing", text: "Shot in 4K with premium studio lighting, on-screen captions, and trending pacing." },
  { title: "Delivery & Revision", text: "Delivered via Google Drive / Frame.io within 48–72h of final script approval." },
];

export const REVIEWS = [
  { role: "Skincare Brand Founder", text: "merna's hook concept dropped our CPA from $42 to $19 on TikTok Ads within 48 hours of putting it live. Her script structure is unmatched.", initial: "S", name: "Sarah M.", company: "Aura Skin Co." },
  { role: "Performance Agency Lead", text: "Fastest turnaround we've experienced with creators. Scripts were totally on-brand and didn't need any awkward reshoots. She just gets direct response.", initial: "M", name: "Marcus D.", company: "ScaleWave Media" },
];

export const PACKAGES = [
  "Starter Pack ($350)",
  "Scaling Pack ($900) - Recommended",
  "Hook Pack 3x ($550)",
  "Custom / Not sure yet",
];
