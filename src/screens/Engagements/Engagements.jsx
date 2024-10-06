import React from "react";
import "./Engagements.css";
import Performances from "../../components/Databases/EngagementDatabase.js";
import EngagementCard from "../../components/EngagementCard/EngagementCard";
import { Helmet } from "react-helmet";

export default function Engagements(props) {
return (
  <div className="engagements__container">
  <Helmet>
  <title>Engagements - Robert Balonek - Bay Area Baritone</title>
  <meta name="description" content="Robert Balonek is a Bay Area Baritone specializing in Verdi Baritone roles, classical singing, and opera. Known for performances as Figaro, Scarpia, Iago, Rigoletto, and more." />
      <meta name="keywords" content="Robert Balonek, Bay Area Baritone, Verdi Baritone, Baritone, Opera, Classical Singer, Figaro, Oratorio, Scarpia, Iago, Rigoletto" />
      <meta name="robots" content="index, follow" />
        <meta name="author" content="Robert Balonek" />
      <meta name="publisher" content="Robert Balonek " />
      <link rel="canonical" href="https://www.robertbalonek.com/engagements" />
</Helmet>
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
