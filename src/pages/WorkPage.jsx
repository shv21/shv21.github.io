
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { experience, projects, skills } from "../data";

const techIcons = {
  JavaScript: "devicon-javascript-plain colored",
  React: "devicon-react-original colored",
  HTML: "devicon-html5-plain colored",
  CSS: "devicon-css3-plain colored",
  "Tailwind CSS": "devicon-tailwindcss-original colored",
  "Node.js": "devicon-nodejs-plain colored",
  "Express.js": "devicon-express-original",
  MongoDB: "devicon-mongodb-plain colored",
  "Git & GitHub": "devicon-github-original",
};

export default function WorkPage() {
  return (
    <main className="container main-content page-content">
      <section className="section-heading">
        <p className="eyebrow">BACKGROUND & PROJECTS</p>
        <h1 className="page-title">Work Experience</h1>
        <p className="section-description">
          My learning journey, experience, and projects across web development.
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

            <div className="work-tools">
              <h3>Technologies & Tools</h3>
              <div className="tech-logo-row">
                {skills.slice(0, 6).map((skill) => (
                  <span className="tech-logo" key={skill} title={skill}>
                    {techIcons[skill] ? (
                      <i className={techIcons[skill]} aria-hidden="true" />
                    ) : (
                      <span className="tech-fallback">{skill.slice(0, 2)}</span>
                    )}
                    <span className="tech-logo-name">{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            <h3 className="work-subheading">What I've done</h3>
            <p className="work-description">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="BUILT WHILE LEARNING"
          title="Projects"
          description="Projects where I practise concepts and build working interfaces."
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
