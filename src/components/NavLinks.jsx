import { Link } from "react-router-dom";
import arrowDown from "../assets/arrowDown.svg";
import leave from "../assets/exit.svg";
import join from "../assets/joinGroup.svg";
const NavLinks = ({ isJoined, setIsJoined }) => {
  return (
    <>
      <div
        className="d-none d-lg-flex justify-content-between mx-auto align-items-center container sticky-top"
        style={{
          maxWidth: "1040px",
          height: "68px",
          background: "#fff",
          borderTop: "1px solid rgba(0,0,0,0.2)",
        }}
      >
        <ul className="nav my-2 nav-underline">
          <li className="nav-item">
            <Link className="nav-link active" to="#">
              All Posts (32)
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Article
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Event
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Job
            </Link>
          </li>
        </ul>
        <div className="d-flex my-2 align-items-center">
          <button
            className="btn"
            style={{ background: "#f2f2f2" }}
            aria-label="write-post"
          >
            Write Post
            <img src={arrowDown} alt="arrow down" />
          </button>
          {isJoined ? (
            <button
              className="btn ms-2"
              style={{ border: "0.8px solid #989899" }}
              aria-label="leave group"
              onClick={() => setIsJoined((prev) => !prev)}
            >
              <img src={leave} alt="leave group" />
              Leave Group
            </button>
          ) : (
            <button
              className="btn btn-primary ms-2 gap-2 d-flex align-items-center "
              style={{ border: "0.8px solid #989899" }}
              aria-label="Join group"
              onClick={() => setIsJoined((prev) => !prev)}
            >
              <img src={join} alt="Join group" />
              Join Group
            </button>
          )}
        </div>
      </div>
      <hr style={{ maxWidth: "1040px" }} className="mx-auto mt-0" />
    </>
  );
};

export default NavLinks;
