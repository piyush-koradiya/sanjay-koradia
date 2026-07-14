import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/contexts/LocaleContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.sanjaykoradia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Sanjay Koradia – MLA Junagadh",
    default: "Sanjay Koradia – MLA Junagadh | Official Website",
  },
  description:
    "Official website of Sanjay Koradia (Sanjay Koradiya), MLA of Junagadh, Gujarat. Dedicated to the progress and welfare of every citizen.",
  keywords: [
    "Sanjay Koradia",
    "Sanjay Koradiya",
    "Junagadh MLA",
    "Gujarat MLA",
    "Junagadh politician",
    "Sanjay Koradia Junagadh",
    "Sanjaybhai Koradia",
    "Vanraj Food Industries",
  ],
  authors: [{ name: "Sanjay Koradia" }],
  creator: "Sanjay Koradia",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Sanjay Koradia – MLA Junagadh",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sanjay Koradia – MLA, Junagadh",
      },
    ],
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
      <body className="font-sans antialiased">
        <LocaleProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
