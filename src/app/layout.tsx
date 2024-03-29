import Footer from "@/app/_components/footer";
import type { Metadata } from "next";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";

import { Inter } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.poption.org'),
  title: `Hydrogenbear's Fantasy Logbook`,
  description: `Journeys in Creativity: Exploring New Ideas in Technology and Fantasy`,
  openGraph: {
    title: `Hydrogenbear's Fantasy Logbook`,
    images: [HOME_OG_IMAGE_URL]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen">{children}</div>
        <Footer />
        <SpeedInsights />
      </body>
      <Script
        async
        src="https://eu.umami.is/script.js"
        data-website-id="229dbb85-c081-4ca0-a01a-84a060dc5e6b"
      />
    </html>
  );
}
