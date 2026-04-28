import Image from "next/image";
import type { NavigationItem } from "@/data/site";

type FooterProps = {
  items: NavigationItem[];
};

export function Footer({ items }: FooterProps) {
  return (
    <footer className="border-t border-border-subtle bg-bg-secondary px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
        <a
          className="inline-flex w-fit items-center justify-center"
          href="#inicio"
        >
          <Image
            alt="Neon Marginal"
            className="h-9 w-auto object-contain"
            height={88}
            src="/images/logo/neon-marginal-logo-principal.webp"
            width={384}
          />
        </a>
        <nav
          aria-label="Navegação do rodapé"
          className="flex flex-wrap justify-center gap-x-5 gap-y-3"
        >
          {items.map((item) => (
            <a
              className="text-sm text-text-secondary transition hover:text-text-main"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p className="font-mono text-xs text-text-secondary">
          Neon Marginal © 2026
        </p>
      </div>
    </footer>
  );
}
