import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IVOR Bearings International – Rodamientos y Componentes Industriales",
  description:
    "Distribuidor autorizado de rodamientos, sellos, correas, cadenas y componentes industriales de las mejores marcas del mundo. SKF, FAG, NSK, NTN, Timken y más.",
  keywords: "rodamientos, bearings, componentes industriales, SKF, FAG, NSK, Venezuela",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen bg-gray-50`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
