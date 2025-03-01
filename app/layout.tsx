import type { Metadata } from "next";
import { Inter_Tight, Michroma } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Lumon Industries",
  description: "A severed music experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${michroma.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
