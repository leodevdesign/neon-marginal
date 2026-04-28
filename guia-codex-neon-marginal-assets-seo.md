# Guia Mestre para o Codex — Site do Jogo Neon Marginal

> Documento de referência para criação completa do site do jogo **Neon Marginal**.  
> Use este arquivo como briefing principal, checklist de execução, guia de design system, referência de conteúdo e critérios de aceite durante todo o desenvolvimento.

---

## 1. Objetivo do projeto

Criar um site completo, imersivo e responsivo para um jogo cyberpunk brasileiro chamado **Neon Marginal**.

O site deve funcionar como uma landing page oficial do jogo, apresentando:

- universo narrativo;
- personagens principais;
- gameplay;
- história;
- notícias do desenvolvimento;
- chamadas para jogar, assistir trailer e entrar na lista de espera;
- identidade visual cyberpunk brasileira;
- estrutura preparada para imagens, vídeos, logo e futuras expansões.

A criação será feita em etapas. Primeiro será criada toda a estrutura, depois os assets visuais serão adicionados e, por fim, serão feitos refinamentos, animações, responsividade, SEO e otimização.

---

## 2. Nome do jogo

### Nome final recomendado

**Neon Marginal**

### Justificativa

O nome transmite uma mistura de:

- cyberpunk;
- Brasil urbano;
- periferia;
- rebelião;
- submundo;
- tecnologia;
- luta contra corporações;
- identidade visual forte e memorável.

### Nomes alternativos, caso necessário

- BR//PUNK
- Distrito Neon
- Código Marginal
- Margem Zero
- Favela.exe
- Cidade Sintética
- Submundo 2099
- Neon Brasilis
- Ordem Neon

O projeto deve usar **Neon Marginal** como nome principal, salvo instrução contrária.

---

## 3. Conceito geral do jogo

**Neon Marginal** é um jogo de ação tática cyberpunk ambientado em uma megalópole brasileira futurista no ano de 2097.

Nesse futuro, corporações substituíram governos, comunidades inteiras vivem em cidades verticais iluminadas por neon e implantes cibernéticos definem poder, status, trabalho e sobrevivência.

A protagonista, **Nara Vex**, é uma ex-agente corporativa que descobre ter sido usada em um projeto secreto chamado **Projeto Margem**. Após escapar de um laboratório da megacorporação Axiom Brasil, ela precisa recuperar suas memórias, sobreviver às facções urbanas e destruir o sistema que transforma pessoas marginalizadas em armas vivas.

---

## 4. Tom narrativo

O tom do site deve ser:

- sombrio;
- cinematográfico;
- urbano;
- rebelde;
- tecnológico;
- agressivo;
- brasileiro;
- misterioso;
- distópico;
- emocional sem ser melodramático.

Evitar um tom genérico de ficção científica. O diferencial do jogo é ser **cyberpunk com identidade brasileira**, misturando neon, concreto, periferia vertical, violência corporativa, hacktivismo e estética brutalista.

---

## 5. Público-alvo

O site deve parecer atraente para pessoas interessadas em:

- jogos cyberpunk;
- jogos de ação;
- narrativa sci-fi;
- estética neon;
- personagens anti-heróis;
- jogos indies com visual forte;
- universos distópicos;
- cultura urbana brasileira;
- games como Cyberpunk 2077, Ghostrunner, Ruiner, Katana ZERO, Deus Ex e Mirror’s Edge.

O site deve passar sensação de jogo premium/indie de alto impacto visual.

---

## 6. Tecnologia recomendada

Usar preferencialmente:

- **Next.js** ou **React**;
- **Tailwind CSS**;
- componentes reutilizáveis;
- estrutura limpa e modular;
- animações leves com CSS/Tailwind ou Framer Motion, se disponível;
- assets estáticos em `/public`.

Caso o projeto já exista, respeitar a stack atual. Caso ainda não exista, sugerir ou criar estrutura baseada em Next.js + Tailwind.

---

## 7. Estrutura recomendada de pastas

```txt
project-root/
├── public/
│   ├── images/
│   │   ├── neon-marginal-logo-principal.png
│   │   ├── neon-marginal-feature-cidade-viva-hostil.webp
│   │   ├── neon-marginal-feature-combate-tatico-implantes.webp
│   │   ├── neon-marginal-news-demo-combate-cyberpunk.webp
│   │   ├── neon-marginal-news-direcao-arte-neon-brutalista.webp
│   │   ├── neon-marginal-news-teste-fechado-comunidade.webp
│   │   ├── characters/
│   │   │   ├── neon-marginal-personagem-nara-vex-katana-neural.webp
│   │   │   ├── neon-marginal-personagem-caio-patch-moura-hacker.webp
│   │   │   ├── neon-marginal-personagem-iara-flux-rede-subsolo.webp
│   │   │   ├── neon-marginal-personagem-dante-kuro-cacador-corporativo.webp
│   │   │   └── neon-marginal-personagem-padre-sintese-igreja-tecnologica.webp
│   │   └── backgrounds/
│   │       ├── neon-marginal-background-cta-cidade-neon.webp
│   │       └── neon-marginal-background-cidade-vertical-cyberpunk.webp
│   └── videos/
│       └── neon-marginal-hero-loop-nara-vex-katana.mp4
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Button.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── UniverseSection.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── CharacterCard.tsx
│   │   ├── CharactersSection.tsx
│   │   ├── GameplayCard.tsx
│   │   ├── GameplaySection.tsx
│   │   ├── StoryTimeline.tsx
│   │   ├── NewsCard.tsx
│   │   ├── NewsSection.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   │
│   ├── data/
│   │   ├── characters.ts
│   │   ├── gameplay.ts
│   │   ├── news.ts
│   │   └── story.ts
│   │
│   └── lib/
│       └── utils.ts
│
├── tailwind.config.ts
├── package.json
└── README.md
```

Se o projeto for JavaScript em vez de TypeScript, usar `.jsx` ou `.js` mantendo a mesma organização.

---

## 8. Design system

### 8.1 Direção visual

O site deve combinar:

- cyberpunk;
- brutalismo digital;
- Brasil urbano futurista;
- neon;
- ruído digital;
- vermelho dominante;
- roxo e magenta como acentos;
- azul elétrico para detalhes tecnológicos;
- fundos escuros;
- cards translúcidos;
- elementos de interface futurista;
- linhas finas;
- grids;
- glow moderado;
- estética de jogo AAA/indie premium.

---

### 8.2 Paleta de cores

| Uso | Cor | Hex |
|---|---|---|
| Fundo principal | Preto carbono | `#050509` |
| Fundo secundário | Grafite profundo | `#0D0D14` |
| Superfície de card | Preto translúcido | `rgba(13, 13, 20, 0.72)` |
| Vermelho neon | Principal | `#FF1E3C` |
| Roxo cyberpunk | Destaque | `#8B2CFF` |
| Magenta elétrico | Destaque secundário | `#FF2BD6` |
| Azul elétrico | Detalhe tecnológico | `#00E5FF` |
| Texto principal | Branco frio | `#F4F7FB` |
| Texto secundário | Cinza azulado | `#A7AAB8` |
| Texto apagado | Cinza profundo | `#6F7280` |
| Borda sutil | Cinza escuro | `#252536` |
| Erro/alerta | Vermelho escuro | `#9B1025` |

