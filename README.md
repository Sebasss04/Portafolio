# Portafolio Sebastian

Base del portafolio profesional y catálogo de soluciones demostrables de Sebastian Saavedra / WebVibe.

## Objetivo

Centralizar proyectos personales, universitarios y productos web vendibles sin mezclar el código de producción de futuros clientes.

## Stack inicial

- Next.js
- TypeScript
- CSS global ligero
- Git + GitHub
- Sin base de datos ni autenticación en el MVP

## Flujo Git

- `main`: versión estable
- `develop`: integración y pruebas
- `feature/*`: cambios concretos

## Estructura

```text
app/             rutas y páginas
components/      componentes reutilizables
data/            catálogo temporal de proyectos
types/           contratos TypeScript
public/          imágenes y assets
```

## Desarrollo local

```bash
npm install
npm run dev
```

Luego abre `http://localhost:3000`.

## Próximos pasos

1. Validar diseño y contenido.
2. Crear páginas dinámicas `/proyectos/[slug]`.
3. Añadir URLs reales de demos y repositorios públicos.
4. Crear filtros por tipo.
5. Preparar deploy gratuito del portafolio.
6. Integrar GitHub API solo si aporta valor visible.
