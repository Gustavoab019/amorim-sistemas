import Link from "next/link";

const CONTACTS = [
  {
    label: "Email direto",
    value: "contato@amorimsistemas.com",
    href: "mailto:contato@amorimsistemas.com?subject=Conversa%20sobre%20sistemas"
  },
  {
    label: "WhatsApp",
    value: "+351 913 542 470",
    href: "https://wa.me/351913542470?text=Ola%20Gustavo%2C%20quero%20falar%20sobre%20um%20sistema."
  },
  {
    label: "Telefone",
    value: "+351 913 542 470",
    href: "tel:+351913542470"
  }
];

export default function ContatoPage() {
  return (
    <main className="bg-slate-50 px-6 pb-20 pt-28 text-slate-700 sm:pt-32">
      <div className="mx-auto w-full max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-brand-blue">
          ← Voltar para o site
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
          Contato
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          Vamos falar sobre o que está acontecendo na sua operação e entender se
          faz sentido eu ajudar. Sem pitch, sem venda forçada.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {CONTACTS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition hover:border-brand-blue/40 hover:shadow-medium"
              target={item.href.startsWith("https://") ? "_blank" : undefined}
              rel={item.href.startsWith("https://") ? "noreferrer" : undefined}
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {item.label}
              </div>
              <div className="mt-2 text-lg font-semibold text-slate-900">
                {item.value}
              </div>
              <div className="mt-1 text-sm text-slate-500">
                Clique para abrir
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200/70 bg-white p-8 shadow-soft">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            Como funciona a conversa
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
            Agendamos 30-40 minutos para entender seu processo, onde está o
            gargalo e o que precisa ser organizado. Se fizer sentido, eu explico
            os próximos passos com clareza.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
            <span className="rounded-full bg-slate-100 px-4 py-1.5">
              Diagnóstico rápido
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-1.5">
              Proposta objetiva
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-1.5">
              Sem intermediários
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
