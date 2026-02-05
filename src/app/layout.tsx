import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Psicóloga Carla Alvarez | Bienestar y Crecimiento Personal",
  description: "Consulta psicológica profesional con Carla Alvarez. Espacio seguro para tu crecimiento personal y bienestar mental, ansiedad, y terapia de pareja.",
  openGraph: {
    title: "Psicóloga Carla Alvarez | Bienestar Mental",
    description: "Ayudándote a encontrar el equilibrio y la paz mental que necesitas.",
    url: "https://web-carla.com", // Placeholder
    siteName: "Psicóloga Carla Alvarez",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-brand-cream text-gray-800 font-sans selection:bg-brand-sage selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
