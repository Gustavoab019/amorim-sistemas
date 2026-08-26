"use client";

import type { Insight } from "../lib/insights";

/**
 * As notas de leitura, à medida que as respostas entram.
 *
 * Aparecem sempre no mesmo sítio e nunca desaparecem sozinhas enquanto a
 * resposta que as gerou continuar marcada — uma caixa que pisca a cada clique
 * lê-se como decoração, não como raciocínio.
 */

const TONE: Record<Insight["tone"], { label: string; dot: string; border: string }> = {
  leitura: { label: "Leitura", dot: "bg-brand-bronze", border: "border-brand-gold/25" },
  atencao: { label: "A ter em conta", dot: "bg-[#B4552F]", border: "border-[#B4552F]/30" },
  ganho: { label: "Isto joga a teu favor", dot: "bg-brand-sage", border: "border-brand-sage/35" }
};

export function InsightNotes({ insights }: { insights: Insight[] }) {
  if (insights.length === 0) {
    return (
      <div className="border border-dashed border-brand-gold/25 bg-[#FBFAF7]/60 p-6">
        <p className="text-sm leading-7 text-brand-ink/45">
          À medida que respondes, aparece aqui o que estamos a ler em cada
          resposta — e não só o resultado no fim.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase text-brand-bronze">
        O que estamos a ler ({insights.length})
      </p>
      {insights.map((note) => {
        const tone = TONE[note.tone];
        return (
          <article
            key={note.id}
            className={`animate-slide-up border ${tone.border} bg-[#FBFAF7] p-5 shadow-soft`}
          >
            <div className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-ink/45">
                {tone.label}
              </span>
            </div>
            <h4 className="mt-2.5 text-base font-semibold leading-6 text-brand-ink">
              {note.title}
            </h4>
            <p className="mt-2 text-sm leading-7 text-brand-ink/62">{note.body}</p>
          </article>
        );
      })}
    </div>
  );
}
