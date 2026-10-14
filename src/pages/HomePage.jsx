
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const avatar = `${import.meta.env.BASE_URL}me.image.jpg`;
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { profile, projects } from "../data";

function SocialLink({ href, icon: Icon, label }) {
  if (!href) return null;

  return (
    <a
      className="social-link"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <Icon size={15} />
      {label}
    </a>
  );
}

export default function HomePage() {
  return (
    <main className="container main-content">
     
<section id="top" className="hero profile-hero">
  <div className="profile-identity">
    <img
      className="profile-avatar"
      src={avatar}
      alt={`${profile.name} avatar`}
    />

    <div className="profile-heading">
      <h1>{profile.name}</h1>

      <div className="profile-meta">
        <span>{profile.role}</span>
        <span className="meta-dot">·</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
    </div>
  </div>

  <p className="profile-bio">{profile.bio || profile.intro}</p>

  <div className="currently-playing">
    <span className="music-icon">♫</span>
    <span>Currently listening</span>
    <span className="playing-separator">—</span>
    <span className="playing-track">
      Add your favourite song · Artist name
    </span>
  </div>

  <div className="profile-socials">
    {[
      { label: "GitHub", href: profile.github, icon: Github },
      { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
      {
        label: "Email",
        href: profile.email ? `mailto:${profile.email}` : "",
        icon: Mail,
      },
    ].filter((item) => item.href).map(({ label, href, icon: Icon }) => (
      <a
        key={label}
        className="profile-social-link"
        href={href}
        aria-label={label}
        title={label}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noreferrer"
      >
        <Icon size={16} />
      </a>
    ))}
  </div>
</section>


      <section className="section">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Projects"
          description="A few projects I've worked on while learning by building."
        />

        <div className="projects-grid">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        <Link className="text-link" to="/work">
          View all work <ArrowRight size={14} />
        </Link>
      </section>
    </main>
  );
}
