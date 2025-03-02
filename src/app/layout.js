import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundCarrossel from "@/components/BackgroundCarrossel/BackgroundCarrossel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CardForge - Batalha de Cartas",
  description: "Desafio Fabrica 2025.1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BackgroundCarrossel />
        {children}
      </body>
    </html>
  );
}
