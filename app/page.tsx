import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#inicio"><span>SS</span><strong>Sebastian Saavedra</strong></a>
        <nav>
          <a href="#proyectos">Proyectos</a>
          <a href="#perfil">Perfil</a>
          <a className="nav-cta" href="#contacto">Contacto</a>
        </nav>
      </header>

      <section id="inicio" className="hero shell">
        <div className="hero-copy">
          <span className="kicker">WEB · SISTEMAS · INFRAESTRUCTURA</span>
          <h1>Construyo productos digitales <em>claros, útiles y funcionales.</em></h1>
          <p>Portfolio personal y laboratorio de soluciones listas para convertirse en proyectos reales.</p>
          <div className="hero-actions">
            <a className="primary" href="#proyectos">Ver proyectos <span>→</span></a>
            <a className="secondary" href="https://github.com/Sebasss04">GitHub <span>↗</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-grid" />
          <div className="visual-card visual-card-a"><span>01</span><strong>Demos vendibles</strong></div>
          <div className="visual-card visual-card-b"><span>02</span><strong>Proyectos reales</strong></div>
          <div className="visual-label">Selected work / 2026</div>
        </div>
      </section>

      <section id="proyectos" className="section shell">
        <div className="section-title-row">
          <div><span className="section-index">01 / SELECTED WORK</span><h2>Demos y proyectos destacados</h2></div>
          <a href="https://github.com/Sebasss04">Ver GitHub ↗</a>
        </div>
        <div className="showcase-grid">
          {featured.map((project, index) => (
            <article className={`showcase-card card-${index + 1}`} key={project.slug}>
              <Link href={`/proyectos/${project.slug}`} className="project-visual-link" aria-label={`Ver ${project.title}`}>
                <div className="project-visual">
                  <span className="project-number">0{index + 1}</span>
                  <div className="project-screen">
                    <span>{project.eyebrow}</span>
                    <strong>{project.title}</strong>
                  </div>
                </div>
              </Link>
              <div className="project-meta">
                <div><h3>{project.title}</h3><p>{project.stack.slice(0, 3).join(" · ")}</p></div>
                <Link href={`/proyectos/${project.slug}`} aria-label={`Abrir ${project.title}`}>→</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="perfil" className="profile shell">
        <span className="section-index">02 / PERFIL</span>
        <div className="profile-grid">
          <h2>Diseño, desarrollo y criterio técnico en un mismo flujo.</h2>
          <div><p>Construyo soluciones web y proyectos de sistemas con foco en simplicidad, rendimiento y utilidad real.</p><div className="capabilities"><span>Frontend</span><span>Backend</span><span>Git</span><span>Networking</span><span>Infraestructura</span></div></div>
        </div>
      </section>

      <section id="contacto" className="cta shell">
        <span>¿TIENES UN PROYECTO?</span>
        <h2>Hagamos algo que se pueda mostrar, usar y vender.</h2>
        <a href="https://github.com/Sebasss04">Ver perfil y contacto <span>↗</span></a>
      </section>

      <footer className="footer shell"><span>© 2026 Sebastian Saavedra</span><span>Santa Cruz · Bolivia</span><a href="https://github.com/Sebasss04">GitHub ↗</a></footer>
    </main>
  );
}
