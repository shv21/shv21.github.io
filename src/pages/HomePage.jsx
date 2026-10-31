
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const avatar = `${import.meta.env.BASE_URL}me.image.png`;
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";
import ResumeViewer from "../components/ResumeViewer";
import SectionHeading from "../components/SectionHeading";
import { blogs, profile, projects } from "../data";

function XIcon({ size = 16, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

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

 

  <div className="profile-socials">
    {[
      { label: "GitHub", href: profile.github, icon: Github },
      { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
      { label: "X", href: profile.twitter, icon: XIcon },
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
          title="Featured Projects"
          description="Curated applications spanning full-stack development, distributed message queues, generative AI, and computer vision."
        />

        <div className="projects-grid">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        <Link className="text-link" to="/work">
          View all work ({projects.length}) <ArrowRight size={14} />
        </Link>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="WRITING & NOTES"
          title="Latest Articles"
          description="Technical writeups, architectural deep-dives, and notes from my engineering projects."
        />

        <div className="blogs-grid">
          {blogs.slice(0, 3).map((blog, index) => (
            <BlogCard key={blog.id || blog.title} blog={blog} index={index} />
          ))}
        </div>

        <Link className="text-link" to="/blog">
          View all blogs ({blogs.length}) <ArrowRight size={14} />
        </Link>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="CURRICULUM VITAE"
          title="Resume & Credentials"
          description="View, zoom, or download my official resume covering full-stack web development, projects, and mentoring experience."
        />

        <ResumeViewer />

        <Link className="text-link" to="/resume">
          Open dedicated resume page <ArrowRight size={14} />
        </Link>
      </section>
    </main>
  );
}
