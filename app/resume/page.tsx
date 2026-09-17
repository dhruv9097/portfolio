import { Download, Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { profile } from '@/content/profile';
import { experience } from '@/content/experience';
import { skillGroups } from '@/content/skills';
import { projects } from '@/content/projects';
import SectionHeading from '@/components/SectionHeading';

export default function Resume() {
  return (
    <div className="space-y-20">

      {/* HEADER */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-ink/10 dark:border-white/10 pb-8 gap-6">
        <div className="space-y-3">
          <h1 className="font-display text-4xl font-semibold">{profile.name}</h1>
          <p className="font-mono text-sm text-accent dark:text-accent-bright">
            {profile.title}
          </p>
          <div className="flex flex-wrap gap-4 font-mono text-xs text-ink/50 dark:text-white/50 pt-1">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-accent dark:hover:text-accent-bright transition-colors">
              <Mail size={13} /> {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent dark:hover:text-accent-bright transition-colors">
              <Linkedin size={13} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent dark:hover:text-accent-bright transition-colors">
              <Github size={13} /> GitHub
            </a>
          </div>
        </div>

        <a
          href="/dhruv_resume.pdf"
          target="_blank"
          className="flex items-center gap-2 font-mono text-xs border border-ink/25 dark:border-white/25 px-4 py-2.5 hover:border-accent hover:text-accent dark:hover:border-accent-bright dark:hover:text-accent-bright transition-colors shrink-0"
        >
          <Download size={14} />
          <span>download pdf</span>
        </a>
      </section>

      {/* EXPERIENCE & RESEARCH */}
      <section>
        <SectionHeading>experience &amp; research</SectionHeading>
        <div className="space-y-12">
          {experience.map((item) => (
            <ResumeItem
              key={`${item.org}-${item.period}`}
              role={item.role}
              company={item.org}
              location={item.location}
              period={item.period}
              description={item.bullets}
            />
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section>
        <SectionHeading>education</SectionHeading>
        <div className="space-y-12">
          <ResumeItem
            role="B.Sc. (Hons.) in Data Science"
            company="Tribhuvan College, Nalanda University Centre"
            location="Neemrana, Rajasthan"
            period="2023 – Present"
            description="GPA: 7.75 (10 scale). Coursework: Machine Learning, Data Visualization, SQL, Python Programming."
          />

          <ResumeItem
            role="Senior Secondary (Class XII)"
            company="Symbiosis Public School"
            location="Dhanbad, Jharkhand"
            period="2021 – 2023"
            description="PCM with Informatics Practices. Secured 74%."
          />
        </div>
      </section>

      {/* PROJECTS */}
      <section>
        <SectionHeading>projects</SectionHeading>
        <div className="space-y-12">
          {projects
            .filter((p) => p.bullets.length > 0)
            .map((p) => (
              <ResumeItem
                key={p.slug}
                role={p.title}
                company={p.tech.join(', ')}
                location=""
                period=""
                description={p.bullets}
                link={p.link}
              />
            ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section>
        <SectionHeading>leadership</SectionHeading>
        <div className="space-y-12">
          <ResumeItem
            role="Event Organizer"
            company="Tribhuvan College"
            location="Neemrana"
            period="2023"
            description="Coordinated the 'Principal's Meet' summit discussing Climate & Environment. Managed logistics for inter-school debate competitions."
          />
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section>
        <SectionHeading>technical skills</SectionHeading>
        <dl className="space-y-5">
          {skillGroups.map((group) => (
            <div key={group.title} className="flex flex-col sm:flex-row gap-1 sm:gap-6">
              <dt className="font-mono text-xs text-ink/40 dark:text-white/40 sm:w-44 shrink-0 sm:pt-0.5">
                {group.title}
              </dt>
              <dd className="font-mono text-sm text-ink/80 dark:text-paper/80">
                {group.skills.join(', ')}
              </dd>
            </div>
          ))}
        </dl>
      </section>

    </div>
  );
}

function ResumeItem({ role, company, location, period, description, link }: { role: string, company: string, location: string, period: string, description: string | string[], link?: string }) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-1">
        <h3 className="font-display text-xl font-semibold">{role}</h3>
        {period ? (
          <span className="font-mono text-xs text-ink/40 dark:text-white/40 shrink-0">{period}</span>
        ) : link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-mono text-xs text-ink/50 dark:text-white/50 hover:text-accent dark:hover:text-accent-bright shrink-0"
          >
            repo <ArrowUpRight size={12} />
          </a>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-2 items-center font-mono text-xs text-ink/50 dark:text-white/50 mb-4">
        <span>{company}</span>
        {location && (
          <>
            <span className="w-[3px] h-[3px] rounded-full bg-accent dark:bg-accent-bright" />
            <span>{location}</span>
          </>
        )}
      </div>

      {Array.isArray(description) ? (
        <ul className="space-y-2 max-w-measure text-ink/75 dark:text-paper/75 leading-relaxed list-disc list-outside ml-4 marker:text-accent dark:marker:text-accent-bright">
          {description.map((line, i) => (
            <li key={i} className="pl-1">{line}</li>
          ))}
        </ul>
      ) : (
        <p className="max-w-measure text-ink/75 dark:text-paper/75 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
