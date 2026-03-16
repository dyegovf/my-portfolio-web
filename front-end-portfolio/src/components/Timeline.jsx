import React, { useState } from "react";

function Timeline({ items }) {
  const [activeYear, setActiveYear] = useState(null);

  const toggleYear = (year) => {
    setActiveYear(activeYear === year ? null : year);
  };

  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <button
            className="timeline-header"
            onClick={() => toggleYear(item.year)}
          >
            <span className="timeline-year">{item.year}</span>     
            <span className="timeline-toggle">
              {activeYear === item.year ? "−" : "+"}
            </span>
          </button>
          {activeYear === item.year && (
            <div className="timeline-details">
              <p>{item.details}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Timeline;
