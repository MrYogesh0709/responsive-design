import { useState } from "react";
import close from "../assets/baselineCancelBlack.svg";
import facebook from "../assets/facebook.svg";
import google from "../assets/google.svg";
import eye from "../assets/eye.svg";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MobileScreenLogin = ({
  showModal,
  signIn,
  setShowModal,
  setSignIn,
  setUser,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className={`mobile-modal-overlay d-lg-none ${showModal ? "active" : ""}`}
    >
      <div className="d-flex flex-column p-4 w-100">
        <div className="d-flex justify-content-between  align-items-center mb-4">
          {signIn ? (
            <h4 className="d-flex fw-bold">Welcome Back</h4>
          ) : (
            <h4 className="d-flex fw-bold">Create Account</h4>
          )}

          <button className="btn" onClick={() => setShowModal((prev) => !prev)}>
            <img src={close} alt="close" />
          </button>
        </div>
        {!signIn && (
          <div className="d-flex">
            <input
              type="text"
              className="form-control custom-input"
              placeholder="First Name"
            />
            <input
              type="text"
              className="form-control custom-input"
              placeholder="Last Name"
            />
          </div>
        )}
        <input
          type="email"
          className="form-control custom-input"
          placeholder="Email"
        />
        <div className="d-flex align-items-center justify-content-between  position-relative">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control custom-input"
            placeholder="Password"
          />
          <button
            className="btn position-absolute"
            style={{ right: "10px" }}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <img src={eye} alt="eye" width="18px" height="18px" />
          </button>
        </div>
        <input
          type="password"
          className="form-control mb-4 custom-input"
          placeholder="Confirm password"
        />
        {signIn ? (
          <ul className="d-flex justify-content-between align-items-center mb-4 p-0">
            <Link
              className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center"
              data-bs-dismiss="modal"
              onClick={() => setUser("siddrath")}
            >
              Sign In
            </Link>

            <Link
              className="link-underline-dark"
              onClick={() => setSignIn((prev) => !prev)}
            >
              or, Create Account
            </Link>
          </ul>
        ) : (
          <ul className="d-flex justify-content-between align-items-center mb-4 p-0">
            <Link
              className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center"
              data-bs-dismiss="modal"
              onClick={() => setUser("siddrath")}
            >
              Create Account
            </Link>
            <Link
              className="link-underline-dark"
              onClick={() => setSignIn((prev) => !prev)}
            >
              or, Sign In
            </Link>
          </ul>
        )}
        <div className="d-flex flex-column gap-2 mb-4">
          <button className="btn d-flex align-items-center justify-content-center gap-2 button-signup-group">
            <img src={facebook} alt="facebook" />
            {`Sign ${signIn ? "In" : "Up"} with Facebook`}
          </button>
          <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
            <img src={google} alt="google" />
            {`Sign ${signIn ? "In" : "Up"} with Google`}
          </button>
        </div>

        {signIn && (
          <button className="btn  text-center forgot mb-2">
            Forgot PassWord?
          </button>
        )}
        {!signIn && (
          <p className="info-signup text-center">
            By signing up, you agree to our Terms & conditions, Privacy policy
          </p>
        )}
      </div>
    </div>
  );
};

export default MobileScreenLogin;
