
import { Download, FileText } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { profile, projects, skills } from "../data";

export default function ResumePage() {
  return (
    <main className="container main-content page-content">
      <SectionHeading
        eyebrow="DOCUMENT"
        title="Resume"
        description="View or download my professional resume."
      />

      <div className="resume-card">
        <div className="resume-preview">
          <div className="resume-paper">
            <p className="resume-small">DEVELOPER PROFILE</p>
            <h3>{profile.name}</h3>
            <p className="resume-role">{profile.role}</p>

            <div className="resume-divider" />

            <h4>SUMMARY</h4>
            <p>{profile.intro}</p>

            <h4>SELECTED PROJECTS</h4>
            {projects.slice(0, 3).map((project) => (
              <div className="resume-project" key={project.name}>
                <strong>{project.name}</strong>
                <span>{project.description}</span>
              </div>
            ))}

            <h4>TECHNOLOGIES</h4>
            <p>{skills.join(" · ")}</p>

            <div className="resume-watermark">
              {profile.name.toUpperCase()}
            </div>
          </div>
        </div>

        <div className="resume-info">
          <div>
            <FileText size={23} />
            <h3>Resume PDF</h3>
            <p>
              Add your latest resume as <code>public/resume.pdf</code>.
              The button below downloads that file.
            </p>
          </div>

          <a
            className="button button-primary resume-download"
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download
          >
            <Download size={15} /> Download resume
          </a>
        </div>
      </div>
    </main>
  );
}
