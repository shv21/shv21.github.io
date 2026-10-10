
import { Terminal } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export default function BlogPage() {
  return (
    <main className="container main-content page-content">
      <SectionHeading
        eyebrow="NOTES & IDEAS"
        title="Blog"
        description="Thoughts, tutorials, and notes from my software development journey."
      />

      <div className="empty-state">
        <span className="empty-icon">
          <Terminal size={18} />
        </span>
        <div>
          <h3>Writing in progress</h3>
          <p>
            No articles published yet. This space is ready for project
            breakdowns, debugging notes, and concepts I learn along the way.
          </p>
        </div>
      </div>
    </main>
  );
}
