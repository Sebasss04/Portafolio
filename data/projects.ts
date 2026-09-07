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
    featured: true,
    problem: "Muchos negocios todavía coordinan citas manualmente por WhatsApp y terminan con cruces de horarios, olvidos y poca visibilidad de la agenda.",
    solution: "Una experiencia de reserva simple para clientes y un panel claro para administrar disponibilidad, servicios y profesionales.",
    features: ["Reserva por servicio", "Disponibilidad por horario", "Gestión de profesionales", "Confirmaciones", "Base preparada para personalización por cliente"]
  },
  {
    slug: "catalogo-whatsapp",
    title: "Catálogo + WhatsApp",
    eyebrow: "Solución vendible",
    summary: "Catálogo rápido para pequeños negocios con productos, carrito y cierre de pedido por WhatsApp.",
    kind: "solution",
    status: "Demo",
    stack: ["Next.js", "TypeScript"],
    featured: true,
    problem: "Muchos emprendimientos venden por redes sociales pero obligan al cliente a consultar producto por producto, precio y disponibilidad.",
    solution: "Un catálogo visual y rápido donde el usuario explora, arma su pedido y lo envía por WhatsApp sin necesitar un e-commerce completo.",
    features: ["Catálogo por categorías", "Carrito ligero", "Pedido por WhatsApp", "Diseño mobile-first", "Adaptable a distintos negocios"]
  },
  {
    slug: "chatarreria-el-norte",
    title: "Chatarrería El Norte",
    eyebrow: "Proyecto web",
    summary: "Sitio web desarrollado para presentar servicios, información del negocio y una experiencia más profesional en línea.",
    kind: "personal",
    status: "Documentado",
    stack: ["Web", "Responsive", "GitHub"],
    featured: true,
    repoUrl: "https://github.com/Sebasss04/Chatarreria-el-Norte",
    problem: "Un negocio necesita comunicar sus servicios de forma clara y transmitir confianza sin depender únicamente de redes sociales o mensajería.",
    solution: "Una presencia web directa, adaptable a dispositivos y organizada para que el visitante entienda rápidamente el negocio y pueda avanzar al contacto.",
    features: ["Sitio responsive", "Presentación de servicios", "Información comercial", "Código versionado con Git", "Base adaptable"]
  },
  {
    slug: "infraestructura-la-roca",
    title: "Infraestructura La Roca",
    eyebrow: "Proyecto universitario",
    summary: "Diseño multisede con VLSM, routing, Windows Server, Active Directory y DNS.",
    kind: "university",
    status: "Documentado",
    stack: ["Cisco", "Windows Server", "VMware"],
    featured: true,
    problem: "Diseñar una infraestructura multisede coherente, segmentada y centralizada para una empresa con distintas sucursales.",
    solution: "Topología con direccionamiento VLSM, enrutamiento entre sedes y servicios centralizados mediante Windows Server, Active Directory y DNS.",
    features: ["VLSM", "Routing", "Active Directory", "DNS", "Virtualización con VMware"]
  },
  {
    slug: "homelab",
    title: "HomeLab personal",
    eyebrow: "Proyecto personal",
    summary: "Laboratorio self-hosted para experimentar con Docker, redes privadas y servicios propios.",
    kind: "personal",
    status: "En desarrollo",
    stack: ["Ubuntu", "Docker", "Tailscale"],
    featured: true,
    problem: "Necesitaba un entorno propio para aprender infraestructura real, alojar servicios y probar despliegues sin depender únicamente de proveedores externos.",
    solution: "Servidor personal sobre Ubuntu con servicios contenedorizados, acceso privado y una arquitectura que permite probar, romper y reconstruir sin afectar producción.",
    features: ["Docker", "Tailscale", "Servicios self-hosted", "Almacenamiento local", "Laboratorio de despliegue"]
  }
];
