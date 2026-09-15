import Link from "next/link";
import { profile } from "@/content/profile";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function SiteNav() {
  return (
    <header className="flex justify-between items-center mb-20">
      <Link href="/" className="font-display font-semibold text-lg">
        {profile.name.split(" ")[0]}
      </Link>

      <nav className="flex items-center gap-5 font-mono text-xs">
        <Link href="/resume" className="text-ink/60 dark:text-white/60 hover:text-accent dark:hover:text-accent-bright">
          resume
        </Link>
        <a
          href={`mailto:${profile.email}`}
          className="border border-ink/25 dark:border-white/25 px-3 py-1.5 hover:border-accent hover:text-accent dark:hover:border-accent-bright dark:hover:text-accent-bright transition-colors"
        >
          contact
        </a>
        <ThemeSwitch />
      </nav>
    </header>
  );
}
