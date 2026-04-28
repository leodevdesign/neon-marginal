export type NavigationItem = {
  label: string;
  href: string;
};

export type Accent = "#FF1E3C" | "#8B2CFF" | "#FF2BD6" | "#00E5FF";

export const navigation: NavigationItem[] = [
  { label: "Universo", href: "#universo" },
  { label: "Pilares", href: "#pilares" },
  { label: "Personagens", href: "#personagens" },
  { label: "Gameplay", href: "#gameplay" },
  { label: "História", href: "#historia" },
  { label: "Devlog", href: "#noticias" },
];

export const hero = {
  kicker: "Brasil, futuro próximo",
  title: "O sistema observa.\nA cidade responde.",
  description:
    "Numa metrópole brasileira onde dados matam e anúncios vigiam, sobreviver é hackear o controle.",
  primaryAction: { label: "Acompanhar devlog", href: "#noticias" },
  secondaryAction: { label: "Ver gameplay", href: "#gameplay" },
};

export const universe = {
  eyebrow: "Introdução do universo",
  title: "Uma cidade que nunca desliga.",
  description:
    "Entre anúncios conscientes, milícias de dados e becos iluminados por tecnologia improvisada, o controle não é centralizado, ele é disputado.",
  signals: [
    { value: "24h", label: "Nada para. Tudo reage." },
    { value: "03", label: "Histórias se cruzam em tempo real." },
    { value: "100%", label: "Brasil distópico, sujo e conectado." },
  ],
};

export const pillars = [
  {
    title: "Cidade como sistema vivo",
    description:
      "Cada bairro reage.\nRotas mudam.\nDrones caçam.\nA rua observa você.",
    signal: "Exploração urbana",
    assetPath: "/images/features/neon-marginal-feature-cidade-viva-hostil.webp",
    assetAlt:
      "Cidade cyberpunk brasileira vertical e hostil do jogo Neon Marginal",
    accent: "#00E5FF" as Accent,
  },
  {
    title: "Rebeldia tática",
    description:
      "Combate, hacking e improviso em tempo real.\nFerramentas ilegais.\nDecisões que mudam quem está do seu lado.",
    signal: "Ação estratégica",
    assetPath:
      "/images/features/neon-marginal-feature-combate-implantes-ciberneticos.webp",
    assetAlt:
      "Combate com katana e implantes cibernéticos no jogo Neon Marginal",
    accent: "#FF1E3C" as Accent,
  },
];

export const characters = [
  {
    name: "Nara Vex",
    role: "Katana neural",
    description:
      "Precisão brutal conectada ao próprio sistema nervoso.\nEla não reage, ela antecipa.",
    assetPath:
      "/images/characters/neon-marginal-personagem-nara-vex-katana-neural.webp",
    assetAlt:
      "Nara Vex com katana neural no jogo cyberpunk brasileiro Neon Marginal",
    accent: "#FF2BD6" as Accent,
  },
  {
    name: "Patch",
    role: "Hacker de implantes",
    description:
      "Invade sistemas, quebra padrões e transforma falhas em vantagem.\nSe existe um caminho, ele encontra. Se não existe, ele cria.",
    assetPath:
      "/images/characters/neon-marginal-personagem-patch-hacker-implantes.webp",
    assetAlt:
      "Patch hacker com implantes cibernéticos no jogo Neon Marginal",
    accent: "#8B2CFF" as Accent,
  },
  {
    name: "Iara Flux",
    role: "Invasora de sinal",
    description:
      "Controla o fluxo da informação e abre rotas onde a cidade tenta bloquear.\nEla não força passagem, ela reprograma o caminho.",
    assetPath:
      "/images/characters/neon-marginal-personagem-iara-flux-lider-rebelde.webp",
    assetAlt:
      "Iara Flux líder rebelde em cenário cyberpunk do jogo Neon Marginal",
    accent: "#00E5FF" as Accent,
  },
  {
    name: "Dante Kuro",
    role: "Piloto de fuga",
    description:
      "Se movimenta onde ninguém mais consegue.\nAtalhos, túneis, rotas invisíveis, ele sempre está um passo à frente.",
    assetPath:
      "/images/characters/neon-marginal-personagem-dante-kuro-cacador-corporativo.webp",
    assetAlt: "Dante Kuro caçador corporativo do universo Neon Marginal",
    accent: "#FF1E3C" as Accent,
  },
  {
    name: "Padre Síntese",
    role: "Sacerdote tecnológico",
    description:
      "Arquiva o que o sistema tentou apagar.\nMemória é poder, e ele decide o que volta à superfície.",
    assetPath:
      "/images/characters/neon-marginal-personagem-padre-sintese-sacerdote-tecnologico.webp",
    assetAlt:
      "Padre Síntese sacerdote tecnológico do jogo Neon Marginal",
    accent: "#00E5FF" as Accent,
  },
];

