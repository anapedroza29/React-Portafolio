import React from "react";
import "./work-card.css";
function WorkCard ({ item }) {
  return (
    <div className="work-card">
      <div className="work-info">
        <label className="job-name">{item.job}</label>
        <label className="company-name">{item.company}</label>
        <div className="work-dates">
          <label>{item.dateJoining}</label>
          {item.dateEnd && (
            <>
              <label>-</label>
              <label>{item.dateEnd}</label>
            </>
          )}
        </div>
        <div className="work-desc">
        <ul style={{listStyleType: 'disc'}}>
          {item.work.map((item, index) => {
            return <li key={index}>{item}</li>
          }
          )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;