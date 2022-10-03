import React, { useState } from "react";
import "./create-event-page.css";
import { Link } from "react-router-dom";

export const CreateEventPage = () => {
  const [eventDetails, setEventDetails] = useState({
    eventName: "",
    hostName: "",
    time: "",
    location: "",
    photo: "",
  });

  return (
    <>
      <main Name="event-main">
        <div className="event-container">
          <div className="event-body">
            <p className="h3 color capitalize fW-700 text-center"></p>
            <div className="input-box mgT-20">
              {/* <div>{errorMessage.message}</div> */}
              <label for="email" className="textarea-label">
                Event name
              </label>
              <input
                id="email"
                type="email"
                className="input"
                placeholder="you@example.com"
                value={eventDetails.email}
                valide
                // onChange={(e) => {
                //   seteventDetails({ ...eventDetails, email: e.target.value });
                //   console.log(eventDetails);
                // }}
              />
            </div>

            <div className="input-box mgT-20">
              <label for="password" className="textarea-label">
                Host name
              </label>
              <input
                id="password"
                type="password"
                className="input"
                placeholder="**********"
                valide
                value={eventDetails.password}
                // onChange={(e) => {
                //   seteventDetails({
                //     ...eventDetails,
                //     password: e.target.value,
                //   });
                // }}
              />
            </div>

            <div className="input-box mgT-20">
              <label for="password" className="textarea-label">
                Start and End time/date
              </label>
              <input
                id="password"
                type="password"
                className="input"
                placeholder="**********"
                valide
                value={eventDetails.password}
                // onChange={(e) => {
                //   seteventDetails({
                //     ...eventDetails,
                //     password: e.target.value,
                //   });
                // }}
              />
            </div>

            <div className="input-box mgT-20">
              <label for="password" className="textarea-label">
                Location and Event photo
              </label>
              <input
                id="password"
                type="password"
                className="input"
                placeholder="**********"
                valide
                value={eventDetails.password}
                // onChange={(e) => {
                //   seteventDetails({
                //     ...eventDetails,
                //     password: e.target.value,
                //   });
                // }}
              />
            </div>
            {/* {console.log(eventDetails)} */}
            <div className="event-remember-ad-forget-pass dis-f">
              <div className="forget-pass">
                <span
                  className="textarea-label"
                  //   onClick={(e) => {
                  //     e.preventDefault();
                  //     seteventDetails(testeventDetails);
                  //   }}
                >
                  Next
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
