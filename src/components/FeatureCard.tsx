import Image from "next/image";
import type { Accent } from "@/data/site";

type FeatureCardProps = {
  index: number;
  item: {
    title: string;
    description: string;
    signal: string;
    assetPath: string;
    assetAlt: string;
    accent: Accent;
  };
};

type AccentStyle = React.CSSProperties & {
  "--accent": Accent;
  "--reveal-delay": string;
};

export function FeatureCard({ index, item }: FeatureCardProps) {
  return (
    <article
      className="motion-card group relative overflow-hidden rounded-md border border-border-subtle bg-bg-main/95 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] transition duration-300 ease-out hover:border-[var(--accent)] hover:shadow-[0_36px_110px_rgba(0,0,0,0.42)] sm:p-8"
      style={
        {
          "--accent": item.accent,
          "--reveal-delay": `${(index - 1) * 90}ms`,
        } as AccentStyle
      }
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-[var(--accent)]" />
      <div className="relative -mx-6 -mt-6 mb-6 aspect-video overflow-hidden border-b border-border-subtle sm:-mx-8 sm:-mt-8 sm:mb-8">
        <Image
          alt={item.assetAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          height={720}
          src={item.assetPath}
          width={1280}
        />
        <div className="media-contrast pointer-events-none absolute inset-0" />
      </div>
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-sm text-[var(--accent)]">
          0{index}
        </span>
        <span className="rounded border border-border-subtle px-3 py-1 font-mono text-xs text-text-secondary">
          {item.signal}
        </span>
      </div>
      <h3 className="mt-8 text-2xl font-black text-text-main sm:text-3xl">
        {item.title}
      </h3>
      <p className="mt-5 max-w-2xl whitespace-pre-line text-base leading-8 text-text-secondary">
        {item.description}
      </p>
    </article>
  );
}