---

### 8.3 Tipografia

Sugestões:

- Títulos: `Orbitron`, `Rajdhani`, `Chakra Petch` ou `Sora`.
- Texto comum: `Inter`, `Sora` ou `IBM Plex Sans`.
- Detalhes técnicos/códigos: `JetBrains Mono`, `Space Mono` ou `IBM Plex Mono`.

Caso não seja possível importar fontes externas inicialmente, usar fallback:

```css
font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Para títulos:

```css
font-family: Orbitron, Rajdhani, Inter, system-ui, sans-serif;
```

---

### 8.4 Estilo dos botões

#### Botão primário

Uso: ação principal, jogar agora, entrar na lista.

Características:

- fundo vermelho neon `#FF1E3C`;
- texto branco;
- uppercase opcional;
- peso forte;
- sombra/glow vermelho moderado;
- hover com leve aumento de brilho;
- foco visível;
- transição suave.

Texto principal:

```txt
Jogar agora
```

#### Botão secundário

Uso: assistir trailer, ler mais, explorar universo.

Características:

- fundo transparente ou semi-transparente;
- borda vermelho/roxo;
- texto branco;
- efeito glass;
- hover com preenchimento escuro e glow sutil.

Texto principal:

```txt
Assistir trailer
```

---

### 8.5 Cards

Cards devem usar:

- fundo escuro translúcido;
- borda fina `#252536`;
- hover com borda neon;
- leve elevação;
- imagem com `object-cover`;
- cantos levemente arredondados;
- detalhes de interface, como códigos, etiquetas, linhas e pequenos marcadores.

Evitar cards muito claros ou genéricos.

---

### 8.6 Efeitos visuais permitidos

Usar com moderação:

- ruído sutil no fundo;
- linhas em grid;
- gradientes radiais;
- glow neon;
- glitch leve em títulos;
- animação de entrada suave;
- hover nos cards;
- overlay escuro apenas onde for necessário para leitura;
- pequenos textos técnicos decorativos.

Não exagerar em animações que prejudiquem performance ou legibilidade.

---

## 9. Estrutura completa da página

A landing page deve conter as seções abaixo, nesta ordem.

---

## 9.1 Header

### Objetivo

Criar navegação simples e com aparência premium.

### Elementos

- Logo do jogo;
- menu de navegação;
- CTA pequeno;
- layout fixo ou sticky opcional;
- fundo transparente no topo ou preto translúcido;
- blur/backdrop opcional.

### Links do menu

```txt
Universo
Personagens
Gameplay
Notícias
Jogar
```

### Logo

Arquivo final:

```txt
/public/images/branding/neon-marginal-logo-principal.png
```

Regras do logo:

- adicionar sem fundo;
- sem borda;
- sem retângulo;
- sem moldura;
- preservar transparência do PNG;
- não aplicar background branco;
- não colocar dentro de caixa visível.

---

## 9.2 Hero full screen

### Objetivo

Criar uma abertura cinematográfica, em tela cheia, com vídeo de fundo e CTAs.

### Vídeo

Arquivo:

```txt
/public/videos/neon-marginal-hero-loop-nara-vex-katana.mp4
```

Regras:

- ocupar a tela cheia;
- `object-cover`;
- autoplay;
- muted;
- loop;
- playsInline;
- sem borda;
- sem filtro escuro global;
- preservar as cores originais;
- aplicar somente gradiente escuro na parte inferior para leitura.

### Conteúdo

H1:

```txt
Sobreviva à margem do futuro.
```

Subtítulo:

```txt
Em uma megalópole brasileira dominada por corporações, implantes ilegais e facções neon, Nara Vex luta para recuperar suas memórias e incendiar o sistema.
```

Botões:

```txt
Jogar agora
Assistir trailer
```

### Layout

Desktop:

- texto no canto inferior esquerdo;
- largura máxima confortável;
- botões lado a lado.

Mobile:

- texto ajustado para legibilidade;
- botões podem ficar empilhados;
- hero deve continuar impactante.

---

## 9.3 Introdução do universo

### Título

```txt
O Brasil nunca chegou ao futuro. Ele foi vendido.
```

### Texto

```txt
No ano de 2097, a cidade cresceu para cima, para baixo e para dentro das pessoas. Implantes definem quem trabalha, quem luta e quem desaparece. Entre becos de neon, torres corporativas e comunidades suspensas, uma guerra silenciosa decide o destino dos que vivem à margem.
```

### Direção visual

- seção editorial;
- texto grande;
- fundo escuro;
- detalhes de interface;
- pequenos textos técnicos decorativos;
- atmosfera de manifesto.

---

## 9.4 Dois pilares do jogo

### Título

```txt
Dois pilares para vender o universo de Neon Marginal
```

### Card 1

Título:

```txt
Cidade viva e hostil
```

Texto:

```txt
Megalópoles verticais, becos iluminados por neon e facções rivais compõem um mapa denso para exploração, conflito e sobrevivência.
```

Imagem:

```txt
/public/images/features/neon-marginal-feature-cidade-viva-hostil.webp
```

Alt:

```txt
Cidade cyberpunk brasileira vertical iluminada por neon vermelho e roxo.
```

### Card 2

Título:

```txt
Combate tático com implantes
```

Texto:

```txt
Misture ação, mobilidade e habilidades cibernéticas para construir estilos diferentes de infiltração, confronto e fuga.
```

Imagem:

```txt
/public/images/features/neon-marginal-feature-combate-tatico-implantes.webp
```

Alt:

```txt
Personagem cyberpunk usando implantes cibernéticos em combate urbano.
```

---

## 9.5 Personagens

### Título

```txt
Personagens da margem
```

### Texto introdutório

```txt
Na cidade vertical, ninguém é completamente inocente. Cada aliado, inimigo e informante carrega implantes, dívidas e segredos que podem mudar o destino da margem.
```

### Personagem 1 — Nara Vex

Função:

```txt
Protagonista
```

Descrição:

```txt
Ex-agente corporativa, fugitiva e portadora de memórias editadas. Sua katana neural corta carne, metal e sistemas.
```

Imagem futura:

```txt
/public/images/characters/neon-marginal-personagem-nara-vex-katana-neural.webp
```

### Personagem 2 — Caio “Patch” Moura

Função:

```txt
Hacker
```

Descrição:

```txt
Hacker autodidata da zona leste vertical. Invade drones, implantes e sistemas corporativos com ferramentas improvisadas.
```

Imagem futura:

```txt
/public/images/characters/neon-marginal-personagem-caio-patch-moura-hacker.webp
```

### Personagem 3 — Iara Flux

Função:

```txt
Líder rebelde
```

Descrição:

```txt
Líder da Rede Subsolo. Carismática, perigosa e disposta a incendiar a cidade para libertar quem foi esquecido.
```

