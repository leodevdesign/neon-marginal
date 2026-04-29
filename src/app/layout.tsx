import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neon-marginal.vercel.app"),
  title: "Neon Marginal",
  description: "Cyberpunk brasileiro. A cidade observa. A margem responde.",
  icons: {
    icon: "/images/branding/favicon.png",
    shortcut: "/images/branding/favicon.png",
    apple: "/images/branding/favicon.png",
  },
  openGraph: {
    title: "Neon Marginal",
    description: "Cyberpunk brasileiro. A cidade observa. A margem responde.",
    images: [
      {
        url: "/images/branding/og-image.png",
        width: 1200,
        height: 630,
        alt: "Neon Marginal",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neon Marginal",
    description: "Cyberpunk brasileiro. A cidade observa. A margem responde.",
    images: ["/images/branding/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
