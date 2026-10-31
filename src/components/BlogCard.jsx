import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCard({ blog, index }) {
  return (
    <article className="blog-card" style={{ "--delay": `${index * 70}ms` }}>
      <div className="blog-card-header">
        <div className="blog-card-meta">
          <span className="blog-card-date">
            <Calendar size={12} style={{ display: "inline", marginRight: "4px", verticalAlign: "-1px" }} />
            {blog.date}
          </span>
          <span className="meta-dot">·</span>
          <span className="blog-card-readtime">
            <Clock size={12} style={{ display: "inline", marginRight: "4px", verticalAlign: "-1px" }} />
            {blog.readTime}
          </span>
        </div>
      </div>

      <h3 className="blog-card-title">
        <Link
          to={`/blog/${blog.id}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {blog.title}
        </Link>
      </h3>

      <p className="blog-card-desc">{blog.description}</p>

      <div className="blog-card-footer">
        <div className="tag-list">
          {blog.tags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
        <Link
          className="blog-read-link"
          to={`/blog/${blog.id}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Read article <ArrowUpRight size={14} />
        </Link>
      </div>
    </article>
  );
}