Imagem futura:

```txt
/public/images/characters/neon-marginal-personagem-iara-flux-rede-subsolo.webp
```

### Personagem 4 — Dante Kuro

Função:

```txt
Antagonista
```

Descrição:

```txt
Caçador corporativo enviado para capturar Nara. Seus implantes preveem movimentos antes que eles aconteçam.
```

Imagem futura:

```txt
/public/images/characters/neon-marginal-personagem-dante-kuro-cacador-corporativo.webp
```

### Personagem 5 — Padre Síntese

Função:

```txt
Figura misteriosa
```

Descrição:

```txt
Fundador de uma igreja tecnológica clandestina. Mistura fé, código e segredos sobre o Projeto Margem.
```

Imagem futura:

```txt
/public/images/characters/neon-marginal-personagem-padre-sintese-igreja-tecnologica.webp
```

---

## 9.6 Gameplay

### Título

```txt
Lute, invada, desapareça.
```

### Texto introdutório

```txt
Cada missão pode ser vencida com lâmina, velocidade, invasão ou silêncio. Seus implantes definem o caminho, mas suas escolhas definem quem controla a cidade.
```

### Card 1

Título:

```txt
Katana neural
```

Texto:

```txt
Ataques rápidos, finalizações precisas e interferência direta em implantes inimigos.
```

### Card 2

Título:

```txt
Dash cibernético
```

Texto:

```txt
Movimente-se entre coberturas, paredes e plataformas com velocidade aumentada.
```

### Card 3

Título:

```txt
Invasão em tempo real
```

Texto:

```txt
Desative câmeras, manipule drones e vire sistemas inimigos contra seus donos.
```

### Card 4

Título:

```txt
Facções dinâmicas
```

Texto:

```txt
Suas escolhas alteram alianças, zonas de controle e rotas disponíveis pela cidade.
```

---

## 9.7 História

### Título

```txt
Memórias roubadas. Cidade em chamas.
```

### Texto introdutório

```txt
A jornada de Nara Vex atravessa laboratórios, becos, templos clandestinos e torres corporativas até revelar a verdade por trás do Projeto Margem.
```

### Timeline

#### Ato 1 — A Fuga

```txt
Nara desperta em um laboratório da Axiom Brasil e foge antes que sua mente seja reiniciada.
```

#### Ato 2 — Cidade Vertical

```txt
Cada distrito revela uma parte de sua memória e uma nova camada da corrupção corporativa.
```

#### Ato 3 — Rede Subsolo

```txt
A resistência oferece respostas, mas exige que Nara escolha um lado.
```

#### Ato 4 — O Caçador

```txt
Dante Kuro surge como reflexo distorcido do passado que Nara tentou esquecer.
```

#### Ato 5 — Margem Zero

```txt
No núcleo da Axiom Brasil, a protagonista descobre que sua mente carrega a chave para libertar milhares de pessoas modificadas.
```

---

## 9.8 Notícias do desenvolvimento

### Título

```txt
Notícias do desenvolvimento
```

### Post 1

Categoria:

```txt
Gameplay
```

Título:

```txt
Nova demo de combate revelada
```

Texto:

```txt
Uma prévia do sistema de armas, dash e habilidades cibernéticas em arenas urbanas.
```

Imagem:

```txt
/public/images/news/neon-marginal-news-demo-combate-cyberpunk.webp
```

Alt:

```txt
Demonstração de combate cyberpunk em arena urbana neon.
```

### Post 2

Categoria:

```txt
Arte
```

Título:

```txt
Bastidores da direção de arte neon-brutalista
```

Texto:

```txt
Conceitos de interface, arquitetura vertical e texturas para o mundo de Neon Marginal.
```

Imagem:

```txt
/public/images/news/neon-marginal-news-direcao-arte-neon-brutalista.webp
```

Alt:

```txt
Conceitos de arte cyberpunk com arquitetura brutalista e luzes neon.
```

### Post 3

Categoria:

```txt
Comunidade
```

Título:

```txt
Teste fechado com feedback da comunidade
```

Texto:

```txt
Ajustes em progressão, ritmo das missões e comportamento das facções inimigas.
```

Imagem:

```txt
/public/images/news/neon-marginal-news-teste-fechado-comunidade.webp
```

Alt:

```txt
Teste fechado do jogo com interface futurista e cidade cyberpunk ao fundo.
```

### Link final

```txt
Ler mais atualizações
```

---

## 9.9 CTA final

### Objetivo

Encerrar a página com uma chamada forte para ação.

### Título

```txt
A cidade não perdoa. Você vai sobreviver?
```

### Texto

```txt
Entre na margem, desbloqueie implantes ilegais e descubra quem controla o futuro.
```

### Botões

```txt
Jogar agora
Entrar na lista de espera
```

### Visual

- seção grande, quase tela cheia;
- fundo escuro com glow vermelho/roxo;
- imagem ou gradiente de cidade futurista;
- sensação de clímax;
- CTA bem visível.

---

## 9.10 Rodapé

### Elementos

- logo;
- links rápidos;
- redes sociais fictícias;
- texto institucional;
- copyright.

### Texto institucional

```txt
Neon Marginal é um projeto independente de ação cyberpunk em desenvolvimento.
```

### Links rápidos

```txt
Universo
Personagens
Gameplay
Notícias
Jogar
Contato
```

### Redes fictícias

```txt
Instagram
YouTube
TikTok
Discord
```

### Copyright

```txt
© 2097 Neon Marginal. Todos os direitos reservados.
```

Ou, se preferir mais realista:

```txt
© 2026 Neon Marginal. Projeto independente em desenvolvimento.
```

---

## 10. Componentes obrigatórios

O projeto deve ter componentes reutilizáveis sempre que possível.

### Lista de componentes

- `Header`
- `Hero`
- `Button`
- `SectionTitle`
- `UniverseSection`
- `FeatureCard`
- `FeaturesSection`
- `CharacterCard`
- `CharactersSection`
- `GameplayCard`
- `GameplaySection`
- `StoryTimeline`
- `NewsCard`
- `NewsSection`
- `FinalCTA`
- `Footer`

### Regras

- Evitar repetir muito HTML manualmente.
- Dados de personagens, notícias e gameplay devem, se possível, vir de arrays em arquivos separados.
- Componentes devem ser fáceis de editar.
- Usar nomes claros.
- Manter organização visual e semântica.

---

## 11. Arquivos de dados recomendados

### `characters.ts`

Deve conter:

