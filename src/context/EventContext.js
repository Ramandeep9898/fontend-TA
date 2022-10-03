import React, { useState } from "react";
import { createContext, useContext } from "react";

const EventContext = createContext();

const useEvent = () => useContext(EventContext);

const EventProvider = ({ children }) => {
  const [eventDetails, setEventDetails] = useState({
    eventName: "",
    hostName: "",
    time: "",
    location: "",
    photo: "",
  });
  return (
    <EventContext.Provider value={{ eventDetails, setEventDetails }}>
      {children}
    </EventContext.Provider>
  );
};

export { useEvent, EventProvider };
