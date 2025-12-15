import { Rubik, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

// Fuente para Cuerpo (Body) - Friendly & Legible
const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-nunito",
});

// Fuente para Títulos (Headings) - Friendly & Modern
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-rubik",
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
    <html lang="es" suppressHydrationWarning>
      {/* suppressHydrationWarning añadido para next-themes */}
      <body className={`${nunito.variable} ${rubik.variable} bg-bg text-text antialiased font-sans flex flex-col min-h-screen transition-colors duration-300`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