```ts
export const characters = [
  {
    name: 'Nara Vex',
    role: 'Protagonista',
    description: 'Ex-agente corporativa, fugitiva e portadora de memórias editadas. Sua katana neural corta carne, metal e sistemas.',
    image: '/images/characters/neon-marginal-personagem-nara-vex-katana-neural.webp',
  },
  {
    name: 'Caio “Patch” Moura',
    role: 'Hacker',
    description: 'Hacker autodidata da zona leste vertical. Invade drones, implantes e sistemas corporativos com ferramentas improvisadas.',
    image: '/images/characters/neon-marginal-personagem-caio-patch-moura-hacker.webp',
  },
  {
    name: 'Iara Flux',
    role: 'Líder rebelde',
    description: 'Líder da Rede Subsolo. Carismática, perigosa e disposta a incendiar a cidade para libertar quem foi esquecido.',
    image: '/images/characters/neon-marginal-personagem-iara-flux-rede-subsolo.webp',
  },
  {
    name: 'Dante Kuro',
    role: 'Antagonista',
    description: 'Caçador corporativo enviado para capturar Nara. Seus implantes preveem movimentos antes que eles aconteçam.',
    image: '/images/characters/neon-marginal-personagem-dante-kuro-cacador-corporativo.webp',
  },
  {
    name: 'Padre Síntese',
    role: 'Figura misteriosa',
    description: 'Fundador de uma igreja tecnológica clandestina. Mistura fé, código e segredos sobre o Projeto Margem.',
    image: '/images/characters/neon-marginal-personagem-padre-sintese-igreja-tecnologica.webp',
  },
];
```

### `gameplay.ts`

```ts
export const gameplayFeatures = [
  {
    title: 'Katana neural',
    description: 'Ataques rápidos, finalizações precisas e interferência direta em implantes inimigos.',
  },
  {
    title: 'Dash cibernético',
    description: 'Movimente-se entre coberturas, paredes e plataformas com velocidade aumentada.',
  },
  {
    title: 'Invasão em tempo real',
    description: 'Desative câmeras, manipule drones e vire sistemas inimigos contra seus donos.',
  },
  {
    title: 'Facções dinâmicas',
    description: 'Suas escolhas alteram alianças, zonas de controle e rotas disponíveis pela cidade.',
  },
];
```

### `news.ts`

```ts
export const news = [
  {
    category: 'Gameplay',
    title: 'Nova demo de combate revelada',
    description: 'Uma prévia do sistema de armas, dash e habilidades cibernéticas em arenas urbanas.',
    image: '/images/neon-marginal-news-demo-combate-cyberpunk.webp',
  },
  {
    category: 'Arte',
    title: 'Bastidores da direção de arte neon-brutalista',
    description: 'Conceitos de interface, arquitetura vertical e texturas para o mundo de Neon Marginal.',
    image: '/images/neon-marginal-news-direcao-arte-neon-brutalista.webp',
  },
  {
    category: 'Comunidade',
    title: 'Teste fechado com feedback da comunidade',
    description: 'Ajustes em progressão, ritmo das missões e comportamento das facções inimigas.',
    image: '/images/neon-marginal-news-teste-fechado-comunidade.webp',
  },
];
```

### `story.ts`

```ts
export const storyActs = [
  {
    act: 'Ato 1',
    title: 'A Fuga',
    description: 'Nara desperta em um laboratório da Axiom Brasil e foge antes que sua mente seja reiniciada.',
  },
  {
    act: 'Ato 2',
    title: 'Cidade Vertical',
    description: 'Cada distrito revela uma parte de sua memória e uma nova camada da corrupção corporativa.',
  },
  {
    act: 'Ato 3',
    title: 'Rede Subsolo',
    description: 'A resistência oferece respostas, mas exige que Nara escolha um lado.',
  },
  {
    act: 'Ato 4',
    title: 'O Caçador',
    description: 'Dante Kuro surge como reflexo distorcido do passado que Nara tentou esquecer.',
  },
  {
    act: 'Ato 5',
    title: 'Margem Zero',
    description: 'No núcleo da Axiom Brasil, a protagonista descobre que sua mente carrega a chave para libertar milhares de pessoas modificadas.',
  },
];
```

---

## 12. Roadmap completo de execução

Use esta ordem para não se perder.

---

### Fase 1 — Preparação

- [ ] Conferir stack do projeto.
- [ ] Confirmar se será React, Next.js ou outro framework.
- [ ] Conferir se Tailwind está instalado.
- [ ] Criar ou revisar estrutura de pastas.
- [ ] Criar pastas `/public/images` e `/public/videos`.
- [ ] Criar pasta `/public/images/characters`.
- [ ] Criar pasta `/src/components`.
- [ ] Criar pasta `/src/data`.
- [ ] Criar ou revisar `globals.css`.
- [ ] Configurar cores do design system.

---

### Fase 2 — Estrutura base

- [ ] Criar layout principal da página.
- [ ] Criar componente `Header`.
- [ ] Criar componente `Hero`.
- [ ] Criar componente `Button`.
- [ ] Criar componente `SectionTitle`.
- [ ] Criar seções vazias na ordem correta.
- [ ] Criar componente `Footer`.
- [ ] Garantir que a página renderiza sem erro.

---

### Fase 3 — Hero

- [ ] Adicionar vídeo `/public/videos/neon-marginal-hero-loop-nara-vex-katana.mp4`.
- [ ] Configurar vídeo com autoplay, muted, loop e playsInline.
- [ ] Usar `object-cover`.
- [ ] Remover qualquer filtro escuro global no vídeo.
- [ ] Adicionar gradiente escuro apenas na parte inferior.
- [ ] Adicionar H1.
- [ ] Adicionar subtítulo.
- [ ] Adicionar botões “Jogar agora” e “Assistir trailer”.
- [ ] Ajustar posição no desktop.
- [ ] Ajustar posição no mobile.
- [ ] Criar fallback caso o vídeo não carregue.

---

### Fase 4 — Conteúdo principal

- [ ] Criar seção de introdução do universo.
- [ ] Criar seção dos dois pilares do jogo.
- [ ] Criar seção de personagens.
- [ ] Criar seção de gameplay.
- [ ] Criar seção de história em timeline.
- [ ] Criar seção de notícias.
- [ ] Criar CTA final.
- [ ] Criar rodapé completo.

---

### Fase 5 — Componentização

- [ ] Separar cards de recursos em `FeatureCard`.
- [ ] Separar personagens em `CharacterCard`.
- [ ] Separar gameplay em `GameplayCard`.
- [ ] Separar notícias em `NewsCard`.
- [ ] Criar timeline reutilizável.
- [ ] Mover dados repetidos para arquivos em `/src/data`.
- [ ] Garantir componentes limpos e reutilizáveis.

---

### Fase 6 — Design system

- [ ] Aplicar paleta de cores.
- [ ] Ajustar tipografia.
- [ ] Criar hierarquia clara de títulos.
- [ ] Padronizar botões.
- [ ] Padronizar cards.
- [ ] Adicionar bordas sutis.
- [ ] Adicionar efeitos neon moderados.
- [ ] Adicionar fundos com grid/ruído, se possível.
- [ ] Criar consistência entre seções.
- [ ] Evitar excesso visual.

---

### Fase 7 — Assets

