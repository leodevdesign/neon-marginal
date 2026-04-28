import { Button } from "@/components/Button";

type FinalCTAProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    action: { label: string; href: string };
  };
};

export function FinalCTA({ content }: FinalCTAProps) {
  return (
    <section className="neon-atmosphere cyber-grid relative flex min-h-dvh items-center overflow-hidden border-t border-border-subtle px-5 py-24 sm:px-8 lg:px-10">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-neon-red via-electric-magenta to-electric-blue" />
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-sm font-semibold uppercase text-electric-magenta">
          {content.eyebrow}
        </p>
        <h2 className="neon-title mt-5 max-w-5xl whitespace-pre-line text-5xl font-black leading-none text-text-main sm:text-7xl lg:text-8xl">
          {content.title}
        </h2>
        <p className="mt-6 max-w-2xl whitespace-pre-line text-base leading-8 text-text-secondary sm:text-xl">
          {content.description}
        </p>
        <Button className="mt-8" href={content.action.href}>
          {content.action.label}
        </Button>
      </div>
    </section>
  );
}
