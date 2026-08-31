import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#inicio"><span>SS</span><strong>Sebastian Saavedra</strong></a>
        <nav>
          <a href="#soluciones">Soluciones</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a className="nav-cta" href="#contacto">Hablemos</a>
        </nav>
      </header>

      <section id="inicio" className="hero shell">
        <div className="hero-copy">
          <div className="availability"><i /> Disponible para nuevos proyectos</div>
          <h1>Construyo experiencias digitales que <em>funcionan de verdad.</em></h1>
          <p>Desarrollo soluciones web, sistemas y proyectos de infraestructura con foco en simplicidad, rendimiento y una experiencia clara para el usuario.</p>
          <div className="hero-actions">
            <a className="primary" href="#soluciones">Explorar soluciones <span>→</span></a>
            <a className="secondary" href="https://github.com/Sebasss04">GitHub <span>↗</span></a>
          </div>
        </div>
        <aside className="hero-panel">
          <div className="terminal-bar"><span/><span/><span/><b>portfolio / overview</b></div>
          <div className="metric"><span>Enfoque</span><strong>Web · Sistemas · Infraestructura</strong></div>
          <div className="metric-grid">
            <div><span>Productos</span><strong>02</strong><small>vendibles</small></div>
            <div><span>Proyectos</span><strong>04+</strong><small>documentados</small></div>
          </div>
          <div className="signal"><i/><span>Construyendo una base reutilizable para nuevos clientes.</span></div>
        </aside>
      </section>

      <section id="soluciones" className="section shell">
        <div className="section-head"><div><span className="section-index">01 / SOLUCIONES</span><h2>Productos listos para adaptar.</h2></div><p>Ideas convertidas en demos funcionales que un cliente puede probar antes de invertir.</p></div>
        <div className="solution-grid">
          <article className="solution-card featured"><div className="card-number">01</div><div><span className="tag">PRÓXIMA DEMO</span><h3>Booking para negocios</h3><p>Agenda, disponibilidad, servicios, profesionales y confirmaciones desde una experiencia simple.</p></div><div className="solution-footer"><span>Barberías · Estilistas · Spa</span><a href="#proyectos">Ver avance →</a></div></article>
          <article className="solution-card"><div className="card-number">02</div><div><span className="tag">REUTILIZABLE</span><h3>Catálogo comercial</h3><p>Productos, categorías y pedidos rápidos por WhatsApp para negocios que todavía no necesitan e-commerce completo.</p></div><div className="solution-footer"><span>Retail · Emprendimientos</span><a href="#proyectos">Ver proyecto →</a></div></article>
        </div>
      </section>

      <section id="proyectos" className="section shell">
        <div className="section-head"><div><span className="section-index">02 / PROYECTOS</span><h2>Trabajo que demuestra capacidad.</h2></div><p>No solo código: cada proyecto documenta el problema, decisiones, arquitectura y resultado.</p></div>
        <div className="project-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>

      <section id="sobre-mi" className="section shell about">
        <div><span className="section-index">03 / PERFIL</span><h2>Desarrollo con criterio técnico y comercial.</h2></div>
        <div className="about-copy"><p>Me interesa construir productos que puedan mostrarse, reutilizarse y convertirse en soluciones reales para clientes. Este portfolio funciona como laboratorio, catálogo y registro de evolución.</p><div className="capabilities"><span>Frontend</span><span>Backend</span><span>Networking</span><span>Infraestructura</span><span>Git / GitHub</span><span>Self-hosting</span></div></div>
      </section>

      <section id="contacto" className="cta shell"><span>¿TIENES UNA IDEA?</span><h2>Podemos convertirla en una demo funcional.</h2><a href="mailto:contacto@example.com">Empezar conversación <span>↗</span></a></section>
      <footer className="footer shell"><span>© 2026 Sebastian Saavedra</span><span>Santa Cruz · Bolivia</span><a href="https://github.com/Sebasss04">GitHub ↗</a></footer>
    </main>
  );
}
