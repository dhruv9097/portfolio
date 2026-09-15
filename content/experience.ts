export type ExperienceEntry = {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Web Development Intern",
    org: "OSCode",
    location: "Noida, Uttar Pradesh",
    period: "2026",
    bullets: [
      "Built responsive web interfaces with Next.js, React, and Tailwind CSS, and cross-platform mobile screens with React Native (Expo).",
      "Engineered REST APIs and microservices with NestJS and Node.js, using Prisma ORM over PostgreSQL for data management.",
      "Implemented background job processing and message queues with BullMQ and Redis for event registrations, notifications, and mentor payouts.",
      "Maintained a Turborepo monorepo with shared TypeScript packages (UI, schemas, analytics) across 9+ applications, improving CI/CD build times.",
      "Integrated Typesense for mentor search and the OpenAI SDK for backend automations.",
      "Handled type safety and form validation across the stack with Zod, React Hook Form, Zustand, and TanStack Query.",
    ],
  },
  {
    role: "Paper Presentation",
    org: "Subharti University",
    location: "Remote / Hybrid",
    period: "2024",
    bullets: [
      "Authored and presented “A Modern Way to Generate Electricity: Floating Solar Farms.”",
      "Analyzed the efficiency and environmental impact of floating solar photovoltaic systems against land-based alternatives.",
    ],
  },
  {
    role: "Python Hackathon Participant",
    org: "Codtech IT Solutions",
    location: "Remote",
    period: "2024",
    bullets: [
      "Competed in a Python hackathon focused on algorithmic efficiency and problem-solving.",
      "Developed scripts to solve data processing challenges within strict time limits.",
    ],
  },
];
