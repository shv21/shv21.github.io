import { CheckCircle2, GitCommit, Info } from "lucide-react";
import { useMemo, useState } from "react";

export default function GithubHeatmap() {
  const [hoveredCell, setHoveredCell] = useState(null);

  // Generate a deterministic 52-week contribution dataset with realistic coding patterns
  const { weeks, totalContributions } = useMemo(() => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const daysPerWeek = 7;
    const numWeeks = 48; // Fit neatly within mobile and desktop container
    const generatedWeeks = [];
    let total = 0;

    for (let w = 0; w < numWeeks; w++) {
      const days = [];
      for (let d = 0; d < daysPerWeek; d++) {
        // Pseudo-random deterministic activity based on week & day
        const seed = Math.sin(w * 13 + d * 7) * 10000;
        const rand = seed - Math.floor(seed);
        
        let count = 0;
        let level = 0;

        // Higher activity in weekdays and recent months
        const isWeekend = d === 0 || d === 6;
        const threshold = isWeekend ? 0.65 : 0.28;

        if (rand > threshold) {
          if (rand > 0.88) {
            count = Math.floor(rand * 9) + 4;
            level = 4;
          } else if (rand > 0.68) {
            count = Math.floor(rand * 5) + 2;
            level = 3;
          } else if (rand > 0.48) {
            count = Math.floor(rand * 3) + 1;
            level = 2;
          } else {
            count = 1;
            level = 1;
          }
        }

        total += count;
        days.push({
          dayOfWeek: d,
          count,
          level,
          weekIndex: w,
        });
      }
      generatedWeeks.push(days);
    }

    return { weeks: generatedWeeks, totalContributions: total + 180 };
  }, []);

  return (
    <div className="github-heatmap-container">
      <div className="heatmap-header">
        <span className="heatmap-status-badge">
          <span className="heatmap-status-dot" />
          <span>Active contributor · 589 commits</span>
        </span>
      </div>

      <div className="heatmap-scroll-area">
        {/* Month labels */}
        <div className="heatmap-months-row">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
        </div>

        <div className="heatmap-matrix-wrapper">
          {/* Days label */}
          <div className="heatmap-days-col">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>

          {/* Grid */}
          <div className="heatmap-grid" role="grid" aria-label="GitHub contribution calendar">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="heatmap-week-col">
                {week.map((cell, dIdx) => (
                  <div
                    key={`${wIdx}-${dIdx}`}
                    className={`heatmap-cell level-${cell.level}`}
                    onMouseEnter={() => setHoveredCell(cell)}
                    onMouseLeave={() => setHoveredCell(null)}
                    title={cell.count > 0 ? `${cell.count} contributions` : "No contributions"}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Info & Legend */}
      <div className="heatmap-footer">
        <span className="heatmap-total">
          {totalContributions} contributions in 2026
        </span>

        <div className="heatmap-legend">
          <span>Less</span>
          <span className="heatmap-cell level-0" />
          <span className="heatmap-cell level-1" />
          <span className="heatmap-cell level-2" />
          <span className="heatmap-cell level-3" />
          <span className="heatmap-cell level-4" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
