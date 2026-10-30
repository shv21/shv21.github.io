
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { experience, projects, skills } from "../data";

export default function WorkPage() {
  return (
    <main className="container main-content page-content">
      <section className="section-heading">
        <p className="eyebrow">BACKGROUND & SKILLS</p>
        <h1 className="page-title">Work & Experience</h1>
        <p className="section-description">
          My engineering journey, peer mentoring, and hands-on technical competencies.
        </p>
      </section>

      <section className="work-list">
        {experience.map((item, index) => (
          <article className="work-item" key={`${item.title}-${index}`}>
            <div className="work-item-heading">
              <div>
                <h2>{item.organization}</h2>
                <p className="work-role">{item.title}</p>
              </div>
              <span className="work-period">{item.period}</span>
            </div>

            <h3 className="work-subheading">Key Contributions</h3>
            <p className="work-description">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="skills-panel" style={{ marginTop: "28px", marginBottom: "40px" }}>
        <div className="skills-heading">
          <span className="eyebrow" style={{ color: "#d8f36a" }}>CORE TECHNOLOGIES & TOOLING</span>
        </div>
        <div className="tag-list skill-tags">
          {skills.map((skill) => (
            <span className="tag" key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="ALL REPOSITORIES & BUILDS"
          title="All Projects"
          description="Curated applications spanning full-stack development, distributed message queues, generative AI, and computer vision."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </section>

      <div className="work-back-link">
        <a href="#/" onClick={(event) => {
          event.preventDefault();
          window.location.hash = "/";
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}>
          <ArrowUpRight size={14} /> Back to home
        </a>
      </div>
    </main>
  );
}
