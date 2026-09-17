export type ChainItem = {
  name: string;
  job: string;
};

export default function Chain({ items }: { items: readonly ChainItem[] }) {
  return (
    <ol className="relative border-l border-ink/15 dark:border-white/15 ml-[5px]">
      {items.map((item, i) => (
        <li key={item.name} className="relative pl-8 pb-7 last:pb-0">
          <span className="absolute -left-[5px] top-[7px] w-[9px] h-[9px] rounded-full bg-accent dark:bg-accent-bright" />
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-ink/40 dark:text-white/40 tabular-nums">
              {i + 1}
            </span>
            <h4 className="font-display font-semibold">{item.name}</h4>
          </div>
          <p className="text-ink/70 dark:text-white/70 mt-1 max-w-measure">{item.job}</p>
        </li>
      ))}
    </ol>
  );
}