- [ ] Adicionar logo em `/public/images/branding/neon-marginal-logo-principal.png`.
- [ ] Garantir logo sem fundo, sem borda e sem retângulo.
- [ ] Adicionar `neon-marginal-feature-cidade-viva-hostil.webp` no card “Cidade viva e hostil”.
- [ ] Adicionar `neon-marginal-feature-combate-tatico-implantes.webp` no card “Combate tático com implantes”.
- [ ] Adicionar `neon-marginal-news-demo-combate-cyberpunk.webp` na notícia “Nova demo de combate revelada”.
- [ ] Adicionar `neon-marginal-news-direcao-arte-neon-brutalista.webp` na notícia “Bastidores da direção de arte neon-brutalista”.
- [ ] Adicionar `neon-marginal-news-teste-fechado-comunidade.webp` na notícia “Teste fechado com feedback da comunidade”.
- [ ] Preparar placeholders para personagens.
- [ ] Adicionar `alt` em todas as imagens.
- [ ] Usar `object-cover` sem distorcer imagens.

---

### Fase 8 — Animações

- [ ] Adicionar animação suave de entrada nos textos.
- [ ] Adicionar hover nos cards.
- [ ] Adicionar brilho nos botões.
- [ ] Adicionar efeito glitch sutil em títulos importantes.
- [ ] Adicionar transições suaves.
- [ ] Garantir que animações não atrapalhem a leitura.
- [ ] Reduzir animações em dispositivos menores, se necessário.
- [ ] Respeitar preferências de redução de movimento quando possível.

---

### Fase 9 — Responsividade

- [ ] Testar desktop grande.
- [ ] Testar notebook.
- [ ] Testar tablet.
- [ ] Testar mobile.
- [ ] Ajustar hero no mobile.
- [ ] Ajustar menu no mobile.
- [ ] Empilhar botões quando necessário.
- [ ] Cards devem virar coluna única no mobile.
- [ ] Textos devem manter boa legibilidade.
- [ ] Evitar overflow horizontal.

---

### Fase 10 — SEO, acessibilidade e performance

- [ ] Adicionar `title` da página.
- [ ] Adicionar meta description.
- [ ] Adicionar tags semânticas.
- [ ] Garantir contraste suficiente.
- [ ] Adicionar textos alternativos nas imagens.
- [ ] Garantir foco visível em links e botões.
- [ ] Otimizar imagens.
- [ ] Usar lazy loading quando possível.
- [ ] Verificar peso do vídeo.
- [ ] Evitar imports desnecessários.
- [ ] Remover código morto.

---

### Fase 11 — Revisão final

- [ ] Conferir se todas as seções estão presentes.
- [ ] Conferir se todos os textos estão corretos.
- [ ] Conferir se os caminhos dos arquivos estão corretos.
- [ ] Conferir se não há imagens quebradas.
- [ ] Conferir se o vídeo funciona.
- [ ] Conferir se o logo aparece corretamente.
- [ ] Conferir responsividade.
- [ ] Conferir visual geral.
- [ ] Conferir console sem erros.
- [ ] Preparar para deploy.

---

## 13. Prompts úteis para usar durante o projeto

### 13.1 Prompt para criar a estrutura inicial

```txt
Crie apenas a primeira versão estrutural do site do jogo “Neon Marginal”.

Nesta etapa, não quero imagens finais nem refinamento extremo. Quero a estrutura completa da landing page, componentes organizados e placeholders preparados para os assets finais.

Use React/Next.js com Tailwind CSS.

Crie as seguintes seções:

1. Header
2. Hero full screen com vídeo preparado para `/public/videos/neon-marginal-hero-loop-nara-vex-katana.mp4`
3. Introdução do universo
4. Dois pilares do jogo
5. Personagens
6. Gameplay
7. História em timeline
8. Notícias do desenvolvimento
9. CTA final em tela cheia
10. Footer

Use o design system definido neste arquivo.

Importante:
- O logo deve usar `/public/images/branding/neon-marginal-logo-principal.png`.
- O logo deve aparecer sem fundo, sem borda e sem retângulo.
- O vídeo da hero deve usar `/public/videos/neon-marginal-hero-loop-nara-vex-katana.mp4`.
- Não aplique filtro escuro no vídeo inteiro.
- Use apenas gradiente escuro na parte inferior da hero.
- Deixe caminhos preparados para imagens futuras.
- O layout precisa ser responsivo.
- O código deve ser limpo, organizado e fácil de editar.
```

---

### 13.2 Prompt para adicionar o logo

```txt
Adicione a imagem `/public/images/branding/neon-marginal-logo-principal.png` como logo principal do site.

Regras:
- O logo deve aparecer sem fundo.
- Não coloque borda.
- Não coloque retângulo em volta.
- Não adicione moldura.
- Preserve a transparência original do PNG.
- O logo deve ficar alinhado no header.
- Garanta boa visualização em desktop e mobile.
```

---

### 13.3 Prompt para adicionar o vídeo no hero

```txt
Adicione o vídeo `/public/videos/neon-marginal-hero-loop-nara-vex-katana.mp4` como vídeo de fundo da seção hero.

Regras:
- O vídeo deve ocupar a tela cheia no topo da página.
- Deve cobrir toda a área da hero com `object-cover`.
- Não deve ter bordas.
- Não deve ter filtro escuro global.
- Deve manter as cores originais do arquivo.
- Adicione apenas um gradiente escuro na parte inferior da hero para melhorar a leitura do título, subtítulo e botões.
- O conteúdo textual da hero deve ficar no canto inferior esquerdo em desktop.
- Em mobile, ajuste o conteúdo para manter boa legibilidade.
- Adicione fallback visual caso o vídeo não carregue.
```

---

### 13.4 Prompt para corrigir vídeo escuro

```txt
O vídeo da hero está ficando escuro demais.

Remova qualquer filtro, overlay ou opacidade aplicada sobre o vídeo inteiro.

Mantenha o vídeo com as cores originais.

Adicione somente um gradiente escuro na parte inferior da hero, apenas para melhorar a leitura do título e dos botões.

O gradiente deve ser sutil e não deve escurecer a imagem inteira.
```

---

### 13.5 Prompt para adicionar imagens dos cards

```txt
Adicione as imagens finais aos cards do site.

Na seção “Dois pilares para vender o universo de Neon Marginal”:

1. No card “Cidade viva e hostil”, use:
`/public/images/features/neon-marginal-feature-cidade-viva-hostil.webp`

2. No card “Combate tático com implantes”, use:
`/public/images/features/neon-marginal-feature-combate-tatico-implantes.webp`

Na seção “Notícias do desenvolvimento”:

1. No post “Nova demo de combate revelada”, use:
`/public/images/news/neon-marginal-news-demo-combate-cyberpunk.webp`

2. No post “Bastidores da direção de arte neon-brutalista”, use:
`/public/images/news/neon-marginal-news-direcao-arte-neon-brutalista.webp`

3. No post “Teste fechado com feedback da comunidade”, use:
`/public/images/news/neon-marginal-news-teste-fechado-comunidade.webp`

Regras:
- As imagens devem preencher bem os cards usando `object-cover`.
- Não distorcer as imagens.
- Manter cantos, bordas e efeitos visuais consistentes com o design system.
- Adicionar `alt` descritivo para cada imagem.
- Garantir responsividade.
```