export const gameplayItems = [
  {
    title: "Katana neural",
    description:
      "Corte rápido, preciso e conectado ao seu sistema.\nMovimento, ataque e decisão acontecem no mesmo instante.",
    assetPath:
      "/images/gameplay/neon-marginal-gameplay-katana-neural-combate.webp",
    assetAlt:
      "Combate com katana neural em cenário urbano cyberpunk do jogo Neon Marginal",
    accent: "#FF1E3C" as Accent,
  },
  {
    title: "Dash cibernético",
    description:
      "Velocidade é sobrevivência.\nEntre ataque e fuga, um segundo define tudo.",
    assetPath:
      "/images/gameplay/neon-marginal-gameplay-dash-cibernetico-movimento.webp",
    assetAlt:
      "Dash cibernético em movimento acelerado no jogo Neon Marginal",
    accent: "#00E5FF" as Accent,
  },
  {
    title: "Hacking",
    description:
      "Nada é fixo.\nTudo pode ser invadido, manipulado ou quebrado em tempo real.",
    assetPath:
      "/images/gameplay/neon-marginal-gameplay-hacking-interface-invasao.webp",
    assetAlt:
      "Interface de hacking e invasão digital no jogo Neon Marginal",
    accent: "#8B2CFF" as Accent,
  },
  {
    title: "Facções",
    description:
      "A cidade observa suas escolhas.\nAliados abrem caminhos. Inimigos fecham tudo.",
    assetPath:
      "/images/gameplay/neon-marginal-gameplay-faccoes-conflito-urbano.webp",
    assetAlt: "Conflito urbano entre facções no universo de Neon Marginal",
    accent: "#FF2BD6" as Accent,
  },
];

export const timelineItems = [
  {
    time: "Ato 01",
    title: "O sinal cai",
    description:
      "Um apagão seletivo apaga registros, dívidas e pessoas inteiras deixam de existir.",
  },
  {
    time: "Ato 02",
    title: "A rede acorda",
    description:
      "Rádios, celulares antigos e servidores improvisados voltam à vida.\nA cidade começa a se reconectar.",
  },
  {
    time: "Ato 03",
    title: "Contrato de silêncio",
    description:
      "Segurança em troca de controle total.\nIdentidade, acesso e circulação passam a ter dono.",
  },
  {
    time: "Ato 04",
    title: "Margem em chamas",
    description:
      "Quando a verdade volta ao ar, você decide quem permanece e quem desaparece.",
  },
];

export const newsItems = [
  {
    date: "Abril 2026",
    category: "Protótipo",
    title: "Base da landing page",
    summary:
      "Estrutura visual, seções principais e slots de assets preparados para a primeira apresentação pública.",
    assetPath: "/images/news/neon-marginal-news-demo-combate-urbano.webp",
    assetAlt:
      "Notícia sobre demo de combate urbano do jogo Neon Marginal",
  },
  {
    date: "Próximo marco",
    category: "Gameplay",
    title: "Teste de movimentação",
    summary:
      "Validação de leitura visual para rotas verticais, perseguição e travessia urbana.",
    assetPath:
      "/images/news/neon-marginal-news-direcao-arte-cyberpunk-br.webp",
    assetAlt:
      "Notícia sobre direção de arte cyberpunk brasileira de Neon Marginal",
  },
  {
    date: "Em produção",
    category: "Arte",
    title: "Guia de personagens",
    summary:
      "Preparação de silhuetas, paleta de facções e variações de roupa para os protagonistas.",
    assetPath:
      "/images/news/neon-marginal-news-teste-comunidade-gameplay.webp",
    assetAlt:
      "Notícia sobre teste de comunidade e gameplay de Neon Marginal",
  },
];

export const finalCta = {
  eyebrow: "Transmissão aberta",
  title: "A margem ainda está online.",
  description:
    "Acompanhe o desenvolvimento, testes e sinais públicos enquanto Neon Marginal toma forma nas ruas da rede.",
  action: { label: "Acompanhar devlog", href: "#noticias" },
};
