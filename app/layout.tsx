import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sebastian Saavedra — Portafolio",
    template: "%s — Sebastian Saavedra"
  },
  description: "Portafolio de desarrollo web, sistemas, infraestructura y demos funcionales listas para convertirse en proyectos reales.",
  keywords: ["Sebastian Saavedra", "desarrollo web", "portafolio", "sistemas", "infraestructura", "Bolivia"],
  authors: [{ name: "Sebastian Saavedra" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
