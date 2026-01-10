"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Projetos", href: "#casos" },
  { label: "Para quem", href: "#para-quem" }
];


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/95 backdrop-blur-md shadow-soft">
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
        src="/logo-amorim.png"
        alt="Amorim Sistemas"
        width={230}
        height={64}
        priority
        className="h-[46px] w-auto"
      />
    </Link>
  );
}

function DesktopNav() {
  return (
    <nav
      className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex"
      aria-label="Navegacao principal"
    >
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="transition hover:text-slate-900"
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
        href="#conversa"
        className="rounded-lg bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:bg-brand-blue/90 hover:shadow-medium hover:-translate-y-0.5"
      >
        Agendar conversa
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
        href="#conversa"
        className="rounded-lg bg-brand-blue px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-brand-blue/90"
      >
        Agendar
      </Link>
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50"
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
    <div className="border-t border-slate-200/60 bg-white lg:hidden">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <nav
          className="flex flex-col gap-4 text-sm font-medium text-slate-700"
          aria-label="Navegacao principal"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-slate-900"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6">
          <Link
            href="#conversa"
            className="block rounded-lg bg-brand-blue px-4 py-3 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-brand-blue/90"
            onClick={onClose}
          >
            Agendar conversa
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
