import React from "react";
import FormImg from "../../assets/contact-form.jpeg";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-us">
      <div className="outer-container">
        <div className="inner-container">
          <div className="form-container">
            <div className="title">
              <h1>Let's Get Started</h1>
              <p>Join us for travel updates, deals, and more. </p>
            </div>
            <form>
              <div>
                <input type="text" placeholder="Username" required />
                <i className="fa-solid fa-user"></i>
              </div>
              <div>
                <input type="email" placeholder="Email" required />
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <input type="password" placeholder="Create Password" required />
                <i className="fa-solid fa-lock"></i>
              </div>
              <div>
                <input type="password" placeholder="Confirm Password" required />
                <i className="fa-solid fa-lock"></i>
              </div>
              <p>
                By continuing you agree to <a href="">Terms and Condition</a> and <a href="">Privacy Policy</a>.
              </p>
              <button>Create Account</button>
            </form>
            <p className="divider">
              <span>OR</span>
            </p>
            <div className="signupbtn">
              <button className="btn">Signup with Google</button>
              <button className="btn">Singup with Facebook</button>
            </div>
            <p className="signin">
              Already have an account? <a href="">Sign In</a>
            </p>
          </div>
          <img src={FormImg} alt="" className="img-container" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
