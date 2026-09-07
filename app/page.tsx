import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  const solutions = projects.filter((project) => project.kind === "solution");
  const work = projects.filter((project) => project.kind !== "solution");

  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#inicio"><span>SS</span><strong>Sebastian Saavedra</strong></a>
        <nav>
          <a href="#demos">Demos</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#perfil">Perfil</a>
          <a className="nav-cta" href="#contacto">Contacto</a>
        </nav>
      </header>

      <section id="inicio" className="hero shell">
        <div className="hero-copy">
          <span className="kicker">WEB · SISTEMAS · INFRAESTRUCTURA</span>
          <h1>Construyo soluciones digitales <em>listas para convertirse en proyectos reales.</em></h1>
          <p>Demos funcionales, desarrollo web y proyectos técnicos reunidos en un solo lugar.</p>
          <div className="hero-actions">
            <a className="primary" href="#demos">Explorar demos <span>→</span></a>
            <a className="secondary" href="https://github.com/Sebasss04">GitHub <span>↗</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-grid" />
          <div className="visual-card visual-card-a"><span>01</span><strong>Demos para negocios</strong></div>
          <div className="visual-card visual-card-b"><span>02</span><strong>Proyectos reales</strong></div>
          <div className="visual-label">Portfolio / 2026</div>
        </div>
      </section>

      <section id="demos" className="section shell">
        <div className="section-title-row">
          <div>
            <span className="section-index">01 / SOLUCIONES</span>
            <h2>Demos que pueden convertirse en tu próximo sitio.</h2>
          </div>
          <p className="section-note">Explora la idea, revisa cómo funciona y luego se adapta a la identidad y necesidades de cada negocio.</p>
        </div>

        <div className="showcase-grid solutions-grid">
          {solutions.map((project, index) => (
            <article className={`showcase-card solution-showcase card-${index + 1}`} key={project.slug}>
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
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
                <Link href={`/proyectos/${project.slug}`} aria-label={`Abrir ${project.title}`}>→</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="proyectos" className="section shell">
        <div className="section-title-row">
          <div><span className="section-index">02 / PROYECTOS</span><h2>Trabajo real y experiencia técnica.</h2></div>
          <a href="https://github.com/Sebasss04">Ver GitHub ↗</a>
        </div>

        <div className="work-list">
          {work.map((project, index) => (
            <Link className="work-row" href={`/proyectos/${project.slug}`} key={project.slug}>
              <span className="work-number">0{index + 1}</span>
              <div className="work-main"><h3>{project.title}</h3><p>{project.eyebrow}</p></div>
              <div className="work-stack">{project.stack.slice(0, 3).join(" · ")}</div>
              <span className="work-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="perfil" className="profile shell">
        <span className="section-index">03 / PERFIL</span>
        <div className="profile-grid">
          <h2>Diseño, desarrollo y criterio técnico en un mismo flujo.</h2>
          <div>
            <p>Construyo soluciones web y proyectos de sistemas con foco en simplicidad, rendimiento y utilidad real.</p>
            <div className="capabilities"><span>Frontend</span><span>Backend</span><span>Git</span><span>Networking</span><span>Infraestructura</span></div>
          </div>
        </div>
      </section>

      <section id="contacto" className="cta shell">
        <span>¿TIENES UN PROYECTO?</span>
        <h2>Podemos convertir una idea en una demo funcional.</h2>
        <div className="cta-actions">
          <a href="https://github.com/Sebasss04">Ver GitHub <span>↗</span></a>
          <a className="cta-secondary" href="#demos">Ver demos <span>→</span></a>
        </div>
      </section>

      <footer className="footer shell"><span>© 2026 Sebastian Saavedra</span><span>Santa Cruz · Bolivia</span><a href="https://github.com/Sebasss04">GitHub ↗</a></footer>
    </main>
  );
}
