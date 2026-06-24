import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/contexts/LocaleContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
      </body>
    </html>
  );
}
