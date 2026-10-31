import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronsUpDown,
  Clock,
  Code2,
  ExternalLink,
  Eye,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";
const avatar = `${import.meta.env.BASE_URL}me.image.png`;
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";
import GithubHeatmap from "../components/GithubHeatmap";
import { blogs, education, experience, profile, projects } from "../data";

function XIcon({ size = 14, className }) {
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

function SpotifyIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#1DB954" aria-label="Spotify">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.49 17.306c-.215.352-.676.463-1.028.248-2.812-1.718-6.353-2.106-10.525-1.153-.404.093-.807-.156-.9-.56-.093-.403.156-.807.56-.9 4.568-1.044 8.49-.606 11.645 1.335.352.215.463.676.248 1.03zm1.467-3.26c-.27.44-.847.579-1.287.31-3.22-1.979-8.128-2.552-11.936-1.396-.497.151-1.026-.134-1.177-.63-.151-.497.134-1.026.63-1.177 4.354-1.322 9.774-.683 13.46 1.584.44.27.579.847.31 1.289zm.126-3.41c-3.86-2.292-10.228-2.503-13.896-1.389-.593.18-1.22-.16-1.4-.753-.18-.593.16-1.22.753-1.4 4.218-1.281 11.253-1.034 15.698 1.603.533.316.707 1.01.39 1.543-.316.533-1.01.707-1.545.39z" />
    </svg>
  );
}

