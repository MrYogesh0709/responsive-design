import error from "../assets/error.svg";
import edit from "../assets/edit.svg";
import thumbsup from "../assets/thumbsup.svg";
import location from "../assets/outlineLocation.svg";
import { Link } from "react-router-dom";
import { groupData } from "../fakeData";

const RecommendedGroups = () => {
  return (
    <div className="container d-none d-lg-flex flex-column mt-4 ">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <img src={location} alt="location" />
          <input
            type="text"
            placeholder="Enter Your Location"
            className="input-text"
          />
        </div>
        <button className="btn">
          <img src={edit} alt="edit" />
        </button>
      </div>
      <hr className="my-1" />
      <div className="d-flex align-items-center gap-2 mb-4">
        <img src={error} alt="information" className="align-self-start" />
        <p className="location-info">
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
      <div className="d-flex align-items-center gap-2 text-capitalize mb-3">
        <img src={thumbsup} alt="thumbs up" />
        <span className="text-recommended">REcommended Groups</span>
      </div>
      <div className="d-flex flex-column gap-4">
        {groupData?.length > 0 &&
          groupData.map((item) => (
            <div
              className="d-flex align-items-center justify-content-between"
              key={item.id}
            >
              <div className="d-flex align-items-center gap-2">
                <img
                  className="rounded-circle"
                  alt="Profile"
                  src={item.img}
                  width="36"
                  height="36"
                />
                <div className="text-wrapper">{item.name}</div>
              </div>
              <Link className="btn follow rounded-5">Follow</Link>
            </div>
          ))}
      </div>
      <button className="btn text-end mt-5 text-primary text-capitalize">
        see more...
      </button>
    </div>
  );
};

export default RecommendedGroups;
