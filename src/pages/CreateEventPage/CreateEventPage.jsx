import React, { useState } from "react";
import "./create-event-page.css";
import { Link } from "react-router-dom";
import { EventPage } from "../EventPage/EventPage";
import { useEvent } from "../../context/EventContext";

export const CreateEventPage = () => {
  const { eventDetails, setEventDetails } = useEvent();
  //   console.log(eventDetail);
  //   const [eventDetails, setEventDetails] = useState({
  //     eventName: "",
  //     hostName: "",
  //     time: "",
  //     location: "",
  //     photo: "",
  //   });

  return (
    <>
      <main className="event-main">
        <div className="event-container">
          <div className="event-body">
            <p className="Create-Event-Heading">Fill Event Details</p>
            <div className="event-details">
              <label for="name" className="textarea-label">
                Event name
              </label>
              <input
                id="name"
                type="text"
                className="input"
                value={eventDetails.email}
                valide
                onChange={(e) => {
                  setEventDetails({
                    ...eventDetails,
                    eventName: e.target.value,
                  });
                  console.log(eventDetails);
                }}
              />
            </div>

            <div className="event-details">
              <label for="HostName" className="textarea-label">
                Host name
              </label>
              <input
                id="HostName"
                type="text"
                className="input"
                valide
                value={eventDetails.password}
                onChange={(e) => {
                  setEventDetails({
                    ...eventDetails,
                    hostName: e.target.value,
                  });
                }}
              />
            </div>

            <div className="event-details">
              <label for="date" className="textarea-label">
                Start time
              </label>
              <input
                id="date"
                type="date"
                className="input"
                placeholder="**********"
                valide
                value={eventDetails.password}
                onChange={(e) => {
                  setEventDetails({
                    ...eventDetails,
                    time: e.target.value,
                  });
                }}
              />
            </div>

            <div className="event-details">
              <label for="date" className="textarea-label">
                End time
              </label>
              <input
                id="date"
                type="date"
                className="input"
                valide
                value={eventDetails.password}
                onChange={(e) => {
                  setEventDetails({
                    ...eventDetails,
                    time: e.target.value,
                  });
                }}
              />
            </div>

            <div className="event-details">
              <label for="password" className="textarea-label">
                Location
              </label>
              <input
                id="password"
                type="password"
                className="input"
                valide
                value={eventDetails.password}
                onChange={(e) => {
                  setEventDetails({
                    ...eventDetails,
                    location: e.target.value,
                  });
                }}
              />
            </div>
            {console.log(eventDetails)}
            {/* <EventPage varia={eventDetails} /> */}
            <Link to="/event">
              <button className="create-my-event-btn mrg-top16 ">Next </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