---

## 14. Prompts para criação dos assets visuais

### 14.1 Imagem principal 16:9

```txt
A cinematic key art image for a Brazilian cyberpunk game called “Neon Marginal”. A female anti-hero seen from behind stands in front of a solid deep red background, holding a samurai sword down by her side. She wears futuristic tactical streetwear, cybernetic implants, glowing red and purple neon details, and subtle Brazilian urban influences. The scene feels dark, rebellious, elegant and dangerous. Add subtle sci-fi interface patterns, faint digital noise and minimal holographic details in the background. No text, no logo.

Aspect ratio: 16:9.
```

---

### 14.2 Vídeo loop para hero

```txt
Create a seamless looping cinematic video for a Brazilian cyberpunk game.

Scene:
A female cyberpunk anti-hero stands with her back to the viewer, holding a samurai sword pointed downward at her side. She wears futuristic tactical streetwear with subtle cybernetic implants and glowing neon details. The background is a solid deep red with subtle sci-fi interface patterns, digital noise, and faint holographic elements.

Motion:
Very subtle movement only. Her coat or hair moves slightly as if affected by a soft wind. Neon details pulse gently. Background sci-fi particles and interface lines move slowly. The character remains mostly still and powerful.

Style:
Dark cinematic cyberpunk, Brazilian urban sci-fi, high contrast, red neon atmosphere, elegant and dangerous.

Important:
Create a perfect seamless loop. No camera cuts. No text. No logo. No extra characters.

Aspect ratio: 16:9.
```

---

### 14.3 Imagem para “Cidade viva e hostil”

```txt
A cinematic Brazilian cyberpunk megacity at night, vertical favelas mixed with brutalist corporate towers, narrow alleys glowing with red, purple and blue neon lights, rain reflections, dense atmosphere, drones, cables, holographic signs, urban chaos, hostile and alive. Dark sci-fi game concept art, high detail, no text, no logo.

Aspect ratio: 16:9.
```

---

### 14.4 Imagem para “Combate tático com implantes”

```txt
A tactical cyberpunk combat scene in a Brazilian futuristic urban alley. A female anti-hero with cybernetic implants uses a samurai sword and glowing neural abilities against armored corporate enemies. Red and purple neon lighting, dynamic action, sparks, rain, high contrast, cinematic game art, no text, no logo.

Aspect ratio: 16:9.
```

---

### 14.5 Imagem para notícia de gameplay

```txt
A cyberpunk gameplay demo scene showing an urban combat arena with neon lights, holographic UI elements, a player character using dash movement and cybernetic abilities, enemies positioned around the environment, Brazilian futuristic city atmosphere, dark red and purple lighting, no text, no logo.

Aspect ratio: 16:9.
```

---

### 14.6 Imagem para notícia de arte

```txt
Behind the scenes concept art board for a Brazilian cyberpunk game, showing brutalist architecture, neon interfaces, city sketches, material studies, red and purple lighting, holographic panels, futuristic urban design, dark premium game art presentation, no readable text, no logo.

Aspect ratio: 16:9.
```

---

### 14.7 Imagem para notícia de comunidade

```txt
A closed beta testing scene for a cyberpunk game, futuristic interface screens, silhouettes of players, neon city visuals, feedback panels, red and blue lighting, dark tech atmosphere, community testing mood, cinematic and polished, no readable text, no logo.

Aspect ratio: 16:9.
```

---

### 14.8 Logo do jogo

```txt
Logo design for a Brazilian cyberpunk game called “Neon Marginal”. Futuristic bold typography, sharp angular shapes, neon red and purple glow, dark cyberpunk identity, urban rebellious feeling, premium game logo style, transparent background, no extra symbols unless subtle, high contrast.
```

---

## 15. Critérios de aceite do projeto

O projeto estará correto quando:

- [ ] O site tiver todas as seções planejadas.
- [ ] O nome usado for “Neon Marginal”.
- [ ] O visual estiver coerente com cyberpunk brasileiro.
- [ ] O header estiver funcional e visualmente limpo.
- [ ] O logo estiver sem fundo, sem borda e sem moldura.
- [ ] O hero estiver em tela cheia.
- [ ] O vídeo estiver funcionando em loop.
- [ ] O vídeo não estiver com filtro escuro global.
- [ ] O gradiente inferior destacar título e botões.
- [ ] Os botões estiverem bem visíveis.
- [ ] A seção de universo tiver impacto narrativo.
- [ ] Os dois pilares estiverem em cards grandes com imagens.
- [ ] A seção de personagens tiver os cinco personagens principais.
- [ ] A seção de gameplay explicar bem as mecânicas.
- [ ] A seção de história usar timeline.
- [ ] A seção de notícias tiver três posts.
- [ ] A CTA final for forte e visualmente marcante.
- [ ] O rodapé estiver completo.
- [ ] O site estiver responsivo.
- [ ] O código estiver componentizado.
- [ ] Os dados repetidos estiverem organizados.
- [ ] As imagens tiverem `alt`.
- [ ] Não houver erros no console.
- [ ] Não houver overflow horizontal.
- [ ] A performance estiver aceitável.

---

## 16. Erros comuns que devem ser evitados

- [ ] Escurecer o vídeo inteiro com overlay pesado.
- [ ] Colocar o logo dentro de retângulo ou card.
- [ ] Usar estética cyberpunk genérica sem identidade brasileira.
- [ ] Criar textos muito longos nos cards.
- [ ] Usar neon demais a ponto de prejudicar leitura.
- [ ] Deixar cards desalinhados.
- [ ] Deixar o site sem versão mobile adequada.
- [ ] Repetir código desnecessariamente.
- [ ] Usar imagens distorcidas.
- [ ] Esquecer `alt` nas imagens.
- [ ] Usar fontes pequenas demais.
- [ ] Criar contraste baixo.
- [ ] Deixar CTAs pouco visíveis.
- [ ] Criar animações exageradas.
- [ ] Deixar dependências desnecessárias.

---

## 17. Checklist rápido para cada nova alteração

Antes de finalizar qualquer etapa, conferir:

- [ ] A alteração segue o design system?
- [ ] O layout continua responsivo?
- [ ] O código continua organizado?
- [ ] O site continua sem erros?
- [ ] Os caminhos dos assets estão corretos?
- [ ] O visual ainda parece cyberpunk brasileiro?
- [ ] O texto está claro e forte?
- [ ] A alteração não quebrou outra seção?
- [ ] O mobile continua bom?
- [ ] A performance não piorou demais?

---

## 18. Prompt mestre final para o Codex

Use este prompt quando quiser passar o briefing completo de uma vez:

