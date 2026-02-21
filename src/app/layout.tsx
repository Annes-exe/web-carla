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
  title: "Psicóloga Carla Alvarez | Bienestar y Salud Mental en Maracay",
  description: "Consulta psicológica profesional con Carla Alvarez en Maracay, Aragua. Terapia individual, de pareja y gestión de ansiedad. Agenda tu cita presencial u online.",
  keywords: ["Psicóloga Maracay", "Terapia Aragua", "Salud Mental Venezuela", "Ansiedad", "Depresión", "Terapia de Pareja", "Psicólogo Online", "Carla Alvarez"],
  authors: [{ name: "Carla Alvarez" }],
  creator: "Carla Alvarez",
  openGraph: {
    title: "Psicóloga Carla Alvarez | Tu espacio de bienestar",
    description: "Ayudándote a recuperar tu paz mental y equilibrio emocional. Terapia presencial en Maracay y consultas online.",
    url: "https://psicologacarlaalvarez.com",
    siteName: "Psicóloga Carla Alvarez",
    locale: "es_VE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
        alt: "Consultorio Psicóloga Carla Alvarez",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
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
