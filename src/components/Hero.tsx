import { Button } from "@/components/Button";

type HeroProps = {
  content: {
    kicker: string;
    title: string;
    description: string;
    primaryAction: { label: string; href: string };
    secondaryAction: { label: string; href: string };
  };
};

export function Hero({ content }: HeroProps) {
  return (
    <section
      className="cyber-grid relative flex min-h-dvh overflow-hidden bg-bg-main"
      id="inicio"
    >
      <video
        aria-label="Vídeo de ambientação de Neon Marginal"
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        poster="/images/hero/neon-marginal-hero-nara-vex-katana-fundo-vermelho.webp"
        preload="metadata"
      >
        <source
          src="/videos/neon-marginal-hero-katana-loop-seamless-muted.mp4"
          type="video/mp4"
        />
      </video>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-bg-main via-bg-main/85 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-electric-blue/70 to-transparent" />
      <div className="relative z-10 mt-auto w-full px-5 pb-16 pt-40 sm:px-8 sm:pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl" data-reveal>
          <p className="font-mono text-sm font-semibold uppercase text-electric-blue">
            {content.kicker}
          </p>
          <h1 className="neon-title mt-5 max-w-5xl whitespace-pre-line text-4xl font-black leading-none text-text-main sm:text-7xl lg:text-8xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-2xl whitespace-pre-line text-sm leading-7 text-text-secondary sm:mt-6 sm:text-xl sm:leading-8">
            {content.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={content.primaryAction.href}>
              {content.primaryAction.label}
            </Button>
            <Button href={content.secondaryAction.href} variant="secondary">
              {content.secondaryAction.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
