import { agents } from "@/content/agents";

export default function AgentChain() {
  return (
    <ol className="relative border-l border-ink/15 dark:border-white/15 ml-[5px]">
      {agents.map((agent, i) => (
        <li key={agent.name} className="relative pl-8 pb-7 last:pb-0">
          <span className="absolute -left-[5px] top-[7px] w-[9px] h-[9px] rounded-full bg-accent dark:bg-accent-bright" />
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-ink/40 dark:text-white/40 tabular-nums">
              {i + 1}
            </span>
            <h4 className="font-display font-semibold">{agent.name}</h4>
          </div>
          <p className="text-ink/70 dark:text-white/70 mt-1 max-w-measure">{agent.job}</p>
        </li>
      ))}
    </ol>
  );
}
