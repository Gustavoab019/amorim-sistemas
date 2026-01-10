import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Amorim Sistemas — Sistemas que funcionam no mundo real",
  description: "Transformo complexidade em sistemas funcionais, previsíveis e escaláveis. Clareza acima de complexidade. Processo antes de tecnologia."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-white text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