```txt
Você é um desenvolvedor front-end sênior especializado em landing pages imersivas para jogos.

Use o arquivo `guia-codex-neon-marginal.md` como referência principal do projeto.

Crie o site completo do jogo “Neon Marginal”, seguindo fielmente o roadmap, o design system, os textos, os componentes, a estrutura de pastas, os caminhos dos assets e os critérios de aceite descritos no guia.

O site deve ser uma landing page cyberpunk brasileira, escura, neon, cinematográfica, responsiva e componentizada.

Priorize primeiro a estrutura completa da página e os componentes principais. Depois adicione refinamento visual, imagens, vídeo, animações, responsividade, SEO e performance.

Não invente uma identidade visual diferente da descrita no guia. Não altere o nome do jogo. Não aplique filtro escuro global no vídeo da hero. Não coloque moldura ou fundo no logo.

Ao terminar cada fase, confira o checklist correspondente antes de avançar.
```

---

## 19. Observação final

Este documento deve ser tratado como a fonte principal de verdade do projeto.

Sempre que houver dúvida, seguir esta ordem de prioridade:

1. Instruções diretas do usuário.
2. Este guia mestre.
3. Boas práticas de front-end.
4. Decisões criativas complementares.

O objetivo é criar um site com aparência profissional, narrativa forte e identidade visual marcante, preparado para evoluir em etapas até se tornar a página oficial completa do jogo.

---

## Apêndice — nomes oficiais dos assets para SEO e organização

Use este apêndice como fonte da verdade para nomear todos os arquivos visuais do projeto. O Codex deve usar exatamente estes caminhos nos componentes, nos arquivos de dados e nos imports.

### Regras gerais

- Usar letras minúsculas.
- Usar hífen entre palavras.
- Não usar acentos, cedilha, espaços ou caracteres especiais.
- Evitar nomes genéricos como `logo.png`, `imagem1.png`, `banner.png`, `foto.png`, `final.png` ou `asset.png`.
- Sempre que possível, começar o arquivo com `neon-marginal`.
- Incluir o tipo do asset: `logo`, `hero`, `feature`, `personagem`, `gameplay`, `historia`, `news`, `background` ou `texture`.
- Incluir o que a imagem representa.
- Para imagens finais do site, preferir `.webp`.
- Para logos com transparência, usar `.png` ou `.svg`.
- Para vídeos, usar `.mp4`.
- Para cada vídeo importante, criar também uma imagem poster `.webp`.

### Estrutura final de assets

```txt
public/
├── images/
│   ├── branding/
│   │   ├── neon-marginal-logo-principal.png
│   │   ├── neon-marginal-logo-horizontal.png
│   │   ├── neon-marginal-logo-simbolo.png
│   │   ├── neon-marginal-favicon-512.png
│   │   └── neon-marginal-og-image-nara-vex-cidade-neon.jpg
│   │
│   ├── hero/
│   │   ├── neon-marginal-hero-nara-vex-katana-fundo-vermelho.webp
│   │   └── neon-marginal-hero-loop-nara-vex-katana-poster.webp
│   │
│   ├── features/
│   │   ├── neon-marginal-feature-cidade-viva-hostil.webp
│   │   └── neon-marginal-feature-combate-tatico-implantes.webp
│   │
│   ├── characters/
│   │   ├── neon-marginal-personagem-nara-vex-katana-neural.webp
│   │   ├── neon-marginal-personagem-caio-patch-moura-hacker.webp
│   │   ├── neon-marginal-personagem-iara-flux-rede-subsolo.webp
│   │   ├── neon-marginal-personagem-dante-kuro-cacador-corporativo.webp
│   │   └── neon-marginal-personagem-padre-sintese-igreja-tecnologica.webp
│   │
│   ├── gameplay/
│   │   ├── neon-marginal-gameplay-katana-neural.webp
│   │   ├── neon-marginal-gameplay-dash-cibernetico.webp
│   │   ├── neon-marginal-gameplay-invasao-tempo-real.webp
│   │   └── neon-marginal-gameplay-faccoes-dinamicas.webp
│   │
│   ├── story/
│   │   ├── neon-marginal-historia-ato-1-a-fuga.webp
│   │   ├── neon-marginal-historia-ato-2-cidade-vertical.webp
│   │   ├── neon-marginal-historia-ato-3-rede-subsolo.webp
│   │   ├── neon-marginal-historia-ato-4-o-cacador.webp
│   │   └── neon-marginal-historia-ato-5-margem-zero.webp
│   │
│   ├── news/
│   │   ├── neon-marginal-news-demo-combate-cyberpunk.webp
│   │   ├── neon-marginal-news-direcao-arte-neon-brutalista.webp
│   │   └── neon-marginal-news-teste-fechado-comunidade.webp
│   │
│   └── backgrounds/
│       ├── neon-marginal-background-cidade-vertical-cyberpunk.webp
│       ├── neon-marginal-background-cta-cidade-neon.webp
│       ├── neon-marginal-background-grid-neon.webp
│       └── neon-marginal-texture-ruido-digital.png
│
└── videos/
    ├── neon-marginal-hero-loop-nara-vex-katana.mp4
    └── neon-marginal-trailer-oficial-gameplay.mp4
```

### Inventário completo dos assets planejados

