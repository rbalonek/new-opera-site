import React from "react";
import "./Engagements.css";

import Performances from "../../components/Databases/EngagementDatabase.js";
import EngagementCard from "../../components/EngagementCard/EngagementCard";

export default function Engagements() {
  
  return (
    <div className="engagements__container">
      <h1 style={{ color: "black" }}>ENGAGEMENTS</h1>
      <div className="engagement__performance-cards_holder">
        {Performances &&
          Performances.map((performance, index) => (
            <EngagementCard
              index={index}
              tickets={performance.tickets}
              opera={performance.opera}
              company={performance.company}
              ticketLink={performance.ticketLink}
              role={performance.role}
              composer={performance.composer}
              logo={performance.logo}
              dates={performance.dates}
              venue={performance.venue}
              modalImages={performance.modalImages}
              reviews={performance.reviews}
            />
          ))}
      </div>
    </div>
  );
}
