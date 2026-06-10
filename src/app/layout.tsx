import type {Metadata} from "next";
import {Inter, Poppins} from "next/font/google";

import "@/app/globals.css";

const inter = Inter({subsets: ["latin"], variable: "--font-inter", display: "swap"});
const poppins = Poppins({subsets: ["latin"], weight: ["600", "700", "800", "900"], variable: "--font-poppins", display: "swap"});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://saltotrampolino.com"),
  title: "Salto Trampolino",
  description: "Bungee trampoline e castelli gonfiabili per eventi in Svizzera."
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="it" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
