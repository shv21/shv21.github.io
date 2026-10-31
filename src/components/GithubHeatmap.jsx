import { useEffect, useMemo, useState } from "react";
import initialData from "../data/githubContributions.json";

function formatDate(dateStr) {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  const dateObj = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
  return dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function GithubHeatmap() {
  const [data, setData] = useState(initialData);
  const [hoveredCell, setHoveredCell] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Fetch real GitHub contribution data from shv21 account on mount
  useEffect(() => {
    let isMounted = true;
    fetch("https://github-contributions-api.jogruber.de/v4/shv21?y=last")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch contribution data");
        return res.json();
      })
      .then((remoteData) => {
        if (isMounted && remoteData?.contributions?.length) {
          setData(remoteData);
        }
      })
      .catch((err) => {
        console.warn("Using cached GitHub contributions for shv21:", err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Compute weeks (53 columns of 7 days) and month positions
  const { weeks, monthLabels, totalContributions, todayActivity } = useMemo(() => {
    const list = data?.contributions || [];
    const weekList = [];
    for (let i = 0; i < list.length; i += 7) {
      weekList.push(list.slice(i, i + 7));
    }

    // Determine month labels positioned by week index
    const months = [];
    let prevMonth = "";
    weekList.forEach((week, wIdx) => {
      if (!week[0]) return;
      const [y, m, d] = week[0].date.split("-");
      const dateObj = new Date(parseInt(y, 10), parseInt(m, 10) - 1, parseInt(d, 10));
      const mName = dateObj.toLocaleString("en-US", { month: "short" });
      if (mName !== prevMonth) {
        // Prevent overcrowding if labels are too close (at least 3 weeks apart)
        const lastLabel = months[months.length - 1];
        if (!lastLabel || wIdx - lastLabel.weekIndex >= 3) {
          months.push({ name: mName, weekIndex: wIdx });
          prevMonth = mName;
        }
      }
    });

    const total = data?.total?.lastYear ?? 270;
    const lastDay = list[list.length - 1];
    const todayCount = lastDay ? lastDay.count : 0;

    return {
      weeks: weekList,
      monthLabels: months,
      totalContributions: total,
      todayActivity: todayCount,
    };
  }, [data]);

  const handleMouseEnter = (cell, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = e.currentTarget.closest(".github-heatmap-container").getBoundingClientRect();
    setTooltipPos({
      x: rect.left - containerRect.left + rect.width / 2,
      y: rect.top - containerRect.top - 8,
    });
    setHoveredCell(cell);
  };

  const handleMouseLeave = () => {
    setHoveredCell(null);
  };

  return (
    <div className="github-heatmap-container">
      {/* Header status */}
      <div className="heatmap-header">
        <a
          href="https://github.com/shv21"
          target="_blank"
          rel="noopener noreferrer"
          className="heatmap-account-link"
        >
          @shv21
        </a>

        <div className="heatmap-status-badge">
          <span
            className={`heatmap-status-dot ${
              todayActivity > 0 ? "active" : "inactive"
            }`}
          />
          <span>
            {todayActivity > 0
              ? `Coded today · ${todayActivity} commit${todayActivity > 1 ? "s" : ""}`
              : "Didn't code today"}
          </span>
        </div>
      </div>

      {/* Heatmap Area */}
      <div className="heatmap-scroll-area">
        <div className="heatmap-inner-canvas">
          {/* Month labels */}
          <div className="heatmap-months-track">
            {monthLabels.map((m) => (
              <span
                key={`${m.name}-${m.weekIndex}`}
                className="heatmap-month-tag"
                style={{ left: `${32 + m.weekIndex * 13}px` }}
              >
                {m.name}
              </span>
            ))}
          </div>

          <div className="heatmap-matrix-wrapper">
            {/* Days column */}
            <div className="heatmap-days-col" aria-hidden="true">
              <span className="heatmap-day-label empty" />
              <span className="heatmap-day-label">Mon</span>
              <span className="heatmap-day-label empty" />
              <span className="heatmap-day-label">Wed</span>
              <span className="heatmap-day-label empty" />
              <span className="heatmap-day-label">Fri</span>
              <span className="heatmap-day-label empty" />
            </div>

            {/* Contribution squares grid */}
            <div
              className="heatmap-grid"
              role="grid"
              aria-label="shv21 GitHub contribution calendar"
            >
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="heatmap-week-col" role="row">
                  {week.map((cell) => {
                    const count = cell.count ?? 0;
                    const tooltipText =
                      count > 0
                        ? `${count} contribution${count === 1 ? "" : "s"} on ${formatDate(cell.date)}`
                        : `No contributions on ${formatDate(cell.date)}`;

                    return (
                      <div
                        key={cell.date}
                        className={`heatmap-cell level-${cell.level ?? 0}`}
                        role="gridcell"
                        aria-label={tooltipText}
                        title={tooltipText}
                        onMouseEnter={(e) => handleMouseEnter(cell, e)}
                        onMouseLeave={handleMouseLeave}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating tooltip */}
        {hoveredCell && (
          <div
            className="heatmap-floating-tooltip"
            style={{
              left: `${tooltipPos.x}px`,
              top: `${tooltipPos.y}px`,
            }}
          >
            <strong>
              {hoveredCell.count > 0
                ? `${hoveredCell.count} contribution${hoveredCell.count === 1 ? "" : "s"}`
                : "No contributions"}
            </strong>{" "}
            on {formatDate(hoveredCell.date)}
          </div>
        )}
      </div>

      {/* Footer info & GitHub-style scale */}
      <div className="heatmap-footer">
        <div className="heatmap-summary">
          <span className="heatmap-total">
            <strong>{totalContributions}</strong> contributions in the last year
          </span>
          <a
            href="https://github.com/shv21"
            target="_blank"
            rel="noopener noreferrer"
            className="heatmap-profile-pill"
          >
            View on GitHub ↗
          </a>
        </div>

        <div className="heatmap-legend" aria-label="Contribution count scale">
          <span>Less</span>
          <span className="heatmap-cell level-0" title="0 contributions" />
          <span className="heatmap-cell level-1" title="1-3 contributions" />
          <span className="heatmap-cell level-2" title="4-6 contributions" />
          <span className="heatmap-cell level-3" title="7-9 contributions" />
          <span className="heatmap-cell level-4" title="10+ contributions" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
