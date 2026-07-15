import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://sanjaykoradia.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/favicon.ico",
          "/brand-favicon-48.png",
          "/brand-favicon-96.png",
          "/brand-favicon-192.png",
        ],
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
