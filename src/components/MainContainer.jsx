/* eslint-disable react/prop-types */
import Posts from "./Posts";
import RecommendedGroups from "./RecommendedGroups";
import arrowDown from "../assets/arrowDown.svg";
import edit from "../assets/editPencil.svg";
import { useState } from "react";

import MobileScreenLogin from "./MobileScreenLogin";

const Main = ({ setUser, signIn, setSignIn }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="mx-auto d-flex gap-5 justify-content-center"
      style={{ maxWidth: "1040px" }}
    >
      <div
        className={`posts-center position-relative ${
          showModal ? "dark-back" : ""
        }`}
      >
        <div className="d-flex d-lg-none w-100 position-absolute top-4 align-items-center justify-content-between custom-main-button">
          <div className="text-main-posts">Posts(368)</div>
          <button className="btn btn-filter d-flex align-items-center gap-2">
            Filter : All{" "}
            <img src={arrowDown} alt="arrowdown" width={20} height={20} />
          </button>
        </div>
        <Posts />
      </div>
      <RecommendedGroups />
      <button
        className="btn circle-write-post rounded-circle d-flex justify-content-center align-items-center position-fixed d-lg-none"
        style={{ bottom: "18px", right: "18px" }}
        onClick={() => setShowModal((prev) => !prev)}
      >
        <img src={edit} alt="write a post" height={24} width={24} />
      </button>
      <MobileScreenLogin
        showModal={showModal}
        setUser={setUser}
        setSignIn={setSignIn}
        signIn={signIn}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default Main;
