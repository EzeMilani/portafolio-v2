import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

// Fuente principal (Cuerpo del texto)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Fuente del Logo (Más gruesa, pesos 700 y 800 como en tu CSS original)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Portafolio - Ezequiel Milani",
  description: "Portafolio de desarrollo web Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Aquí aplicamos el fondo oscuro global y el color de texto blanco */}
      <body className={`${inter.variable} ${montserrat.variable} bg-bg text-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
