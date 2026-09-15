export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xs text-ink/40 dark:text-white/40 pb-3 mb-10 border-b border-ink/10 dark:border-white/10">
      {children}
    </h2>
  );
}
