import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { SITE_CONFIG } from "@/lib/config";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: `${SITE_CONFIG.name} | İstanbul'da Ceviz Satışı ve Tedariki`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "İstanbul'da bireysel alıcılar, kuruyemişçiler, pastaneler, restoranlar ve gıda işletmeleri için 10 kg ve üzeri kabuklu ceviz ve iç ceviz satışı ve tedariki.",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#322014",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`:root { --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; --font-serif: 'Lora', Georgia, serif; }`}</style>
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#ana-icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-walnut-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-cream-50"
        >
          Ana içeriğe geç
        </a>
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebSiteSchema()} />
        <Header />
        <main id="ana-icerik" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
