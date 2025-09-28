import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { BackgroundOrbs } from "./components/BackgroundOrbs";
import Script from "next/script";
import { SplashScreen } from "./components/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rimexmedya.com"),
  title: {
    default: "Rimex Medya | Dijital Reklam ve Medya Ajansı",
    template: "%s | Rimex Medya",
  },
  description:
    "Rimex Medya; dijital reklam, medya planlama, içerik prodüksiyonu ve performans pazarlamasıyla markaları büyüten İstanbul merkezli ajans.",
  keywords: [
    "reklam ajansı",
    "medya ajansı",
    "dijital reklam",
    "performans pazarlaması",
    "medya planlama",
    "rimex medya",
    "istanbul reklam ajansı",
  ],
  alternates: {
    canonical: "https://www.rimexmedya.com",
  },
  openGraph: {
    title: "Rimex Medya | Dijital Reklam ve Medya Ajansı",
    description:
      "Rimex Medya; dijital reklam, medya planlama, içerik prodüksiyonu ve performans pazarlamasıyla markaları büyüten İstanbul merkezli ajans.",
    url: "https://www.rimexmedya.com",
    siteName: "Rimex Medya",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rimex Medya | Dijital Reklam ve Medya Ajansı",
    description:
      "Rimex Medya, veri odaklı kampanyalar ve kreatif içerik üretimiyle görünürlüğünüzü artırır.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <SplashScreen />
        <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Rimex Medya",
            url: "https://www.rimexmedya.com",
            logo: "https://www.rimexmedya.com/favicon.ico",
            sameAs: [
              "https://www.instagram.com/rimexmedya",
              "https://www.linkedin.com/company/rimexmedya"
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+90-212-555-0888",
              contactType: "customer service",
              areaServed: "TR",
              availableLanguage: ["Turkish", "English"]
            }
          })}
        </Script>
        <BackgroundOrbs />
        <Header />
        <main className="pt-28 sm:pt-32">{children}</main>
      </body>
    </html>
  );
}
