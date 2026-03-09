import type { Metadata } from "next";
import { Space_Mono, Inter } from "next/font/google";
import { GrainOverlay } from "@/components/GrainOverlay";
import { NavigationDots } from "@/components/NavigationDots";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NIKE SKATE LORE",
  description: "Every curb has a story. An AR concept that layers 90s ghost footage onto real-world skate spots.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${inter.variable}`}>
      <body>
        <GrainOverlay />
        <NavigationDots />
        {children}
      </body>
    </html>
  );
}
