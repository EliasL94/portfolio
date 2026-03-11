import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elias Louhichi — Développeur Full-Stack | Portfolio & Projets",
  description:
    "Elias Louhichi, développeur Full-Stack passionné par Next.js, React et le design moderne. En recherche active d'alternance sur Paris et en télétravail.",
  keywords: ["Développeur Full-Stack", "Alternance Développeur", "Next.js", "React", "Portfolio Elias Louhichi", "UI/UX Design"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Elias Louhichi — Développeur Full-Stack",
    description: "Portfolio d'Elias Louhichi, développeur Full-Stack passionné par la création d'interfaces modernes et d'applications web performantes.",
    url: "https://portfolio-elias.vercel.app",
    siteName: "Portfolio Elias Louhichi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Elias Louhichi — Développeur Full-Stack",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elias Louhichi — Développeur Full-Stack",
    description: "Portfolio d'Elias Louhichi, développeur Full-Stack passionné par la création d'interfaces modernes et d'applications web performantes.",
    images: ["/og-image.png"],
  },
};

import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body
        className={`${inter.variable} bg-black font-sans text-white antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
