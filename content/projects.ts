export type ProjectMedia =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; poster: string; alt: string };

export type Project = {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  tech: string[];
  link?: string;
  private?: boolean;
  media?: ProjectMedia;
};

export const projects: Project[] = [
  {
    slug: "shramsetu",
    title: "ShramSetu",
    description:
      "An offline-first PWA that lets India's unorganised workers carry portable, verifiable proof of where they have worked — built solo for Smart India Hackathon PS1 (Ministry of Labour & Employment).",
    bullets: [
      "Built solo for Smart India Hackathon PS1: an offline-first PWA that lets India's 31.89 crore unorganised workers mark their own presence as they migrate, replacing eShram's static home-address record with portable, verifiable proof of work.",
      "Engineered three degrading check-in channels — worksite QR scan, one-tap geofenced attestation, and a missed-call IVR path for feature phones — backed by an IndexedDB offline queue that drains on reconnect without rewinding a worker's current location.",
      "Designed a privacy kernel enforcing k-anonymity (k = 10) with complementary suppression, 7-day coordinate coarsening to district granularity, and individual access gated behind a recorded legal basis and a worker-readable audit log, verified by 22 automated privacy assertions.",
      "Shipped an officer dashboard rendering a 726-district choropleth and 14 migration corridors from a bundled 179 KB TopoJSON set, requiring no tile server, plus an employer console issuing printable worksite QR codes and attested muster rolls.",
      "Constrained AI to schema-bound classification: Gemini triages multilingual grievances and translates relief broadcasts while the worker's verbatim words are preserved, with an icon-based fallback that keeps the flow working when no model is reachable.",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Prisma", "PostgreSQL", "d3-geo", "Gemini API"],
    link: "https://github.com/dhruv9097/shram-setu",
  },
  {
    slug: "github-trending",
    title: "GitHub Trending Dashboard",
    description:
      "Scrapes GitHub's daily trending page and ranks repos by a custom Hype Score. Python/BeautifulSoup backend, Next.js/TypeScript frontend.",
    bullets: [
      "Built a full-stack dashboard that scrapes GitHub's daily trending page, computes a custom Hype Score (1.25× daily star growth), and surfaces insights in real time.",
      "Python backend uses BeautifulSoup and Pandas to parse, clean, and export repo data to CSV; the Next.js/TypeScript frontend renders an interactive leaderboard.",
      "Designed a clean data pipeline from raw HTML scrape to a structured, auto-refreshing frontend view.",
    ],
    tech: ["Python", "BeautifulSoup", "Pandas", "Next.js", "TypeScript"],
    link: "https://github.com/dhruv9097/github-trending",
  },
  {
    slug: "social-media-automation",
    title: "Social Media Automation Engine",
    description:
      "A 7-phase multi-agent pipeline that scrapes competitors, scores trends, drafts posts, and generates images — live/mock modes with quota management.",
    bullets: [
      "Engineered a 7-phase multi-agent AI system to automate social media management, spanning competitor intelligence, trend analysis, content creation, and AI image generation.",
      "Built specialised agents: Spy Agent, Auditor Agent, Image Analyst, Trend Hijack Agent, Architect Agent, Engagement Agent, and Image Generator.",
      "Architected a live/mock dual-mode pipeline with quota management, structured JSON reporting, and a Next.js social manager UI dashboard.",
    ],
    tech: ["Python", "Gemini Vision API", "Pollinations.ai", "BeautifulSoup"],
    link: "https://github.com/dhruv9097/social-media-automation",
  },
  {
    slug: "physio-detection",
    title: "Physio-Detection: Virtual Paint",
    description:
      "A computer vision app for drawing on-screen with hand gestures — real-time tracking with MediaPipe, tuned for low-latency gesture recognition.",
    bullets: [
      "Developed a computer vision application allowing users to draw on-screen using hand gestures without physical contact.",
      "Leveraged MediaPipe for real-time hand-tracking and OpenCV for image processing and gesture rendering.",
      "Optimised gesture recognition algorithms to reduce latency and improve drawing precision.",
    ],
    tech: ["Python", "OpenCV", "MediaPipe"],
  },
  {
    slug: "oscode",
    title: "OSCode Platform",
    description:
      "Full-stack features across a 9+ app Turborepo monorepo — NestJS/Prisma APIs, background job queues, mentor search, and the React Native mobile screens on top.",
    bullets: [],
    tech: ["Next.js", "NestJS", "Prisma", "BullMQ", "Turborepo"],
    private: true,
  },
];
