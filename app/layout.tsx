import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Complexidade Simples — Sistemas para operações reais",
  description: "Descubra que tipo de sistema sua operação precisa e receba uma faixa inicial de investimento. Captação, painéis, automações e plataformas sob medida."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="font-sans text-brand-ink antialiased">
        {children}
      </body>
    </html>
  );
}
