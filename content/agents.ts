export type Agent = {
  name: string;
  job: string;
};

// The 7-phase pipeline from the Social Media Automation Engine.
export const agents: Agent[] = [
  { name: "Spy Agent", job: "Scrapes 7 days of competitor posts and engagement." },
  { name: "Auditor Agent", job: "Diffs that corpus against our own output to find content gaps." },
  { name: "Image Analyst", job: "Reads what actually performed, visually, through the Gemini Vision API." },
  { name: "Trend Hijack Agent", job: "Scores live world trends for relevance and remaining runway." },
  { name: "Architect Agent", job: "Drafts the thread and its reply chain against the scored brief." },
  { name: "Engagement Agent", job: "Times publication to the Golden Hour protocol." },
  { name: "Image Generator", job: "Generates the accompanying visual through Pollinations.ai." },
];

// Sample output from the Architect Agent — replace with a real drafted thread.
export const sampleThreadIsSample = true;

export const sampleThread: string[] = [
  "Everyone benchmarks vector DBs on recall. Almost nobody benchmarks them on the thing that actually breaks in production: write amplification during reindex.",
  "We ran 40M vectors through four engines while writing 2k/sec. Two of them silently doubled p99 read latency the moment a reindex kicked off.",
  "Full numbers, methodology, and the reindex traces are in the repo. The engine that won is not the one that wins on recall charts.",
];
