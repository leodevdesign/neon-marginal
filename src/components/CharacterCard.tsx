import Image from "next/image";
import type { Accent } from "@/data/site";

type CharacterCardProps = {
  item: {
    name: string;
    role: string;
    description: string;
    assetPath: string;
    assetAlt: string;
    accent: Accent;
  };
};

type AccentStyle = React.CSSProperties & {
  "--accent": Accent;
};

export function CharacterCard({ item }: CharacterCardProps) {
  return (
    <article
      className="motion-card group flex h-full flex-col overflow-hidden rounded-md border border-border-subtle bg-bg-secondary/95 shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition duration-300 ease-out hover:border-[var(--accent)] hover:shadow-[0_32px_100px_rgba(0,0,0,0.34)]"
      data-reveal
      style={{ "--accent": item.accent } as AccentStyle}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          alt={item.assetAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          height={900}
          src={item.assetPath}
          width={720}
        />
        <div className="media-contrast pointer-events-none absolute inset-0" />
        <div className="scanline absolute inset-0 opacity-40" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-xs uppercase text-[var(--accent)]">
          {item.role}
        </p>
        <h3 className="mt-3 text-xl font-black text-text-main xl:text-2xl">
          {item.name}
        </h3>
        <p className="mt-4 whitespace-pre-line text-sm leading-7 text-text-secondary">
          {item.description}
        </p>
      </div>
    </article>
  );
}
