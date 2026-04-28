import Image from "next/image";
import type { Accent } from "@/data/site";

type GameplayCardProps = {
  item: {
    title: string;
    description: string;
    assetPath: string;
    assetAlt: string;
    accent: Accent;
  };
};

type AccentStyle = React.CSSProperties & {
  "--accent": Accent;
};

export function GameplayCard({ item }: GameplayCardProps) {
  return (
    <article
      className="motion-card group overflow-hidden rounded-md border border-border-subtle bg-bg-main/95 shadow-[0_30px_90px_rgba(0,0,0,0.26)] transition duration-300 ease-out hover:border-[var(--accent)] hover:shadow-[0_38px_120px_rgba(0,0,0,0.38)]"
      style={{ "--accent": item.accent } as AccentStyle}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          alt={item.assetAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          height={720}
          src={item.assetPath}
          width={1280}
        />
        <div className="absolute left-6 top-6 h-2 w-24 bg-[var(--accent)]" />
        <div className="media-contrast pointer-events-none absolute inset-0" />
        <div className="scanline absolute inset-0 opacity-35" />
      </div>
      <div className="p-6 sm:p-7">
        <h3 className="text-2xl font-black text-text-main">{item.title}</h3>
        <p className="mt-4 whitespace-pre-line text-sm leading-7 text-text-secondary">
          {item.description}
        </p>
      </div>
    </article>
  );
}
