import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sebastian Saavedra — Software & Digital Solutions",
  description: "Portafolio de proyectos, soluciones web y experimentos técnicos."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
