import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { EventPage } from "./pages/EventPage/EventPage";
import { CreateEventPage } from "./pages/CreateEventPage/CreateEventPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateEventPage />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
    </div>
  );
}

export default App;
