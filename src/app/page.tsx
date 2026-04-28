import { CharacterCard } from "@/components/CharacterCard";
import { FeatureCard } from "@/components/FeatureCard";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { GameplayCard } from "@/components/GameplayCard";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NewsCard } from "@/components/NewsCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { Timeline } from "@/components/Timeline";
import {
  characters,
  finalCta,
  gameplayItems,
  hero,
  navigation,
  newsItems,
  pillars,
  timelineItems,
  universe,
} from "@/data/site";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-main text-text-main">
      <ScrollReveal />
      <Header items={navigation} />
      <Hero content={hero} />

      <section
        id="universo"
        className="texture-dark cyber-grid border-t border-border-subtle px-5 py-24 sm:px-8 sm:py-28 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.75fr)] lg:items-center xl:gap-20">
          <div className="max-w-3xl">
            <SectionTitle
              eyebrow={universe.eyebrow}
              title={universe.title}
              description={universe.description}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {universe.signals.map((signal) => (
              <div
                className="holo-detail rounded-md border border-border-subtle p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-6"
                key={signal.label}
              >
                <p className="font-mono text-sm text-electric-blue">
                  {signal.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {signal.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pilares"
        className="neon-atmosphere px-5 py-24 sm:px-8 sm:py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Dois pilares"
            title="O jogo nasce entre pressão social e tecnologia de rua."
            description={"Sobreviver exige leitura, risco e inteligência urbana.\nCada sistema reage. Cada escolha deixa marca."}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {pillars.map((pillar, index) => (
              <FeatureCard index={index + 1} item={pillar} key={pillar.title} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="personagens"
        className="texture-dark border-y border-border-subtle px-5 py-24 sm:px-8 sm:py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Personagens"
            title="Vozes que sobrevivem à cidade."
            description={"Cada personagem carrega uma forma de sobreviver, lutar e manipular o sistema.\nAqui, ninguém é neutro, todo mundo faz parte do conflito."}
          />
          {/* Estrutura simples mantida em grid para permitir evoluir para carrossel quando houver mais personagens. */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {characters.map((character) => (
              <CharacterCard item={character} key={character.name} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="gameplay"
        className="cyber-grid bg-bg-secondary px-5 py-24 sm:px-8 sm:py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Gameplay"
            title="Ação, infiltração e controle no mesmo circuito."
            description={"Cada movimento altera o sistema.\nCada escolha muda o que a cidade permite, ou bloqueia."}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {gameplayItems.map((item) => (
              <GameplayCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="historia"
        className="texture-dark border-y border-border-subtle px-5 py-24 sm:px-8 sm:py-28 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle
            eyebrow="Timeline"
            title="Uma cidade que aprende a resistir."
            description={"Tudo mudou em silêncio.\nAgora, cada ato revela quem controla e quem resiste."}
          />
          <Timeline items={timelineItems} />
        </div>
      </section>

      <section
        id="noticias"
        className="neon-atmosphere bg-bg-secondary px-5 py-24 sm:px-8 sm:py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Devlog"
            title="Notícias do desenvolvimento."
            description="Espaço reservado para progresso de produção, bastidores, versões jogáveis e chamadas públicas."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {newsItems.map((item) => (
              <NewsCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA content={finalCta} />
      <Footer items={navigation} />
    </main>
  );
}
