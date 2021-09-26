import React from "react";
import "./Engagements.css";

import Performances from "../../components/Databases/EngagementDatabase.js";

export default function Engagements() {
  console.log(Performances);
  return (
    <div>
      <h1 style={{ color: "white" }}>ENGAGEMENTS</h1>
      {Performances &&
        Performances.map((performance) => (
          <div
            style={{
              backgroundColor: "white",
              height: "300px",
              width: "300px",
            }}
          >
            <h1>{performance.opera}</h1>
          </div>
        ))}
    </div>
  );
}
