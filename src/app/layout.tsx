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
  title: "Marfuah Medika | Cek Kesehatan & Homecare Cakung, Jakarta Timur",
  description: "Pos Sehat Marfuah Medika melayani cek gula darah, tensi, kolesterol, asam urat, penyediaan alkes, serta homecare & manajemen obat keluarga di Cakung, Jakarta Timur. Dikelola langsung oleh Apoteker Mardiana Fuad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
