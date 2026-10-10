import { ArrowUpRight, Github } from "lucide-react";

function ProjectLink({ href, children, label }) {
  if (!href) return <span className="project-link disabled-link" title="Add the URL in src/data.js">{children}{label}</span>;
  return <a className="project-link" href={href} target="_blank" rel="noreferrer">{children}{label}</a>;
}

export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card" style={{ "--delay": `${index * 70}ms` }}>
      <div className="project-card-top">
        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="project-type">{project.type}</span>
      </div>
      <div className="project-title-row">
        <h3>{project.name}</h3>
        <span className="project-status">{project.status}</span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="tag-list">
        {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
      </div>
      <div className="project-card-bottom">
        <ProjectLink href={project.github}><Github size={14} /> Source</ProjectLink>
        <ProjectLink href={project.demo}><ArrowUpRight size={15} /> Live demo</ProjectLink>
      </div>
    </article>
  );
}