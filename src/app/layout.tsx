import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { Poppins } from "next/font/google";

import { ParticlesProviderWrapper } from "@/components/layout";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Haseeb Ur Rehman - Full-Stack Developer",
    description:
      "Full-stack developer specializing in Next.js, React, TypeScript, and Node.js. Building scalable web apps with MongoDB, Tailwind CSS, and modern tooling.",
    keywords: [
      "Haseeb Ur Rehman",
      "Full-Stack Developer",
      "Next.js Developer",
      "React Developer",
      "TypeScript",
      "Node.js Developer",
      "MongoDB",
      "Web Developer Portfolio",
      "Frontend Developer",
      "Backend Developer",
    ],
    authors: [{ name: "Haseeb Ur Rehman" }],
    creator: "Haseeb Ur Rehman",
    metadataBase: new URL("https://afif-ur-rahman.vercel.app/"),
    openGraph: {
      title: "Haseeb Ur Rehman - Full-Stack Developer",
      description: "Full-stack developer specializing in Next.js, React, TypeScript, and Node.js.",
      url: "https://afif-ur-rahman.vercel.app/",
      siteName: "Haseeb Ur Rehman",
      images: [
        {
          url: "/og-image.jpeg",
          width: 960,
          height: 960,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Haseeb Ur Rehman - Full-Stack Developer",
      description: "Full-stack developer specializing in Next.js, React, TypeScript, and Node.js.",
      images: ["/og-image.jpeg"],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
  };
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`} suppressHydrationWarning>
        <ParticlesProviderWrapper>
          <Theme>{children}</Theme>
        </ParticlesProviderWrapper>
      </body>
    </html>
  );
}
