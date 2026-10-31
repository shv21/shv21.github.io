
import { ArrowUpRight, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data";

export default function BlogPage() {
  return (
    <main className="container main-content page-content">
      <SectionHeading
        eyebrow="NOTES & IDEAS"
        title="Blog & Articles"
        description="Thoughts, tutorials, architectural deep-dives, and notes from my software development journey."
      />

      <div className="blogs-grid" style={{ marginBottom: "32px" }}>
        {blogs.map((blog, index) => (
          <BlogCard key={blog.id || blog.title} blog={blog} index={index} />
        ))}
      </div>

      <div className="empty-state" style={{ marginBottom: "28px" }}>
        <span className="empty-icon">
          <Terminal size={18} />
        </span>
        <div>
          <h3>More writing in progress</h3>
          <p>
            Additional in-depth breakdowns on background queues, Web Speech APIs, and real-time computer vision are being drafted.
          </p>
        </div>
      </div>

      <div className="work-back-link">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ArrowUpRight size={14} /> Back to home
        </Link>
      </div>
    </main>
  );
}

