import "./event-page.css";
import { BsCalendar } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useEvent } from "../../context/EventContext";
export const EventPage = () => {
  const { eventDetails } = useEvent();
  return (
    <>
      <div>
        <img
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T175804Z&X-Amz-Expires=86400&X-Amz-Signature=6ba423573007c9bd7f60f907a4d68cad0c03f8f0c54c48402b5aa88dacf8060b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
          alt=""
          className="EventImage"
        />
      </div>
      <div className="event-details-container">
        <div className="event-heading">{eventDetails.eventName}</div>
        <div className="event-subHeading mrg-top4">
          Hosted by <span>{eventDetails.hostName}</span>
        </div>
        <div className="event-date mrg-top32">
          <div className="event-icon">
            <BsCalendar />
          </div>
          <div className="event-date-details">
            <div className="date-time">{eventDetails.startFrom}</div>
            <div className="date-time-subheading mrg-top4">
              to <span>{eventDetails.startFrom}</span> UTC +10
            </div>
          </div>
          <div className="more-details-arrow">
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className="event-date mrg-top16 ">
          <div className="event-icon">
            <HiOutlineLocationMarker />
          </div>
          <div className="event-date-details">
            <div className="date-time">{eventDetails.location}</div>
            <div className="date-time-subheading">Suburb, State, Postcode</div>
          </div>
          <div className="more-details-arrow">
            <MdKeyboardArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};
