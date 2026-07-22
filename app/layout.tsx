import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "hncrafts.dev";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);

  return {
    metadataBase: base,
    title: "HNCRAFTS — Shakil Ahamed",
    description: "Portfolio of Shakil Ahamed, an IT student and developer building useful experiences across web, Python, AI, IoT, and mobile.",
    openGraph: {
      title: "HNCRAFTS — Shakil Ahamed",
      description: "IT student and developer building useful digital experiences.",
      type: "website",
      images: [{ url: "/og.png", width: 1732, height: 909, alt: "HNCRAFTS — Shakil Ahamed, Developer" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "HNCRAFTS — Shakil Ahamed",
      description: "IT student and developer building useful digital experiences.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
