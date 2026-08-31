import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "booking",
    title: "Sistema de reservas",
    eyebrow: "Solución vendible",
    summary: "Agenda online para barberías, estilistas y profesionales con disponibilidad, servicios y confirmaciones.",
    kind: "solution",
    status: "En desarrollo",
    stack: ["Next.js", "TypeScript", "Supabase"],
    featured: true
  },
  {
    slug: "catalogo-whatsapp",
    title: "Catálogo + WhatsApp",
    eyebrow: "Solución vendible",
    summary: "Catálogo rápido para pequeños negocios con productos, carrito y cierre de pedido por WhatsApp.",
    kind: "solution",
    status: "Demo",
    stack: ["Next.js", "TypeScript"],
    featured: true
  },
  {
    slug: "infraestructura-la-roca",
    title: "Infraestructura La Roca",
    eyebrow: "Proyecto universitario",
    summary: "Diseño multisede con VLSM, routing, Windows Server, Active Directory y DNS.",
    kind: "university",
    status: "Documentado",
    stack: ["Cisco", "Windows Server", "VMware"],
    featured: true
  },
  {
    slug: "homelab",
    title: "HomeLab personal",
    eyebrow: "Proyecto personal",
    summary: "Laboratorio self-hosted para experimentar con Docker, redes privadas y servicios propios.",
    kind: "personal",
    status: "En desarrollo",
    stack: ["Ubuntu", "Docker", "Tailscale"],
    featured: true
  }
];
