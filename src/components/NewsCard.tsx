import Image from "next/image";

type NewsCardProps = {
  item: {
    date: string;
    category: string;
    title: string;
    summary: string;
    assetPath: string;
    assetAlt: string;
  };
};

export function NewsCard({ item }: NewsCardProps) {
  return (
    <article
      className="motion-card group overflow-hidden rounded-md border border-border-subtle bg-bg-main/95 shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition duration-300 ease-out hover:border-electric-magenta hover:shadow-[0_32px_100px_rgba(0,0,0,0.36)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          alt={item.assetAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          height={720}
          src={item.assetPath}
          width={1152}
        />
        <div className="absolute inset-x-6 top-6 h-px bg-electric-magenta" />
        <div className="media-contrast pointer-events-none absolute inset-0" />
        <div className="absolute bottom-6 left-6 rounded border border-border-subtle bg-bg-main/80 px-3 py-2 font-mono text-xs uppercase text-electric-magenta backdrop-blur-sm">
          {item.category}
        </div>
        <div className="scanline absolute inset-0 opacity-30" />
      </div>
      <div className="p-5 sm:p-6">
        <p className="font-mono text-xs text-text-secondary">{item.date}</p>
        <h3 className="mt-3 text-xl font-black text-text-main">
          {item.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-text-secondary">
          {item.summary}
        </p>
      </div>
    </article>
  );
}
