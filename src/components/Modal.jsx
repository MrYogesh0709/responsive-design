import signUp from "../assets/signup.svg";
import close from "../assets/baselineCancel.svg";
import facebook from "../assets/facebook.svg";
import google from "../assets/google.svg";
import { useState } from "react";
import eye from "../assets/eye.svg";

// eslint-disable-next-line react/prop-types
const Modal = ({ setUser }) => {
  const [signIn, setSignIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered position-relative">
        <button
          type="button"
          className="btn position-absolute"
          data-bs-dismiss="modal"
          style={{ top: "10px", right: "-25px" }}
        >
          <img src={close} alt="close" />
        </button>
        <div className="modal-content">
          <div className="modal-header custom-modal-header d-flex justify-content-center mb-4 ">
            Let{"'"}s learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </div>

          <div className="px-4">
            <div className="d-flex justify-content-between  align-items-center mb-4">
              {signIn ? (
                <h4 className="d-flex fw-bold">Sign In</h4>
              ) : (
                <h4 className="d-flex fw-bold">Create Account</h4>
              )}

              <button
                className="btn"
                onClick={() => setSignIn((prev) => !prev)}
              >
                Already have an account?{" "}
                <span className="text-primary">Sign In</span>
              </button>
            </div>
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-column gap-2">
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
                      <button
                        className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4"
                        data-bs-dismiss="modal"
                        onClick={() => setUser("siddrath")}
                      >
                        Sign In
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4"
                        data-bs-dismiss="modal"
                        onClick={() => setUser("siddrath")}
                      >
                        Create Account
                      </button>
                    )}
                    <div className="d-flex flex-column gap-2">
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
                      <button className="btn d-none d-lg-block text-center forgot">
                        Forgot PassWord?
                      </button>
                    )}
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column">
                    <img src={signUp} alt="atg-illustration" />
                    <p className="info-signup">
                      By signing up, you agree to our Terms & conditions,
                      Privacy policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
