import { ArrowUpRight, Github } from "lucide-react";

function ProjectLink({ href, children, label }) {
  if (!href) {
    return (
      <span className="project-action-link disabled-link" title="Source repository or demo private/internal">
        {children}
        {label}
      </span>
    );
  }
  return (
    <a
      className="project-action-link"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      {label}
    </a>
  );
}

export default function ProjectCard({ project, index }) {
  const ui = project.ui || {
    url: `${project.name.toLowerCase().replace(/[^a-z0-9]/g, "")}.vercel.app`,
    theme: "radial-gradient(ellipse at 80% 20%, rgba(99, 102, 241, 0.4), transparent 60%), linear-gradient(135deg, #13122c 0%, #0d111a 100%)",
    bgType: "dark",
    badge: project.type,
    heading: project.name,
    subheading: project.description.slice(0, 75) + "...",
    stats: [project.status, project.type],
  };

  return (
    <article
      className="project-preview-card"
      style={{ "--card-delay": `${index * 60}ms` }}
    >
      {/* 1. Artistic UI Mockup Banner with Floating Browser Window */}
      <div
        className="project-mockup-banner"
        style={{ background: ui.theme }}
      >
        {/* Ambient decorative glowing backdrop element */}
        <div className="banner-ambient-glow" />

        {/* Floating Browser Window Mockup */}
        <div className={`project-browser-frame ${ui.bgType}`}>
          {/* Top Browser Header Chrome */}
          <div className="browser-chrome">
            <div className="browser-traffic-lights" aria-hidden="true">
              <span className="traffic-dot dot-close" />
              <span className="traffic-dot dot-min" />
              <span className="traffic-dot dot-max" />
            </div>

            <div className="browser-address-bar">
              <span className="address-lock-icon">🔒</span>
              <span className="address-url-text">{ui.url}</span>
            </div>

            <div className="browser-window-actions" aria-hidden="true">
              <span className="browser-action-icon" />
            </div>
          </div>

          {/* Webpage UI Viewport */}
          <div className="browser-viewport">
            <div className="mockup-navbar">
              <div className="mockup-brand">
                <span className="mockup-brand-logo" />
                <span className="mockup-brand-text">{project.name}</span>
              </div>
              <div className="mockup-nav-links">
                <span>Features</span>
                <span>Docs</span>
                <span>About</span>
              </div>
            </div>

            <div className="mockup-hero-content">
              {ui.badge && (
                <div className="mockup-badge-pill">
                  <span className="badge-sparkle">✨</span>
                  <span>{ui.badge}</span>
                </div>
              )}

              <h4 className="mockup-hero-title">{ui.heading}</h4>
              <p className="mockup-hero-desc">{ui.subheading}</p>

              {ui.stats && (
                <div className="mockup-stats-chips">
                  {ui.stats.map((stat, i) => (
                    <span key={i} className="mockup-stat-chip">
                      {stat}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Project Details Footer */}
      <div className="project-card-details">
        {/* Title & Date Row */}
        <div className="project-title-row">
          <h3 className="project-title-name">{project.name}</h3>
          <span className="project-date-pill">{project.date || "2024"}</span>
        </div>

        {/* Multi-line Description */}
        <p className="project-body-description">{project.description}</p>

        {/* Tech Stack Pills */}
        <div className="project-stack-pills">
          {project.stack.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links (Source & Live Demo) */}
        <div className="project-links-row">
          <ProjectLink href={project.github}>
            <Github size={13} />
            <span>Code</span>
          </ProjectLink>

          <ProjectLink href={project.demo}>
            <ArrowUpRight size={14} />
            <span>Live demo</span>
          </ProjectLink>
        </div>
      </div>
    </article>
  );
}