"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Casos reais", href: "#casos" },
  { label: "Oferta", href: "#oferta" }
];


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-gold/20 bg-[#FBFAF7]/92 backdrop-blur-md shadow-soft">
      <MainBar isMenuOpen={isMenuOpen} onToggleMenu={setIsMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}


function MainBar({
  isMenuOpen,
  onToggleMenu
}: {
  isMenuOpen: boolean;
  onToggleMenu: (value: boolean) => void;
}) {
  return (
    <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
      <Logo />
      <DesktopNav />
      <DesktopActions />
      <MobileActions isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
    </div>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/complexidade-simples-logo.png"
        alt=""
        width={375}
        height={139}
        priority
        className="h-8 w-auto object-contain"
      />
      <span className="leading-tight">
        <span className="block text-sm font-semibold uppercase text-brand-ink sm:text-base">
          Complexidade Simples
        </span>
        <span className="hidden text-xs font-medium text-brand-bronze sm:block">
          sistemas que organizam
        </span>
      </span>
    </Link>
  );
}

function DesktopNav() {
  return (
    <nav
      className="hidden items-center gap-8 text-sm font-medium text-brand-ink/70 lg:flex"
      aria-label="Navegacao principal"
    >
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="transition hover:text-brand-ink"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

function DesktopActions() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <Link
        href="#diagnostico"
        className="rounded-lg border border-brand-gold bg-transparent px-6 py-2.5 text-sm font-semibold text-brand-ink shadow-soft transition-all duration-200 hover:bg-brand-gold hover:text-white hover:shadow-medium"
      >
        Fazer diagnóstico
      </Link>
    </div>
  );
}

function MobileActions({
  isMenuOpen,
  onToggleMenu
}: {
  isMenuOpen: boolean;
  onToggleMenu: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-3 lg:hidden">
      <Link
        href="#diagnostico"
        className="rounded-lg border border-brand-gold px-4 py-2 text-xs font-semibold text-brand-ink shadow-soft transition hover:bg-brand-gold hover:text-white"
      >
        Diagnóstico
      </Link>
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-brand-gold/30 text-brand-ink transition hover:bg-brand-paper"
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isMenuOpen}
        onClick={() => onToggleMenu(!isMenuOpen)}
      >
        <MenuIcon className="h-5 w-5" isOpen={isMenuOpen} />
      </button>
    </div>
  );
}

function MobileMenu({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="border-t border-brand-gold/20 bg-[#FBFAF7] lg:hidden">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <nav
          className="flex flex-col gap-4 text-sm font-medium text-brand-ink/75"
          aria-label="Navegacao principal"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-brand-ink"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6">
          <Link
            href="#diagnostico"
            className="block rounded-lg border border-brand-gold px-4 py-3 text-center text-sm font-semibold text-brand-ink shadow-soft transition hover:bg-brand-gold hover:text-white"
            onClick={onClose}
          >
            Fazer diagnóstico
          </Link>
        </div>
      </div>
    </div>
  );
}

function MenuIcon({
  className,
  isOpen
}: {
  className?: string;
  isOpen: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    >
      {isOpen ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6l-12 12" />
        </>
      ) : (
        <>
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </>
      )}
    </svg>
  );
}
