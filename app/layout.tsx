import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import portfolioData from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://kandulalikhitha.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${portfolioData.personal.displayName} | Portfolio`,
    template: `%s | ${portfolioData.personal.displayName}`,
  },
  description: portfolioData.personal.shortIntro,
  keywords: [
    portfolioData.personal.displayName,
    "portfolio",
    "software developer",
    "web developer",
  ],
  authors: [{ name: portfolioData.personal.displayName }],
  creator: portfolioData.personal.displayName,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${portfolioData.personal.displayName} | Portfolio`,
    description: portfolioData.personal.shortIntro,
    siteName: `${portfolioData.personal.displayName} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.displayName} | Portfolio`,
    description: portfolioData.personal.shortIntro,
  },
  icons: {
    icon: "/icons/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
