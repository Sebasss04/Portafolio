import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main>
      <header className="nav shell">
        <Link className="brand" href="/"><span>SS</span><strong>Sebastian Saavedra</strong></Link>
        <nav>
          <Link href="/#proyectos">Proyectos</Link>
          <a className="nav-cta" href="https://github.com/Sebasss04">GitHub</a>
        </nav>
      </header>

      <section className="project-hero shell">
        <Link className="back-link" href="/#proyectos">← Volver al portafolio</Link>
        <span className="kicker">{project.eyebrow} · {project.status}</span>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <div className="detail-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="detail-actions">
          {project.demoUrl && <a className="primary" href={project.demoUrl}>Ver demo ↗</a>}
          {project.repoUrl && <a className="secondary" href={project.repoUrl}>Ver repositorio ↗</a>}
        </div>
      </section>

      <section className="project-case shell">
        <article>
          <span className="section-index">01 / PROBLEMA</span>
          <h2>Qué necesitaba resolverse</h2>
          <p>{project.problem}</p>
        </article>
        <article>
          <span className="section-index">02 / SOLUCIÓN</span>
          <h2>Cómo está planteado</h2>
          <p>{project.solution}</p>
        </article>
      </section>

      <section className="project-features shell">
        <span className="section-index">03 / FUNCIONES</span>
        <h2>Puntos principales</h2>
        <div className="feature-list">
          {project.features.map((feature, index) => (
            <div key={feature}><span>0{index + 1}</span><strong>{feature}</strong></div>
          ))}
        </div>
      </section>

      <section className="cta shell">
        <span>SIGUIENTE PASO</span>
        <h2>{project.kind === "solution" ? "Esta solución puede adaptarse a un negocio real." : "Cada proyecto suma experiencia aplicable a soluciones reales."}</h2>
        <Link href="/#contacto">Volver al contacto <span>→</span></Link>
      </section>

      <footer className="footer shell"><span>© 2026 Sebastian Saavedra</span><span>Santa Cruz · Bolivia</span><a href="https://github.com/Sebasss04">GitHub ↗</a></footer>
    </main>
  );
}
