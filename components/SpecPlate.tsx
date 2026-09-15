export type Spec = {
  filename: string;
  spec: string;
  note?: string;
};

export default function SpecPlate({ filename, spec, note }: Spec) {
  return (
    <div className="hatch absolute inset-0 border border-dashed border-ink/25 dark:border-white/25 flex items-center justify-center">
      <div className="font-mono text-xs leading-relaxed text-center px-4 space-y-1">
        <div className="text-ink/70 dark:text-white/70">{filename}</div>
        <div className="text-ink/40 dark:text-white/40">{spec}</div>
        {note && <div className="text-ink/40 dark:text-white/40">{note}</div>}
      </div>
    </div>
  );
}
