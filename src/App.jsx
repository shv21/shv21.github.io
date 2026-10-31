
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ResumePage from "./pages/ResumePage";

function SiteFooter() {
  const location = useLocation();
  if (location.pathname === "/") return null;

  return (
    <footer className="site-footer">
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Shivraj Jadhav</span>
        <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Navbar />

        <div className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <SiteFooter />
      </div>
    </HashRouter>
  );
}
