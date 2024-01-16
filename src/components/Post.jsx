/* eslint-disable react/prop-types */
import more from "../assets/threeDots.svg";
import eye from "../assets/eye.svg";
import share from "../assets/share.svg";
import date from "../assets/calender.svg";
import location from "../assets/outlineLocation.svg";
import company from "../assets/bag.svg";

const Post = ({ postData }) => {
  return (
    <div
      style={{
        maxWidth: "692px",
        borderColor: "#e0e0e0",
        fill: "#fff",
        filter: "filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.12))",
      }}
      className="d-flex flex-column border border-1 rounded-2"
    >
      {postData?.image && (
        <img src={postData.image} alt="Nature" className="imagePost" />
      )}
      <div className="p-4">
        <h3 className="d-flex">{postData.heading}</h3>
        <div className="d-flex gap-6 justify-content-between">
          <h4>{postData.title}</h4>
          <div className="btn align-self-start">
            <div className="dropdown">
              <div
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={more} alt="more details" height="28px" width="28px" />
              </div>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" type="button">
                    Edit
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Report
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    option 3
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="d-flex align-items-center gap-5 list-unstyled ">
          {postData?.date && (
            <li className="d-flex align-items-center gap-1">
              <img src={date} alt="date" width="20px" height="20px" />
              {postData.date}
            </li>
          )}
          {postData?.company && (
            <li className="d-flex align-items-center gap-1">
              <img src={company} alt="date" width="20px" height="20px" />
              {postData.company}
            </li>
          )}
          {postData?.location && (
            <li className="d-flex align-items-center gap-1">
              <img src={location} alt="location" width="20px" height="20px" />
              {postData.location}
            </li>
          )}
        </ul>
        {postData?.text && <p>{postData.text}</p>}
        {postData?.link && (
          <button
            style={{ color: postData.link.background, width: "100%" }}
            className="custom-post-link btn mb-4 fw-semibold"
          >
            {postData.link.text}
          </button>
        )}
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <img
              className="rounded-circle"
              alt="Profile"
              src={postData?.user}
              width="48"
              height="48"
            />
            <div className="d-flex flex-column">
              <div className="text-wrapper">Siddharth Goyal</div>
              <div className="d-lg-none">
                <img src={eye} alt="watch" />
                <span>1.4k views</span>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-none d-lg-block pe-4">
              <img src={eye} alt="watch" />
              <span>1.4k views</span>
            </div>
            <button
              className="btn d-flex align-items-center gap-2"
              style={{ background: "#edeef0" }}
            >
              <img src={share} alt="share" />
              <span className="d-lg-none">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
