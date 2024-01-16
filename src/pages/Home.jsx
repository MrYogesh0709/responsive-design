import Main from "../components/MainContainer";
import Navbar from "../components/Navbar";
import NavLinks from "../components/NavLinks";
import background from "../assets/photos/c3ac7682e52df2e10d0a36ec3f243a44.jpg";
import arrowLeft from "../assets/arrowLeft.svg";
import { useState } from "react";

const Home = () => {
  const [isJoined, setIsJoined] = useState(false);
  const [user, setUser] = useState(null);
  const [signIn, setSignIn] = useState(false);

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <div
        className="container-fluid p-0 position-relative custom-bg-container"
        style={{
          background: `url(${background}) center/cover no-repeat`,
          height: "440px",
        }}
      >
        <div className="overlay"></div>
        <div className="container d-flex flex-column h-100 background-text-home">
          <div className="d-flex d-lg-none justify-content-between mt-3">
            <button className="btn">
              <img src={arrowLeft} alt="back" />
            </button>
            {isJoined ? (
              <button
                className="btn join-group"
                onClick={() => setIsJoined((prev) => !prev)}
              >
                Join Group
              </button>
            ) : (
              <button
                className="btn join-group"
                onClick={() => setIsJoined((prev) => !prev)}
              >
                Leave Group
              </button>
            )}
          </div>
          <div>
            <h1 className="text-white">Computer Engineering</h1>
            <p className="text-white mb-5">
              142,765 Computer Engineers follow this
            </p>
          </div>
        </div>
      </div>
      <NavLinks isJoined={isJoined} setIsJoined={setIsJoined} />
      <Main
        user={user}
        setUser={setUser}
        signIn={signIn}
        setSignIn={setSignIn}
      />
    </>
  );
};

export default Home;
