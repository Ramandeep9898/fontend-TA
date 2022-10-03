import "./landingpage.css";
import { GiPartyPopper } from "react-icons/gi";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <>
      <main className="landing-page-container">
        <div className="main-heading">
          Imagine if <br />
          <span className="grad">Snapchat</span>
          had events.
        </div>
        <div className="sub-heading mrg-top16">
          Easily host and share events with your friends across any social
          media.
        </div>
        <div className="image-container mrg-top36 ">
          <img
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T155949Z&X-Amz-Expires=86400&X-Amz-Signature=7eacc21f9f56bffafa4469f06e493f5322838d9c608a8ddc0dec50779f0f5235&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
            alt=""
          />
        </div>
        <div className="create-my-event-btn-div mrg-top34">
          <Link to="/create">
            <button className="create-my-event-btn">
              <span>
                <GiPartyPopper /> Create my event
              </span>{" "}
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};
