import React, { useState } from "react";
import "./App.css";
import ConferenceEvent from "./ConferenceEvent";
import AboutUs from "./AboutUs";

function App() {
  // State to control the visibility of the ConferenceEvent component
  const [showVenue, setShowVenue] = useState(false);

  // Function to handle the "Get Started" button click
  const handleGetStarted = () => {
    setShowVenue(true);  // Sets showVenue to true to display the ConferenceEvent component
  };

  return (
    <>
      {/* Header section for the first page */}
      <header className="first_page">
        <div className="main_event">
          <div className="first_page_name_btn">
            {/* Main heading and subheading for the event planner */}
            <h1 className="budget_heading">Conference Expense Planner</h1>
            <p className="budget_sentence"> Plan your next major event with us!</p>
            {/* Button to start the event planning */}
            <div className="getstarted_btn">
              <button onClick={() => handleGetStarted()} className="get-started-btn">
                Get Started
              </button>
            </div>
          </div>
          {/* AboutUs component displaying information about the app */}
          <div className="aboutus_main">
            <AboutUs />
          </div>
        </div>
      </header>

      {/* Conditional rendering of the ConferenceEvent component based on showVenue state */}
      <div className={`event-list-container ${showVenue ? 'visible' : ''}`}>
        <ConferenceEvent />
      </div>
    </>
  );
}

export default App;