| Uso no site | Nome oficial do arquivo | Caminho final | Observação |
|---|---|---|---|
| Logo principal | `neon-marginal-logo-principal.png` | `/public/images/branding/neon-marginal-logo-principal.png` | Usar sem fundo, sem borda e com transparência. |
| Logo horizontal | `neon-marginal-logo-horizontal.png` | `/public/images/branding/neon-marginal-logo-horizontal.png` | Versão para header largo, footer ou telas grandes. |
| Símbolo do jogo | `neon-marginal-logo-simbolo.png` | `/public/images/branding/neon-marginal-logo-simbolo.png` | Ícone isolado para favicon, botões e detalhes. |
| Favicon | `neon-marginal-favicon-512.png` | `/public/images/branding/neon-marginal-favicon-512.png` | Usar para gerar favicons menores. |
| Open Graph/social | `neon-marginal-og-image-nara-vex-cidade-neon.jpg` | `/public/images/branding/neon-marginal-og-image-nara-vex-cidade-neon.jpg` | Imagem para compartilhamento em redes sociais. |
| Hero estática | `neon-marginal-hero-nara-vex-katana-fundo-vermelho.webp` | `/public/images/hero/neon-marginal-hero-nara-vex-katana-fundo-vermelho.webp` | Imagem principal já gerada para a hero. |
| Poster do vídeo da hero | `neon-marginal-hero-loop-nara-vex-katana-poster.webp` | `/public/images/hero/neon-marginal-hero-loop-nara-vex-katana-poster.webp` | Fallback do vídeo. |
| Vídeo loop da hero | `neon-marginal-hero-loop-nara-vex-katana.mp4` | `/public/videos/neon-marginal-hero-loop-nara-vex-katana.mp4` | Vídeo de fundo do topo. |
| Trailer oficial | `neon-marginal-trailer-oficial-gameplay.mp4` | `/public/videos/neon-marginal-trailer-oficial-gameplay.mp4` | Usado na CTA “Assistir trailer”. |
| Pilar: cidade | `neon-marginal-feature-cidade-viva-hostil.webp` | `/public/images/features/neon-marginal-feature-cidade-viva-hostil.webp` | Card “Cidade viva e hostil”. |
| Pilar: combate | `neon-marginal-feature-combate-tatico-implantes.webp` | `/public/images/features/neon-marginal-feature-combate-tatico-implantes.webp` | Card “Combate tático com implantes”. |
| Nara Vex | `neon-marginal-personagem-nara-vex-katana-neural.webp` | `/public/images/characters/neon-marginal-personagem-nara-vex-katana-neural.webp` | Personagem principal. |
| Caio “Patch” Moura | `neon-marginal-personagem-caio-patch-moura-hacker.webp` | `/public/images/characters/neon-marginal-personagem-caio-patch-moura-hacker.webp` | Hacker aliado. |
| Iara Flux | `neon-marginal-personagem-iara-flux-rede-subsolo.webp` | `/public/images/characters/neon-marginal-personagem-iara-flux-rede-subsolo.webp` | Líder rebelde. |
| Dante Kuro | `neon-marginal-personagem-dante-kuro-cacador-corporativo.webp` | `/public/images/characters/neon-marginal-personagem-dante-kuro-cacador-corporativo.webp` | Antagonista/caçador corporativo. |
| Padre Síntese | `neon-marginal-personagem-padre-sintese-igreja-tecnologica.webp` | `/public/images/characters/neon-marginal-personagem-padre-sintese-igreja-tecnologica.webp` | Figura misteriosa. |
| Gameplay: katana | `neon-marginal-gameplay-katana-neural.webp` | `/public/images/gameplay/neon-marginal-gameplay-katana-neural.webp` | Card ou seção de mecânica. |
| Gameplay: dash | `neon-marginal-gameplay-dash-cibernetico.webp` | `/public/images/gameplay/neon-marginal-gameplay-dash-cibernetico.webp` | Card ou seção de mecânica. |
| Gameplay: invasão | `neon-marginal-gameplay-invasao-tempo-real.webp` | `/public/images/gameplay/neon-marginal-gameplay-invasao-tempo-real.webp` | Card ou seção de mecânica. |
| Gameplay: facções | `neon-marginal-gameplay-faccoes-dinamicas.webp` | `/public/images/gameplay/neon-marginal-gameplay-faccoes-dinamicas.webp` | Card ou seção de mecânica. |
| História: Ato 1 | `neon-marginal-historia-ato-1-a-fuga.webp` | `/public/images/story/neon-marginal-historia-ato-1-a-fuga.webp` | Laboratório/fuga da Axiom Brasil. |
| História: Ato 2 | `neon-marginal-historia-ato-2-cidade-vertical.webp` | `/public/images/story/neon-marginal-historia-ato-2-cidade-vertical.webp` | Exploração dos distritos. |
| História: Ato 3 | `neon-marginal-historia-ato-3-rede-subsolo.webp` | `/public/images/story/neon-marginal-historia-ato-3-rede-subsolo.webp` | Resistência rebelde. |
| História: Ato 4 | `neon-marginal-historia-ato-4-o-cacador.webp` | `/public/images/story/neon-marginal-historia-ato-4-o-cacador.webp` | Conflito com Dante Kuro. |
| História: Ato 5 | `neon-marginal-historia-ato-5-margem-zero.webp` | `/public/images/story/neon-marginal-historia-ato-5-margem-zero.webp` | Núcleo da Axiom Brasil. |
| Notícia: demo | `neon-marginal-news-demo-combate-cyberpunk.webp` | `/public/images/news/neon-marginal-news-demo-combate-cyberpunk.webp` | Post “Nova demo de combate revelada”. |
| Notícia: arte | `neon-marginal-news-direcao-arte-neon-brutalista.webp` | `/public/images/news/neon-marginal-news-direcao-arte-neon-brutalista.webp` | Post de direção de arte. |
| Notícia: comunidade | `neon-marginal-news-teste-fechado-comunidade.webp` | `/public/images/news/neon-marginal-news-teste-fechado-comunidade.webp` | Post de teste fechado. |
| Background cidade | `neon-marginal-background-cidade-vertical-cyberpunk.webp` | `/public/images/backgrounds/neon-marginal-background-cidade-vertical-cyberpunk.webp` | Fundo geral ou seção universo. |
| Background CTA | `neon-marginal-background-cta-cidade-neon.webp` | `/public/images/backgrounds/neon-marginal-background-cta-cidade-neon.webp` | Fundo da CTA final. |
| Background grid | `neon-marginal-background-grid-neon.webp` | `/public/images/backgrounds/neon-marginal-background-grid-neon.webp` | Elemento decorativo. |
| Ruído digital | `neon-marginal-texture-ruido-digital.png` | `/public/images/backgrounds/neon-marginal-texture-ruido-digital.png` | Overlay decorativo leve. |

### Alt texts recomendados

| Asset | Alt text recomendado |
|---|---|
| `neon-marginal-logo-principal.png` | `Logo do jogo Neon Marginal` |
| `neon-marginal-hero-nara-vex-katana-fundo-vermelho.webp` | `Nara Vex de costas segurando uma katana em cenário cyberpunk vermelho` |
| `neon-marginal-feature-cidade-viva-hostil.webp` | `Megalópole cyberpunk brasileira com prédios verticais, becos neon e atmosfera hostil` |
| `neon-marginal-feature-combate-tatico-implantes.webp` | `Personagem cyberpunk usando implantes cibernéticos em combate tático urbano` |
| `neon-marginal-personagem-nara-vex-katana-neural.webp` | `Nara Vex, protagonista de Neon Marginal, com katana neural e implantes cibernéticos` |
| `neon-marginal-personagem-caio-patch-moura-hacker.webp` | `Caio Patch Moura, hacker da zona leste vertical em Neon Marginal` |
| `neon-marginal-personagem-iara-flux-rede-subsolo.webp` | `Iara Flux, líder da Rede Subsolo em Neon Marginal` |
| `neon-marginal-personagem-dante-kuro-cacador-corporativo.webp` | `Dante Kuro, caçador corporativo de Neon Marginal` |
| `neon-marginal-personagem-padre-sintese-igreja-tecnologica.webp` | `Padre Síntese, líder de uma igreja tecnológica clandestina em Neon Marginal` |
| `neon-marginal-news-demo-combate-cyberpunk.webp` | `Demonstração de combate cyberpunk com dash e habilidades cibernéticas em Neon Marginal` |
| `neon-marginal-news-direcao-arte-neon-brutalista.webp` | `Conceitos de direção de arte neon brutalista do jogo Neon Marginal` |
| `neon-marginal-news-teste-fechado-comunidade.webp` | `Teste fechado com feedback da comunidade para Neon Marginal` |

### Observação importante

Se a ferramenta de imagem exportar arquivos em `.png`, renomear primeiro mantendo o mesmo nome base. Exemplo:

```txt
neon-marginal-feature-cidade-viva-hostil.png
```

Depois, quando possível, converter para `.webp` e atualizar o caminho no projeto para:

```txt
neon-marginal-feature-cidade-viva-hostil.webp
```

O Codex deve sempre consultar este apêndice antes de criar caminhos de imagem ou vídeo no código.