function VerifiedBadge() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#3b82f6" aria-label="Verified">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="blueprint-page-wrapper">
      <div className="blueprint-container">
        
        {/* ================= 1. HERO HEADER ================= */}
        <section className="blueprint-section hero-blueprint-section">
          <div className="corner-crosshair top-left">+</div>
          <div className="corner-crosshair top-right">+</div>
          <div className="corner-crosshair bottom-left">+</div>
          <div className="corner-crosshair bottom-right">+</div>

          <div className="blueprint-profile-header">
            <div className="blueprint-avatar-col">
              <img src={avatar} alt={profile.name} className="blueprint-avatar" />
            </div>

            <div className="blueprint-profile-body">
              <div className="blueprint-symbol">⚡</div>
              <div className="blueprint-name-row">
                <h1 className="blueprint-name">{profile.name}</h1>
                <VerifiedBadge />
              </div>
              <p className="blueprint-tagline">{profile.tagline || profile.role}</p>

              <div className="blueprint-live-status">
                <span className="live-pulse-dot" />
                <span>{profile.status || "Active · Currently building"}</span>
              </div>
            </div>

            <div className="blueprint-views-stat">
              <Eye size={13} style={{ display: "inline", marginRight: "4px" }} />
              <span>{profile.views || "25,112"}</span>
            </div>
          </div>
        </section>

        {/* ================= 2. ABOUT ================= */}
        <section className="blueprint-section">
          <div className="corner-crosshair bottom-left">+</div>
          <div className="corner-crosshair bottom-right">+</div>

          <h2 className="blueprint-section-title">About</h2>

          <div className="about-bullet-list">
            {(profile.about || [profile.intro]).map((point, idx) => (
              <div key={idx} className="about-bullet-row">
                <span className="about-bullet-dot">•</span>
                <p className="about-bullet-text">{point}</p>
              </div>
            ))}
          </div>

          {/* Spotify Pill Card */}
          {profile.spotify && (
            <div className="spotify-capsule-wrapper">
              <div className="spotify-capsule">
                <img
                  src={profile.spotify.albumArt}
                  alt={profile.spotify.track}
                  className="spotify-album-art"
                />
                <div className="spotify-info-col">
                  <div className="spotify-status-tag">
                    <span className="spotify-sound-dot" />
                    <span>{profile.spotify.status}</span>
                  </div>
                  <h4 className="spotify-track-name">{profile.spotify.track}</h4>
                  <p className="spotify-artist-name">{profile.spotify.artist}</p>
                </div>
                <div className="spotify-logo-col">
                  <SpotifyIcon size={20} />
                </div>
              </div>
              <div className="spotify-time-stamp">{profile.spotify.time}</div>
            </div>
          )}
        </section>

        {/* ================= 3. CONNECT ================= */}
        <section className="blueprint-section">
          <div className="corner-crosshair bottom-left">+</div>
          <div className="corner-crosshair bottom-right">+</div>

          <h2 className="blueprint-section-title">Connect</h2>

          <div className="connect-pills-row">
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="connect-pill"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
            )}

            {profile.twitter && (
              <a
                href={profile.twitter}
                target="_blank"
                rel="noreferrer"
                className="connect-pill"
              >
                <XIcon size={12} />
                <span>Twitter</span>
              </a>
            )}

            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="connect-pill"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
            )}

            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="connect-pill"
              >
                <Mail size={14} />
                <span>Mail</span>
              </a>
            )}

            <Link to="/blog" className="connect-pill">
              <BookOpen size={14} />
              <span>Blog</span>
            </Link>

            <Link to="/resume" className="connect-pill">
              <FileText size={14} />
              <span>Resume</span>
            </Link>
          </div>
        </section>

        {/* ================= 4. GITHUB ACTIVITY ================= */}
        <section className="blueprint-section">
          <div className="corner-crosshair bottom-left">+</div>
          <div className="corner-crosshair bottom-right">+</div>

          <div className="blueprint-section-header-row">
            <h2 className="blueprint-section-title">GitHub Activity</h2>
          </div>

          <GithubHeatmap />
        </section>

        {/* ================= 5. EXPERIENCE ================= */}
        <section className="blueprint-section">
          <div className="corner-crosshair bottom-left">+</div>
          <div className="corner-crosshair bottom-right">+</div>

          <h2 className="blueprint-section-title">Experience</h2>

          <div className="experience-cards-list">
            {experience.map((item, idx) => (
              <div key={idx} className="experience-entry-group">
                <div className="entry-bullet-title">
                  <span className="entry-bullet-mark">•</span>
                  <span className="entry-org-name">{item.organization}</span>
                </div>

                <div className="blueprint-item-subcard">
                  <div className="subcard-icon-col">
                    <Code2 size={16} className="subcard-code-icon" />
                  </div>

                  <div className="subcard-content-col">
                    <div className="subcard-top-row">
                      <h3 className="subcard-role-title">{item.role || item.title}</h3>
                      <ChevronsUpDown size={14} className="subcard-toggle-icon" />
                    </div>

                    <div className="subcard-meta-line">
                      <span>{item.type || "Full-Time"}</span>
                      <span className="meta-sep">|</span>
                      <span>{item.period}</span>
                      {item.location && (
                        <>
                          <span className="meta-sep">·</span>
                          <span>{item.location}</span>
                        </>
                      )}
                    </div>

                    {item.description && (
                      <p className="subcard-description">{item.description}</p>
                    )}

                    {item.stack && (
                      <div className="subcard-tech-badges">
                        {item.stack.map((tech) => (
                          <span key={tech} className="tech-badge-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 6. EDUCATION (FROM RESUME) ================= */}
        <section className="blueprint-section">
          <div className="corner-crosshair bottom-left">+</div>
          <div className="corner-crosshair bottom-right">+</div>

          <h2 className="blueprint-section-title">Education</h2>

          <div className="education-cards-list">
            {(education || []).map((edu, idx) => (
              <div key={idx} className="experience-entry-group">
                <div className="entry-bullet-title">
                  <span className="entry-bullet-mark">•</span>
                  <span className="entry-org-name">{edu.institution}</span>
                </div>

                <div className="blueprint-item-subcard">
                  <div className="subcard-icon-col">
                    <GraduationCap size={17} className="subcard-edu-icon" />
                  </div>

                  <div className="subcard-content-col">
                    <div className="subcard-top-row">
                      <h3 className="subcard-role-title">{edu.degree || edu.program}</h3>
                      <ChevronsUpDown size={14} className="subcard-toggle-icon" />
                    </div>

                    <div className="subcard-meta-line">
                      <span>{edu.location}</span>
                      <span className="meta-sep">|</span>
                      <span>{edu.period}</span>
                    </div>

                    {edu.description && (
                      <p className="subcard-description">{edu.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 7. FEATURED PROJECTS ================= */}
        <section className="blueprint-section">
          <div className="corner-crosshair bottom-left">+</div>
          <div className="corner-crosshair bottom-right">+</div>

          <div className="blueprint-section-header-row">
            <h2 className="blueprint-section-title">Featured Projects</h2>
            <Link className="blueprint-view-all-link" to="/work">
              View all ({projects.length}) <ArrowRight size={13} />
            </Link>
          </div>

          <div className="projects-grid">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* ================= 8. LATEST ARTICLES ================= */}
        <section className="blueprint-section">
          <div className="corner-crosshair bottom-left">+</div>
          <div className="corner-crosshair bottom-right">+</div>

          <div className="blueprint-section-header-row">
            <h2 className="blueprint-section-title">Latest Articles</h2>
            <Link className="blueprint-view-all-link" to="/blog">
              View all ({blogs.length}) <ArrowRight size={13} />
            </Link>
          </div>

          <div className="blogs-grid">
            {blogs.slice(0, 2).map((blog, index) => (
              <BlogCard key={blog.id || blog.title} blog={blog} index={index} />
            ))}
          </div>
        </section>

        {/* ================= 9. INSPIRING QUOTE ================= */}
        <section className="blueprint-section quote-blueprint-section">
          <div className="corner-crosshair bottom-left">+</div>
          <div className="corner-crosshair bottom-right">+</div>

          <div className="blueprint-quote-box">
            <div className="quote-giant-marks">“</div>
            <blockquote className="quote-italic-text">
              "{profile.quote?.text || "I was not born with a whole lot of natural talent... but I work hard and I never give up."}"
            </blockquote>
            <div className="quote-author-line">
              <span className="quote-dash">—</span>
              <span className="quote-author-name">{profile.quote?.author || "ROCK LEE"}</span>
              <span className="quote-dash">—</span>
            </div>
          </div>
        </section>

        {/* ================= 10. BLUEPRINT FOOTER ================= */}
        <footer className="blueprint-footer">
          <div className="footer-left-info">
            <p className="footer-copyright">© {new Date().getFullYear()} {profile.name}</p>
            <p className="footer-love">Built with Love, Code and Coffee</p>
          </div>

          <div className="footer-right-cat">
            <div className="pixel-sleeping-cat" title="zzz...">
              <div className="cat-bubbles">z Z Z</div>
              <svg width="42" height="24" viewBox="0 0 42 24" fill="none" className="cat-svg">
                <path
                  d="M4 14C4 10 7 7 12 7H28C32 7 35 10 35 14C35 18 32 20 28 20H12C7 20 4 18 4 14Z"
                  fill="#242528"
                  stroke="#55565a"
                  strokeWidth="1.5"
                />
                {/* Ears */}
                <polygon points="6,9 10,2 14,8" fill="#242528" stroke="#55565a" strokeWidth="1.2" />
                <polygon points="12,8 16,3 19,8" fill="#242528" stroke="#55565a" strokeWidth="1.2" />
                {/* Sleeping closed eye */}
                <path d="M9 13C10 15 12 15 13 13" stroke="#88898d" strokeWidth="1.4" strokeLinecap="round" />
                {/* Nose / mouth */}
                <circle cx="11" cy="16" r="1" fill="#88898d" />
                {/* Tail curled */}
                <path
                  d="M34 16C38 16 40 13 39 10C38 8 36 9 36 10"
                  stroke="#55565a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}
