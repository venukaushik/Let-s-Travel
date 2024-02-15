import React from "react";
import "./ContactUs.css";
import FormImg from "../../assets/contact-form.jpeg";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="outer-container">
        <div className="inner-container">
          <div className="form-container">
            <div className="title">
              <h1>Contact Us</h1>
              <p>Need Help Planning Your Trip?</p>
            </div>
            <form>
              <div>
                <input type="text" placeholder="Enter your Name" />
              </div>
              <div>
                <input type="email" placeholder="Enter your Email" />
              </div>
              <div>
                <input type="number" placeholder="Enter your phone" />
              </div>
              <div>
                <input type="date" />
              </div>
              <textarea name="" id="" cols="80" rows="5" placeholder="Enter your message"></textarea>
              <button>Submit</button>
            </form>
          </div>
          <img src={FormImg} alt="" className="img-container" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
