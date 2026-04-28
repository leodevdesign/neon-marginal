type TimelineProps = {
  items: Array<{
    time: string;
    title: string;
    description: string;
  }>;
};

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative border-l border-border-subtle">
      {items.map((item) => (
        <li className="relative pb-10 pl-8 last:pb-0" key={item.title}>
          <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-electric-blue shadow-[0_0_18px_rgba(0,229,255,0.8)]" />
          <p className="font-mono text-xs uppercase text-electric-blue">
            {item.time}
          </p>
          <h3 className="mt-3 text-2xl font-black text-text-main">
            {item.title}
          </h3>
          <p className="mt-3 max-w-2xl whitespace-pre-line text-sm leading-7 text-text-secondary">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
