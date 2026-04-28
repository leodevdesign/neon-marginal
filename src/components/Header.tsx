"use client";

import Image from "next/image";
import { useState } from "react";
import type { NavigationItem } from "@/data/site";
import { Button } from "@/components/Button";

type HeaderProps = {
  items: NavigationItem[];
};

export function Header({ items }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const desktopItems = items.filter((item) => item.href !== "#noticias");

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-bg-main/76 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
          <a className="inline-flex w-fit items-center" href="#inicio">
            <Image
              alt="Neon Marginal"
              className="h-10 w-auto object-contain sm:h-12"
              height={88}
              priority
              src="/images/logo/neon-marginal-logo-principal.webp"
              width={384}
            />
          </a>

          <div className="hidden items-center gap-3 lg:flex">
            <nav
              aria-label="Navegacao principal"
              className="flex flex-wrap gap-2"
            >
              {desktopItems.map((item) => (
                <a
                  className="nav-link whitespace-nowrap rounded border border-transparent px-3 py-2 text-sm text-text-secondary transition duration-300 hover:border-border-subtle hover:bg-white/5 hover:text-electric-blue hover:shadow-[0_0_22px_rgba(0,229,255,0.12)]"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Button href="#noticias" variant="ghost">
              Devlog
            </Button>
          </div>

          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded border border-border-subtle bg-bg-secondary/80 text-text-main shadow-[0_0_24px_rgba(0,229,255,0.12)] transition hover:border-electric-blue hover:text-electric-blue lg:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            <span className="sr-only">
              {isMenuOpen ? "Fechar menu" : "Abrir menu"}
            </span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 top-[73px] z-40 border-t border-electric-blue/20 bg-[#050509] px-5 py-8 shadow-[0_30px_120px_rgba(0,0,0,0.82)] transition duration-300 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
        style={{ backgroundColor: "#050509" }}
      >
        <div className="mx-auto flex min-h-[calc(100dvh-9rem)] max-w-lg flex-col">
          <div className="mb-8 flex items-center justify-between border-b border-border-subtle pb-5">
            <p className="font-mono text-xs uppercase text-electric-blue">
              Menu
            </p>
            <button
              aria-label="Fechar menu mobile"
              className="rounded border border-border-subtle px-4 py-2 text-sm text-text-secondary transition hover:border-neon-red hover:text-neon-red"
              onClick={closeMenu}
              type="button"
            >
              Fechar
            </button>
          </div>

          <nav
            aria-label="Navegacao mobile"
            className="flex flex-1 flex-col justify-center gap-3"
          >
            {items.map((item) => (
              <a
                className="rounded-md border border-border-subtle bg-bg-secondary px-5 py-4 text-2xl font-black text-text-main shadow-[0_18px_50px_rgba(0,0,0,0.38)] transition duration-300 hover:translate-x-1 hover:border-electric-blue hover:text-electric-blue hover:shadow-[0_0_32px_rgba(0,229,255,0.16)]"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 h-px bg-gradient-to-r from-neon-red via-electric-magenta to-electric-blue" />
        </div>
      </div>
    </>
  );
}
