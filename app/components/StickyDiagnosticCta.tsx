"use client";

import { useEffect, useState } from "react";

/**
 * CTA persistente no telemóvel.
 *
 * A página tem ~16 000px de altura. Quem chega de um anúncio percorre-a com o
 * polegar e, passado o primeiro ecrã, deixa de ter qualquer forma de agir sem
 * voltar ao topo — a decisão de avançar acontece a meio da leitura, não no fim.
 *
 * Três regras que o mantêm útil em vez de irritante:
 *  · só aparece depois do herói sair de vista (antes disso era redundante);
 *  · desaparece quando o diagnóstico está no ecrã (não compete consigo mesmo);
 *  · só no telemóvel — no desktop a nav já leva o botão sempre visível.
 */
export function StickyDiagnosticCta() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const heroi = document.querySelector("main > section:first-of-type");
    const diagnostico = document.getElementById("diagnostico");
    if (!heroi) return;

    let passouOHeroi = false;
    let noDiagnostico = false;
    const actualizar = () => setVisivel(passouOHeroi && !noDiagnostico);

    const obsHeroi = new IntersectionObserver(
      ([e]) => { passouOHeroi = !e.isIntersecting; actualizar(); },
      { rootMargin: "-80px 0px 0px 0px" }
    );
    obsHeroi.observe(heroi);

    let obsDiag: IntersectionObserver | undefined;
    if (diagnostico) {
      obsDiag = new IntersectionObserver(
        ([e]) => { noDiagnostico = e.isIntersecting; actualizar(); },
        // Margem generosa: quando o diagnóstico está quase a entrar, a barra
        // já não faz falta e sair antes evita o salto visual.
        { rootMargin: "0px 0px -35% 0px" }
      );
      obsDiag.observe(diagnostico);
    }

    return () => { obsHeroi.disconnect(); obsDiag?.disconnect(); };
  }, []);

  return (
    <div
      aria-hidden={!visivel}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-brand-gold/25 bg-[#FBFAF7]/95 px-4 py-3 backdrop-blur transition-transform duration-300 lg:hidden ${
        visivel ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href="#diagnostico"
        tabIndex={visivel ? 0 : -1}
        className="flex items-center justify-center gap-2 rounded-md bg-brand-ink px-5 py-3.5 text-sm font-semibold text-white shadow-large"
      >
        Fazer o diagnóstico
        <span className="text-brand-gold">— 2 min</span>
      </a>
    </div>
  );
}
