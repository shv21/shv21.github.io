import { ArrowUpRight, Code2, Sparkles } from "lucide-react";
import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { experience, projects, skills } from "../data";

const categories = ["All", "Full-Stack & Web", "AI & Computer Vision", "Distributed Systems"];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Full-Stack & Web") {
      return (
        project.type.includes("Full-Stack") ||
        project.type.includes("Web") ||
        project.type.includes("Commerce") ||
        project.type.includes("Storage")
      );
    }
    if (selectedCategory === "AI & Computer Vision") {
      return (
        project.type.includes("AI") ||
        project.type.includes("Vision") ||
        project.type.includes("AR")
      );
    }
    if (selectedCategory === "Distributed Systems") {
      return (
        project.type.includes("Distributed") ||
        project.type.includes("Backend") ||
        project.type.includes("Pipeline")
      );
    }
    return true;
  });

  return (
    <main className="container main-content page-content">
      {/* ================= 1. PAGE HEADER ================= */}
      <section className="section-heading">
        <p className="eyebrow">PORTFOLIO & APPLICATIONS</p>
        <h1 className="page-title">Projects & Systems</h1>
        <p className="section-description">
          Curated web applications, distributed queue engines, AI integrations, and computer vision systems with live interactive UI previews.
        </p>
      </section>

      {/* ================= 2. CATEGORY FILTER PILLS ================= */}
      <div className="work-filter-pills" style={{ display: "flex", gap: "8px", flexWrap: "wrap", margin: "20px 0 28px" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "6px 14px",
              borderRadius: "20px",
              border: selectedCategory === cat ? "1px solid #d8f36a" : "1px solid #27282d",
              background: selectedCategory === cat ? "rgba(216, 243, 106, 0.1)" : "#131417",
              color: selectedCategory === cat ? "#d8f36a" : "#a1a1aa",
              fontSize: "11.5px",
              fontFamily: "'DM Mono', monospace",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {cat} {cat === "All" ? `(${projects.length})` : ""}
          </button>
        ))}
      </div>

      {/* ================= 3. ALL PROJECTS GRID WITH UI PREVIEWS ================= */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* ================= 4. CORE TECH STACK ================= */}
      <section className="skills-panel" style={{ marginTop: "40px", marginBottom: "40px" }}>
        <div className="skills-heading">
          <span className="eyebrow" style={{ color: "#d8f36a" }}>
            CORE TECHNOLOGIES & TOOLING
          </span>
        </div>
        <div className="tag-list skill-tags">
          {skills.map((skill) => (
            <span className="tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ================= 5. EXPERIENCE CHRONOLOGY ================= */}
      <section className="section">
        <SectionHeading
          eyebrow="CAREER & MENTORSHIP"
          title="Professional Experience"
          description="Software instruction, mentoring, and technical facilitation."
        />

        <div className="work-list">
          {experience.map((item, index) => (
            <article className="work-item" key={`${item.role || item.title}-${index}`}>
              <div className="work-item-heading">
                <div>
                  <h2>{item.organization}</h2>
                  <p className="work-role">{item.role || item.title}</p>
                </div>
                <span className="work-period">{item.period}</span>
              </div>

              <h3 className="work-subheading">Key Contributions</h3>
              <p className="work-description">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="work-back-link">
        <a
          href="#/"
          onClick={(event) => {
            event.preventDefault();
            window.location.hash = "/";
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <ArrowUpRight size={14} /> Back to home
        </a>
      </div>
    </main>
  );
}
