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
  title: "Mario Souvily-grieco - Développeur web Fullstack",
  description: "Portfolio de Mario Souvily-grieco, développeur web fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
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
