import React from "react";
import "./UpcomingGigs.css";
import Performances from "../Databases/EngagementDatabase"; 

export default function UpcomingGigs() {

  // Function to parse and compare dates
  const parseDate = (dateStr) => {
    // Regex to match the first valid month, day, and year, ignoring any additional info (like time)
    const dateRegex = /(\w+ \d+)[^\d]*(\d{4})/;  // Extracts the first "Month Day Year" (e.g., "March 8 2025")
  
    const match = dateStr.match(dateRegex);
  
    if (match) {
      const [_, monthDay, year] = match;  // Extract the first valid "Month Day Year"
      const cleanedDateStr = `${monthDay} ${year}`;  // Clean date string to "Month Day Year"
      const parsedDate = new Date(cleanedDateStr);  // Convert to Date object
  
      // Check if the date is valid
      if (!isNaN(parsedDate)) {
        console.log(`Parsed Date: ${parsedDate} from ${dateStr}`);
        return parsedDate;
      }
    }
  
    // Fallback if date parsing fails
    const fallbackDate = new Date();
    console.log(`Fallback Date: ${fallbackDate} used for ${dateStr}`);
    return fallbackDate;
  };
  
  
  

  // Sorting the Performances array by date
  const sortedPerformances = Performances.filter(event => event.tickets === "true")
    .sort((a, b) => parseDate(a.dates) - parseDate(b.dates));

  // Function to open ticket link
  const openTicketLink = (link) => {
    window.open(link);
  };

  return (
    <div className="upcoming__container">
      <h1>UPCOMING</h1>
      <div className="twentyTwo-shows">
        {sortedPerformances.map((event, index) => (
          <div
            key={index}
            onClick={() => openTicketLink(event.ticketLink)}
            className="upcoming___show-container"
          >
            <img
              alt={`${event.opera} - ${event.role}`}
              src={event.logo}
              style={{ width: "15%", height: "auto" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>
                OPERA: <span className="bold">{event.opera}</span>
              </p>
              <p>
                ROLE: <span className="bold">{event.role}</span>
              </p>
              <p>
                DATE: <span className="bold">{event.dates}</span>
              </p>
              <p>
                COMPANY: <span className="bold">{event.company}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
