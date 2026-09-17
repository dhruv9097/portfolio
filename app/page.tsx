import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/content/profile';
import { skillGroups } from '@/content/skills';
import { experience } from '@/content/experience';
import { projects } from '@/content/projects';
import { agents, sampleThread, sampleThreadIsSample } from '@/content/agents';
import { facts, channels } from '@/content/shramsetu';
import SectionHeading from '@/components/SectionHeading';
import Specimen from '@/components/Specimen';
import Slot from '@/components/Slot';
import Leaderboard from '@/components/Leaderboard';
import Chain from '@/components/Chain';
import Facts from '@/components/Facts';

export default function Home() {
  const latestRole = experience[0];
  const project = (slug: string) => projects.find((p) => p.slug === slug)!;

  const shramsetu = project('shramsetu');
  const trendingProject = project('github-trending');
  const smaProject = project('social-media-automation');
  const physioProject = project('physio-detection');
  const oscodeProject = project('oscode');

  return (
    <div className="space-y-28">

      {/* HERO */}
      <section className="grid sm:grid-cols-[1fr_auto] gap-8 items-start">
        <div className="space-y-6 min-w-0">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.05]">
              {profile.name}
            </h1>
            <p className="font-mono text-sm text-accent dark:text-accent-bright mt-3">
              {profile.title}
            </p>
          </div>

          <div className="max-w-measure text-lg leading-relaxed text-ink/80 dark:text-paper/80 space-y-4">
            {profile.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="flex gap-5 font-mono text-xs text-ink/50 dark:text-white/50">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent dark:hover:text-accent-bright">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent dark:hover:text-accent-bright">LinkedIn</a>
            <a href={`mailto:${profile.email}`} className="hover:text-accent dark:hover:text-accent-bright">Email</a>
          </div>
        </div>

        <div className="w-full sm:w-44 shrink-0">
          <Slot
            aspect="3 / 4"
            spec={{
              filename: 'portrait.jpg',
              spec: '3:4 · 1600×2133 min',
              note: 'window light, no flash',
            }}
          />
        </div>
      </section>

      {/* WORK */}
      <section className="space-y-24">
        <SectionHeading>selected work</SectionHeading>

        {/* 1 — ShramSetu */}
        <Specimen
          title={shramsetu.title}
          tech={shramsetu.tech}
          link={shramsetu.link}
          caption="Built solo for Smart India Hackathon PS1, set by the Ministry of Labour & Employment. eShram records where a worker lives; it does not record where they actually go to work. ShramSetu makes presence portable — and because that data is dangerous, the privacy rules are enforced in code rather than in policy: coordinates coarsen to district level after seven days, no cell is published below ten workers, and every individual lookup is written to a log the worker can read."
        >
          <div className="space-y-8">
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <Slot
                  media={shramsetu.media}
                  spec={{
                    filename: 'shramsetu-dashboard.png',
                    spec: '16:10 · 1440×900',
                    note: 'officer dashboard, choropleth visible',
                  }}
                />
              </div>
              <Slot
                aspect="9 / 16"
                spec={{
                  filename: 'shramsetu-checkin.png',
                  spec: '9:16 · 900×1600',
                  note: 'worker check-in, mobile',
                }}
              />
            </div>

            <Facts items={facts} />

            <div>
              <h4 className="font-mono text-xs text-ink/40 dark:text-white/40 mb-6">
                three check-in channels, each a fallback for the one above
              </h4>
              <Chain items={channels} />
            </div>
          </div>
        </Specimen>

        {/* 2 — GitHub Trending Dashboard */}
        <Specimen
          title={trendingProject.title}
          tech={trendingProject.tech}
          link={trendingProject.link}
          caption="The scraper pulls GitHub's trending page every day, cleans it with BeautifulSoup and Pandas, and scores each repo on daily star velocity rather than lifetime stars — so a two-week-old project can outrank a hundred-thousand-star incumbent. The table above is that scoring function's output."
        >
          <div className="space-y-4">
            <Leaderboard />
            <Slot
              media={trendingProject.media}
              spec={{
                filename: 'trending-ui.png',
                spec: '16:10 · 1440×900',
                note: 'leaderboard, light mode, chrome cropped',
              }}
            />
          </div>
        </Specimen>

        {/* 3 — Social Media Automation Engine */}
        <Specimen
          title={smaProject.title}
          tech={smaProject.tech}
          link={smaProject.link}
          caption="Seven agents, each with one job, run in sequence — competitor intelligence at the front, a published thread and a generated image at the back. Every phase writes a structured JSON report, and the whole pipeline runs in mock mode against fixtures so a full dry run costs nothing in API quota."
        >
          <div className="space-y-10">
            <Chain items={agents.map((a) => ({ name: a.name, job: a.job }))} />

            <div className="grid sm:grid-cols-2 gap-4">
              <Slot
                aspect="1 / 1"
                spec={{
                  filename: 'sma-generated.png',
                  spec: '1:1 · 1024×1024',
                  note: 'a real Pollinations.ai output',
                }}
              />
              <Slot
                media={smaProject.media}
                aspect="1 / 1"
                spec={{
                  filename: 'sma-ui.png',
                  spec: '1:1 crop · 1440×900 source',
                  note: 'social manager dashboard',
                }}
              />
            </div>

            <figure className="border-l-2 border-accent dark:border-accent-bright pl-5 space-y-3">
              <figcaption className="font-mono text-xs text-ink/40 dark:text-white/40">
                architect agent output{sampleThreadIsSample && ' · sample'}
              </figcaption>
              {sampleThread.map((line, i) => (
                <p key={i} className="max-w-measure text-ink/80 dark:text-paper/80 leading-relaxed">
                  {line}
                </p>
              ))}
            </figure>
          </div>
        </Specimen>

        {/* 4 — Physio-Detection */}
        <Specimen
          title={physioProject.title}
          tech={physioProject.tech}
          caption="MediaPipe tracks the hand, OpenCV renders the stroke, and the gap between those two is the entire product — every millisecond of latency shows up as a line that lags behind your finger. Most of the work went into the recognition loop, not the drawing."
        >
          <Slot
            media={physioProject.media}
            aspect="16 / 9"
            spec={{
              filename: 'virtual-paint.mp4',
              spec: '16:9 · 8–12s · muted loop · ≤2MB',
              note: 'start and end on an empty canvas',
            }}
          />
        </Specimen>

        {/* 5 — OSCode */}
        <Specimen
          title={oscodeProject.title}
          tech={oscodeProject.tech}
          isPrivate
          caption="Nine applications in one Turborepo, sharing UI, schema, and analytics packages. NestJS services over Prisma and PostgreSQL at the back; BullMQ and Redis carrying event registrations, notifications, and mentor payouts off the request path; Typesense handling mentor search."
        >
          <Slot
            media={oscodeProject.media}
            spec={{
              filename: 'oscode-architecture.svg',
              spec: '16:10 · redacted system diagram',
              note: 'sketch it on paper — I will redraw it',
            }}
          />
        </Specimen>
      </section>

      {/* CURRENTLY */}
      <section>
        <SectionHeading>currently</SectionHeading>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
          <p className="text-lg">
            <span className="font-display font-semibold">{latestRole.role}</span>
            <span className="text-ink/50 dark:text-white/50"> at {latestRole.org}</span>
          </p>
          <Link
            href="/resume"
            className="flex items-center gap-1 font-mono text-xs text-ink/50 dark:text-white/50 hover:text-accent dark:hover:text-accent-bright shrink-0"
          >
            full resume <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>

      {/* STACK */}
      <section>
        <SectionHeading>stack</SectionHeading>
        <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="flex flex-col sm:flex-row gap-1 sm:gap-4">
              <dt className="font-mono text-xs text-ink/40 dark:text-white/40 sm:w-40 shrink-0 sm:pt-0.5">
                {group.title}
              </dt>
              <dd className="font-mono text-sm text-ink/80 dark:text-paper/80">
                {group.skills.join(', ')}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* CONTACT */}
      <section>
        <SectionHeading>get in touch</SectionHeading>
        <p className="max-w-measure text-lg leading-relaxed text-ink/80 dark:text-paper/80">
          I&rsquo;m looking for full-stack work — frontend, backend, or the parts in between.{' '}
          <a
            href={`mailto:${profile.email}`}
            className="text-accent dark:text-accent-bright underline underline-offset-4 decoration-1"
          >
            {profile.email}
          </a>
        </p>
      </section>

    </div>
  );
}
