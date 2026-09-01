# Portfolio Sebastian

Base del portfolio profesional y catálogo de soluciones demostrables.

## Objetivo

Centralizar proyectos personales, universitarios y productos web vendibles sin mezclar código de producción de clientes.

## Arquitectura inicial

- Next.js + TypeScript
- Datos de proyectos locales (`data/projects.ts`)
- Sin base de datos ni autenticación en el MVP
- Preparado para deploy gratuito de demo

## Estructura

```text
app/             rutas y páginas
components/      componentes reutilizables
data/            catálogo temporal de proyectos
types/           contratos TypeScript
public/          imágenes y assets
prototype/       preview estático del diseño
```

## Flujo Git recomendado

- `main`: versión estable
- `develop`: integración
- `feature/*`: cambios concretos

Ejemplos de commits:

- `feat: create portfolio landing page`
- `feat: add project catalog`
- `fix: improve mobile navigation`
- `docs: document deployment strategy`

## Próximos pasos

1. Validar diseño y contenido.
2. Crear páginas dinámicas `/proyectos/[slug]`.
3. Añadir URLs reales de demos y repositorios públicos.
4. Crear filtros por tipo.
5. Deploy gratuito del portfolio.
6. Integrar GitHub API solo si aporta valor visible.
