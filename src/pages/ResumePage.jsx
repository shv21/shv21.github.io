
import SectionHeading from "../components/SectionHeading";
import ResumeViewer from "../components/ResumeViewer";

export default function ResumePage() {
  return (
    <main className="container main-content page-content">
      <SectionHeading
        eyebrow="DOCUMENT"
        title="Resume"
        description="View, zoom, or download my official resume."
      />

      <ResumeViewer />
    </main>
  );
}
