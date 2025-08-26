import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Mario Souvily-grieco - Développeur Web Fullstack | Portfolio",
  description: "Portfolio de Mario Souvily-grieco, développeur web fullstack spécialisé en React, Nextjs,Node.js, TypeScript et PostgreSQL. Découvrez mes projets et compétences en développement web.",
  keywords: [
    "développeur web",
    "fullstack",
    "React",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "JavaScript",
    "Next.js",
    "Express",
    "Sequelize",
    "Tailwind",
    "HTML",
    "CSS",
    "prisma",
    "portfolio",
    "développement web",
    "frontend",
    "backend"
  ],
  authors: [{ name: "Mario Souvily-grieco" }],
  creator: "Mario Souvily-grieco",
  publisher: "Mario Souvily-grieco",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.mariosouvily.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mario Souvily-grieco - Développeur Web Fullstack",
    description: "Portfolio de Mario Souvily-grieco, développeur web fullstack spécialisé en React, Nextjs, Node.js, TypeScript et PostgreSQL.",
    url: "https://www.mariosouvily.com",
    siteName: "Portfolio Mario Souvily-grieco",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/image-moi.png",
        width: 1200,
        height: 630,
        alt: "Mario Souvily-grieco - Développeur Web Fullstack",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification=ilWRwEFMnmp6ByfkIoUQiuDa_lCmPnZA2Bx0QXY80Zs",
    // yandex: "votre-code-verification-yandex",
    // yahoo: "votre-code-verification-yahoo",
  },
  category: "technology",
  classification: "Portfolio professionnel",
  other: {
    "theme-color": "#000000",
    "msapplication-TileColor": "#000000",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Portfolio Mario",
    "application-name": "Portfolio Mario Souvily-grieco",
    "msapplication-config": "/browserconfig.xml",
    // LinkedIn specific
    "linkedin:owner": "mario-souvily-grieco",
    "linkedin:profile": "https://www.linkedin.com/in/mario-grieco-a510263b/",
    "linkedin:company": "Mario Souvily-grieco",
    "linkedin:title": "Développeur Web Fullstack",
    "linkedin:description": "Portfolio de Mario Souvily-grieco, développeur web fullstack spécialisé en React, Nextjs, Node.js, TypeScript et PostgreSQL.",
    "linkedin:image": "/images/image-moi.png",
    "linkedin:url": "https://www.mariosouvily.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Portfolio Mario" />
        <link rel="apple-touch-icon" href="/images/image-moi.png" />
      </head>
      <body
        className={cn(
          GeistSans.variable,
          AnekTelugu.variable,
          "font-sans h-full bg-background text-foreground"
        )}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
