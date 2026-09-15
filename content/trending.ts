// Replace with a real export from the GitHub Trending Dashboard scraper,
// then set isSample to false so the "sample" marker stops rendering.
export const isSample = true;

export type TrendingRepo = {
  name: string;
  language: string;
  stars: number;
  starsToday: number;
};

export const HYPE_MULTIPLIER = 1.25;

export function hypeScore(repo: TrendingRepo): number {
  return Math.round(repo.starsToday * HYPE_MULTIPLIER);
}

export const trending: TrendingRepo[] = [
  { name: "microsoft/markitdown", language: "Python", stars: 38412, starsToday: 1204 },
  { name: "vercel/next.js", language: "TypeScript", stars: 132880, starsToday: 486 },
  { name: "ollama/ollama", language: "Go", stars: 104233, starsToday: 452 },
  { name: "openai/whisper", language: "Python", stars: 76901, starsToday: 318 },
  { name: "shadcn-ui/ui", language: "TypeScript", stars: 79544, starsToday: 297 },
  { name: "nestjs/nest", language: "TypeScript", stars: 69120, starsToday: 141 },
  { name: "prisma/prisma", language: "Rust", stars: 40587, starsToday: 96 },
  { name: "typesense/typesense", language: "C++", stars: 22314, starsToday: 74 },
];
