# Neon Marginal

Landing page oficial do projeto **Neon Marginal**, um jogo cyberpunk brasileiro com atmosfera urbana, brutalista e tecnológica. O site apresenta o universo narrativo, pilares de gameplay, personagens, devlog e assets finais organizados para publicação.

## Visão Geral

O projeto foi construído com **Next.js**, **React**, **TypeScript** e **Tailwind CSS**, usando uma estrutura modular para facilitar manutenção, expansão de conteúdo e futuras integrações.

Principais características:

- Hero full screen com vídeo em loop e poster de fallback.
- Seções narrativas para universo, pilares, personagens, gameplay, timeline, notícias e CTA final.
- Componentes reutilizáveis para cards, header, footer, timeline e chamadas de ação.
- Assets finais versionados em `public/images` e `public/videos`.
- Conteúdo centralizado em `src/data/site.ts`.

## Tecnologias

- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint

## Comandos

Instalar dependências:

```bash
npm install
```

Rodar em desenvolvimento:

```bash
npm run dev
```

Validar o projeto:

```bash
npm run lint
npm run build
```

O servidor local abre em:

```text
http://localhost:3000
```

## Estrutura

```text
src/app/page.tsx        Composição principal da landing page
src/app/globals.css     Tokens visuais, estilos globais e utilitários
src/components          Componentes reutilizáveis da interface
src/data/site.ts        Textos, navegação e caminhos dos assets
public/images           Imagens finais usadas pelo site
public/videos           Vídeos finais usados pelo site
```

## Assets

Os assets usados em produção ficam dentro de `public` e devem ser versionados:

- `public/images/logo`
- `public/images/hero`
- `public/images/characters`
- `public/images/features`
- `public/images/gameplay`
- `public/images/news`
- `public/images/backgrounds`
- `public/images/ui`
- `public/videos`

A pasta `assets`/`Assets` é tratada como backup local e não deve ser publicada no repositório.

## Publicação

Antes de publicar ou abrir pull request:

```bash
npm run lint
npm run build
```

O projeto está preparado para deploy em plataformas compatíveis com Next.js, como Vercel.
