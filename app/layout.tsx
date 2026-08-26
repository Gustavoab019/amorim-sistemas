import type { Metadata } from "next";
import "./globals.css";
import { seo, siteUrl } from "./lib/seo";

const ogImage = `${siteUrl}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: seo.siteName,
  title: {
    default: seo.title,
    template: `%s — ${seo.siteName}`
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: "Gustavo Amorim" }],
  creator: "Gustavo Amorim",
  publisher: seo.siteName,
  category: "Business software",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/",
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Complexidade Simples — sistemas sob medida para operações reais"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [ogImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/complexidade-simples-mark.png",
    apple: "/complexidade-simples-mark.png"
  }
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
