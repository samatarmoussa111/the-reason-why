import type React from "react";
import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const monaSans = Mona_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Fatouma N Ali - The Reason Why",
  description:
    "A true story of hardship, cultural differences, and resilience. From struggles to strength - a journey of resilience by Fatouma N Ali.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${monaSans.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
