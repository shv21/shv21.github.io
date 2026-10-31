import {
  ArrowLeft,
  ArrowUp,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock,
  Code2,
  Github,
  Linkedin,
  Share2,
  Sparkles,
} from "lucide-react";
import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { blogs, profile } from "../data";
const avatar = `${import.meta.env.BASE_URL}me.image.png`;

function XIcon({ size = 15, className }) {
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

export default function BlogPostPage() {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === id);

  // Scroll to top on article load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!blog) {
    return (
      <main className="container main-content page-content">
        <div className="article-not-found">
          <h2>Article not found</h2>
          <p>The requested article could not be located or has been moved.</p>
          <Link className="button button-primary" to="/blog">
            <ArrowLeft size={14} /> Back to all articles
          </Link>
        </div>
      </main>
    );
  }

  // Find other articles for "Keep reading"
  const otherBlogs = blogs.filter((item) => item.id !== id).slice(0, 2);

  return (
    <main className="container main-content page-content article-page">
      {/* Back button */}
      <nav className="article-top-nav">
        <Link className="article-back-link" to="/blog">
          <ArrowLeft size={14} /> Back to all articles
        </Link>
      </nav>

      {/* Article Header */}
      <header className="article-header">
        <div className="article-meta-row">
          <span className="article-date">
            <Calendar size={13} style={{ display: "inline", marginRight: "5px", verticalAlign: "-1px" }} />
            {blog.date}
          </span>
          <span className="meta-dot">·</span>
          <span className="article-readtime">
            <Clock size={13} style={{ display: "inline", marginRight: "5px", verticalAlign: "-1px" }} />
            {blog.readTime}
          </span>
        </div>

        <h1 className="article-main-title">{blog.title}</h1>

        <div className="tag-list article-tags">
          {blog.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="article-author-card">
          <img src={avatar} alt={profile.name} className="article-author-avatar" />
          <div className="article-author-info">
            <span className="article-author-name">{profile.name}</span>
            <span className="article-author-role">{profile.role}</span>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <article className="article-body">
        {blog.intro && <p className="article-lead-text">{blog.intro}</p>}

        {blog.sections &&
          blog.sections.map((section, idx) => (
            <section key={idx} className="article-section">
              <h2 className="article-section-title">{section.heading}</h2>

              {section.paragraphs &&
                section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="article-paragraph">
                    {p}
                  </p>
                ))}

              {section.note && (
                <div className="article-callout">
                  <Sparkles size={16} className="callout-icon" />
                  <p>{section.note}</p>
                </div>
              )}

              {section.code && (
                <div className="article-code-wrapper">
                  <div className="article-code-header">
                    <span className="code-lang-label">
                      <Code2 size={13} style={{ display: "inline", marginRight: "5px", verticalAlign: "-1px" }} />
                      {section.language || "code"}
                    </span>
                  </div>
                  <pre className="article-code-block">
                    <code>{section.code}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}

        {blog.takeaways && (
          <div className="article-takeaways-card">
            <h3 className="takeaways-title">
              <CheckCircle2 size={16} className="text-accent" /> Key Architecture Takeaways
            </h3>
            <ul className="takeaways-list">
              {blog.takeaways.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </article>

      {/* Author Footer & Socials */}
      <footer className="article-footer-box">
        <div className="article-footer-left">
          <img src={avatar} alt={profile.name} className="article-author-avatar" />
          <div>
            <h4>Written by {profile.name}</h4>
            <p>{profile.intro}</p>
          </div>
        </div>

        <div className="article-footer-actions">
          {profile.twitter && (
            <a
              href={profile.twitter}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
              title="Follow on X"
            >
              <XIcon size={14} /> Follow on X
            </a>
          )}
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
              title="GitHub Profile"
            >
              <Github size={14} /> GitHub
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
              title="LinkedIn Profile"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          )}
        </div>
      </footer>

      {/* Read Next Articles */}
      {otherBlogs.length > 0 && (
        <section className="article-next-section">
          <h3 className="article-next-heading">Continue Reading</h3>
          <div className="article-next-grid">
            {otherBlogs.map((other) => (
              <Link
                key={other.id}
                to={`/blog/${other.id}`}
                className="article-next-card"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="article-next-meta">
                  <span>{other.date}</span>
                  <span className="meta-dot">·</span>
                  <span>{other.readTime}</span>
                </div>
                <h4>{other.title}</h4>
                <span className="article-next-cta">
                  Read article <ArrowUpRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Bottom Navigation */}
      <div className="article-bottom-links">
        <Link className="text-link" to="/blog">
          <ArrowLeft size={14} /> All articles
        </Link>
        <button
          type="button"
          className="text-link"
          style={{ background: "none", border: 0, cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top <ArrowUp size={14} />
        </button>
      </div>
    </main>
  );
}
