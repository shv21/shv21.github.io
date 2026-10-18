import {
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Maximize2,
  RefreshCw,
  RotateCcw,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

let pdfjsPromise = null;
function loadPdfJs() {
  if (pdfjsPromise) return pdfjsPromise;
  if (window.pdfjsLib) {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}pdf.worker.min.js`;
    pdfjsPromise = Promise.resolve(window.pdfjsLib);
    return pdfjsPromise;
  }
  pdfjsPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `${import.meta.env.BASE_URL}pdf.min.js`;
    script.onload = () => {
      if (window.pdfjsLib) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}pdf.worker.min.js`;
        resolve(window.pdfjsLib);
      } else {
        reject(new Error("PDF.js library not available"));
      }
    };
    script.onerror = () => reject(new Error("Failed to load PDF engine"));
    document.head.appendChild(script);
  });
  return pdfjsPromise;
}

export default function ResumeViewer() {
  const resumeUrl = `${import.meta.env.BASE_URL}shivraj-jadhav.pdf`;
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const renderTaskRef = useRef(null);

  const [pdfDoc, setPdfDoc] = useState(null);
  const [scale, setScale] = useState(1.0);
  const [defaultScale, setDefaultScale] = useState(1.0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [numPages, setNumPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageOriginalSize, setPageOriginalSize] = useState({ width: 612, height: 792 });

  // Load PDF Document
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setError(null);

    loadPdfJs()
      .then((pdfjs) => {
        return pdfjs.getDocument(resumeUrl).promise;
      })
      .then((doc) => {
        if (isCancelled) return;
        setPdfDoc(doc);
        setNumPages(doc.numPages || 1);
        setCurrentPage(1);
        return doc.getPage(1);
      })
      .then((page) => {
        if (!page || isCancelled) return;
        const unscaledViewport = page.getViewport({ scale: 1.0 });
        setPageOriginalSize({
          width: unscaledViewport.width,
          height: unscaledViewport.height,
        });

        // Determine sensible default scale based on container width
        const containerWidth = containerRef.current?.clientWidth || 700;
        const availableWidth = Math.max(280, containerWidth - 48);
        const calculatedScale = Math.min(1.25, Math.max(0.6, availableWidth / unscaledViewport.width));
        setDefaultScale(calculatedScale);
        setScale(calculatedScale);
        setLoading(false);
      })
      .catch((err) => {
        if (isCancelled) return;
        console.error("Error loading PDF:", err);
        setError("Unable to render PDF preview directly. You can still download or view the PDF below.");
        setLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [resumeUrl]);

  // Render Page onto Canvas whenever scale, pdfDoc, or currentPage changes
  useEffect(() => {
    if (!pdfDoc || loading) return;

    let isCancelled = false;

    // Cancel any previous in-flight render task
    if (renderTaskRef.current) {
      try {
        renderTaskRef.current.cancel();
      } catch (e) {
        // ignore cancellation errors
      }
      renderTaskRef.current = null;
    }

    pdfDoc.getPage(currentPage).then((page) => {
      if (isCancelled || !canvasRef.current) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const dpr = window.devicePixelRatio || 1;
      const viewport = page.getViewport({ scale });

      // Crisp rendering for high-DPI/Retina displays
      canvas.width = Math.floor(viewport.width * dpr);
      canvas.height = Math.floor(viewport.height * dpr);
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;

      const renderContext = {
        canvasContext: ctx,
        viewport: viewport,
        transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null,
      };

      const renderTask = page.render(renderContext);
      renderTaskRef.current = renderTask;

      renderTask.promise.catch((err) => {
        // Ignore "RenderingCancelledException" when user quickly zooms
        if (err?.name !== "RenderingCancelledException") {
          console.warn("Render task error:", err);
        }
      });
    });

    return () => {
      isCancelled = true;
      if (renderTaskRef.current) {
        try {
          renderTaskRef.current.cancel();
        } catch (e) {
          // ignore
        }
        renderTaskRef.current = null;
      }
    };
  }, [pdfDoc, scale, loading, currentPage]);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(2.5, Math.round((prev + 0.15) * 100) / 100));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(0.5, Math.round((prev - 0.15) * 100) / 100));
  };

  const handleResetZoom = () => {
    setScale(defaultScale);
  };

  const handleFitWidth = () => {
    if (!containerRef.current || !pageOriginalSize.width) return;
    const containerWidth = containerRef.current.clientWidth;
    const availableWidth = Math.max(280, containerWidth - 48);
    const fitScale = Math.min(2.2, Math.max(0.5, availableWidth / pageOriginalSize.width));
    setScale(Math.round(fitScale * 100) / 100);
  };

  const zoomPercent = Math.round(scale * 100);

  return (
    <div className="resume-viewer-wrapper" ref={containerRef}>
      {/* Top Controls Toolbar */}
      <div className="viewer-toolbar">
        <div className="toolbar-fileinfo">
          <FileText size={16} className="toolbar-icon" />
          <span className="toolbar-filename">shivraj-jadhav.pdf</span>
          <span className="toolbar-badge">
            {numPages} {numPages === 1 ? "page" : "pages"}
          </span>
        </div>

        <div className="toolbar-controls">
          {numPages > 1 && (
            <>
              <button
                type="button"
                className="toolbar-btn"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage <= 1 || loading}
                title="Previous page"
                aria-label="Previous page"
              >
                <ChevronLeft size={14} />
              </button>
              <span className="toolbar-page-label">
                {currentPage} / {numPages}
              </span>
              <button
                type="button"
                className="toolbar-btn"
                onClick={() => setCurrentPage((p) => Math.min(numPages, p + 1))}
                disabled={currentPage >= numPages || loading}
                title="Next page"
                aria-label="Next page"
              >
                <ChevronRight size={14} />
              </button>
              <span className="toolbar-separator" />
            </>
          )}

          <button
            type="button"
            className="toolbar-btn"
            onClick={handleZoomOut}
            disabled={scale <= 0.5 || loading}
            title="Zoom out"
            aria-label="Zoom out"
          >
            <ZoomOut size={15} />
          </button>

          <button
            type="button"
            className="toolbar-zoom-label"
            onClick={handleResetZoom}
            title="Click to reset zoom"
            aria-label={`Current zoom ${zoomPercent}%, click to reset`}
          >
            {zoomPercent}%
          </button>

          <button
            type="button"
            className="toolbar-btn"
            onClick={handleZoomIn}
            disabled={scale >= 2.5 || loading}
            title="Zoom in"
            aria-label="Zoom in"
          >
            <ZoomIn size={15} />
          </button>

          <span className="toolbar-separator" />

          <button
            type="button"
            className="toolbar-btn"
            onClick={handleFitWidth}
            disabled={loading}
            title="Fit to width"
            aria-label="Fit to width"
          >
            <Maximize2 size={14} />
          </button>

          <button
            type="button"
            className="toolbar-btn"
            onClick={handleResetZoom}
            disabled={loading}
            title="Reset to default view"
            aria-label="Reset zoom"
          >
            <RotateCcw size={14} />
          </button>
        </div>

        <div className="toolbar-actions">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="toolbar-action-link"
            title="Open PDF in new tab"
          >
            <ExternalLink size={14} />
            <span className="hide-mobile">Open</span>
          </a>

          <a
            href={resumeUrl}
            download="Shivraj_Jadhav_Resume.pdf"
            className="toolbar-download-btn"
            title="Download resume PDF"
          >
            <Download size={14} />
            <span>Download</span>
          </a>
        </div>
      </div>

      {/* Main Preview Container */}
      <div className="viewer-stage">
        {loading && (
          <div className="viewer-status-box">
            <RefreshCw size={26} className="animate-spin text-accent" />
            <p>Rendering resume preview...</p>
          </div>
        )}

        {error && (
          <div className="viewer-error-box">
            <AlertCircle size={30} className="text-amber" />
            <p>{error}</p>
            <div className="viewer-error-actions">
              <a
                href={resumeUrl}
                download="Shivraj_Jadhav_Resume.pdf"
                className="button button-primary"
              >
                <Download size={14} /> Download PDF
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                <ExternalLink size={14} /> Open in browser
              </a>
            </div>
          </div>
        )}

        <div
          className="canvas-container"
          style={{ display: loading || error ? "none" : "flex" }}
        >
          <canvas ref={canvasRef} className="resume-canvas" />
        </div>
      </div>

      {/* Bottom Information & Download Card */}
      <div className="resume-footer-card">
        <div className="resume-footer-meta">
          <div>
            <h4>Shivraj Jadhav — Professional Resume</h4>
            <p>
              Complete background covering Full-Stack Web Development, technical projects
              (HaqSetu, News Pulse, Arachne OS), peer mentoring at NavGurukul, and certifications.
            </p>
          </div>
        </div>

        <div className="resume-footer-actions">
          <a
            href={resumeUrl}
            download="Shivraj_Jadhav_Resume.pdf"
            className="button button-primary resume-main-download"
          >
            <Download size={15} /> Download PDF
          </a>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="button button-secondary"
          >
            <ExternalLink size={15} /> Open in new tab
          </a>
        </div>
      </div>
    </div>
  );
}
