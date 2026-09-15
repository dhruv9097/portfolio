export type ProjectMedia =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; poster: string; alt: string };

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  private?: boolean;
  media?: ProjectMedia;
};

export const projects: Project[] = [
  {
    slug: "oscode",
    title: "OSCode Platform",
    description:
      "Full-stack features across a 9+ app Turborepo monorepo — NestJS/Prisma APIs, background job queues, mentor search, and the React Native mobile screens on top.",
    tech: ["Next.js", "NestJS", "Prisma", "BullMQ", "Turborepo"],
    private: true,
  },
  {
    slug: "github-trending",
    title: "GitHub Trending Dashboard",
    description:
      "Scrapes GitHub's daily trending page and ranks repos by a custom Hype Score. Python/BeautifulSoup backend, Next.js/TypeScript frontend.",
    tech: ["Python", "Pandas", "Next.js", "TypeScript"],
    link: "https://github.com/dhruv9097/github-trending",
  },
  {
    slug: "social-media-automation",
    title: "Social Media Automation Engine",
    description:
      "A 7-phase multi-agent pipeline that scrapes competitors, scores trends, drafts posts, and generates images — live/mock modes with quota management.",
    tech: ["Python", "Gemini Vision API", "Pollinations.ai"],
    link: "https://github.com/dhruv9097/social-media-automation",
  },
  {
    slug: "physio-detection",
    title: "Physio-Detection: Virtual Paint",
    description:
      "A computer vision app for drawing on-screen with hand gestures — real-time tracking with MediaPipe, tuned for low-latency gesture recognition.",
    tech: ["Python", "OpenCV", "MediaPipe"],
  },
];
