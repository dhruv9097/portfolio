import { ArrowUpRight, Lock } from "lucide-react";

export default function Specimen({
  title,
  tech,
  link,
  isPrivate,
  caption,
  children,
}: {
  title: string;
  tech: string[];
  link?: string;
  isPrivate?: boolean;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <article className="space-y-5">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold">{title}</h3>
          <p className="font-mono text-xs text-ink/40 dark:text-white/40 mt-1.5">
            {tech.join("  /  ")}
          </p>
        </div>

        {isPrivate ? (
          <span className="flex items-center gap-1.5 font-mono text-xs text-ink/50 dark:text-white/50 border border-ink/20 dark:border-white/20 px-2 py-1 shrink-0">
            <Lock size={11} /> private
          </span>
        ) : link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-mono text-xs text-ink/60 dark:text-white/60 hover:text-accent dark:hover:text-accent-bright shrink-0"
          >
            repo <ArrowUpRight size={13} />
          </a>
        ) : null}
      </header>

      {children}

      <p className="max-w-measure text-ink/70 dark:text-white/70 leading-relaxed">
        {caption}
      </p>
    </article>
  );
}
