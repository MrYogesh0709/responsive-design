import logo from "../assets/logo.svg";
import arrowDown from "../assets/arrowDown.svg";
import search from "../assets/search.svg";
import profile from "../assets/photos/siddrath.jpg";
import { Link } from "react-router-dom";
import Modal from "./Modal";

// eslint-disable-next-line react/prop-types
const AppNavbar = ({ user, setUser }) => {
  return (
    <div
      style={{
        boxShadow: " 0px 1px 2px 0px rgba(0, 0, 0, 0.12)",
      }}
    >
      <div className="container d-none d-lg-flex  align-items-center justify-content-between p-3">
        <Link href="#">
          <img src={logo} width="162.57px" height="24px" alt="Logo" />
        </Link>
        <form
          className="d-flex"
          style={{ width: "360px", borderRadius: "21px" }}
        >
          <button className="custom-search" type="submit">
            <img alt="Search" src={search} width="22" height="22" />
          </button>
          <input
            className="form-control custom-input-search"
            type="search"
            placeholder="Search for your favorite groups in ATG"
            aria-label="Search"
          />
        </form>

        <div className="d-flex align-items-center gap-1">
          {user ? (
            <button className="d-flex align-items-center gap-2 p-0 m-0 btn">
              <img
                className="rounded-circle"
                alt="Profile"
                src={profile}
                width="36"
                height="36"
              />
              <div className="text-wrapper">Siddharth Goyal</div>
            </button>
          ) : (
            <button
              className="btn custom-btn-create p-0 m-0"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              create Account.{" "}
              <span className="text-primary fw-bold">It{"'"}s Free!</span>{" "}
            </button>
          )}
          <div className="d-flex align-items-center">
            <img className="rounded-circle" alt="Profile" src={arrowDown} />
          </div>
          <Modal user={user} setUser={setUser} />
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
