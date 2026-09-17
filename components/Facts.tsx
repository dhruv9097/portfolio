export default function Facts({
  items,
}: {
  items: readonly { value: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-4 gap-y-6 border-y border-ink/10 dark:border-white/10 py-6">
      {items.map((item) => (
        <div key={item.label}>
          <div className="font-mono text-xl text-accent dark:text-accent-bright tabular-nums">
            {item.value}
          </div>
          <div className="font-mono text-xs text-ink/40 dark:text-white/40 mt-1.5 leading-snug">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
