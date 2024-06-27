import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import Navbar from "@/components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

const siteConfig = {
  name: "Ehtesham Ansari",
  description: "I am a Passionate Software Developer",
  ogImage: "https://portfolio-ehte92s-projects.vercel.app/og-image.png",
  url: "https://portfolio-ehte92s-projects.vercel.app",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-ehte92s-projects.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Developer`,
  },
  description: siteConfig.description,

  // added new keywords for SEO
  keywords: [
    "ehtesham",
    "ansari",
    "Ehtesham",
    "Ansari",
    "Ehtesham Ansari",
    "ehtesham ansari",
    "ehteshamansari",
    "portfolio",
    "full stack developer",
    "full stack",
    "web developer",
    "web",
    "developer",
    "programmer",
    "website",
    "@ehte92",
    "ehte92",
    "ehtesham developer",
  ],
  authors: [
    {
      name: "Ehtesham Ansari",
      url: "https://github.com/ehte92",
    },
  ],
  creator: "Ehtesham Ansari",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@ehte92",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            "flex relative screen break-words min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]",
            { "bg-white": "#E6E7EB" }
          )}
        >
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
