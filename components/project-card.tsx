import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="card-topline">
        <span className="eyebrow">{project.eyebrow}</span>
        <span className="status">{project.status}</span>
      </div>
      <div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
      </div>
      <div className="stack-list">
        {project.stack.map((item) => <span key={item}>{item}</span>)}
      </div>
      <div className="card-actions">
        <a href={`/proyectos/${project.slug}`}>Ver proyecto <span>↗</span></a>
        {project.demoUrl && <a className="muted-link" href={project.demoUrl}>Demo</a>}
      </div>
    </article>
  );
}
