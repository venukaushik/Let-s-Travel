import React, { useEffect } from "react";
import ModalImg from "../../assets/modal-img.jpg";
import ListSvg from "../../assets/icon-list.svg";

const ShowModal = (props) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div className="modal-wrapper" onClick={props.closeModal}></div>
      <div className="modal">
        <div className="modal-container">
          <i className="fa-solid fa-circle-xmark" onClick={props.closeModal}></i>
          <div className="left">
            <h1>Stay Updated!</h1>
            <p>Receive timely updates on our latest tour packages and travel offers.</p>
            <ul>
              <li className="list">
                <div>
                  <img src={ListSvg} alt="" />
                  <p>Discover exciting destinations with our curated tour packages.</p>
                </div>
              </li>
              <li className="list">
                <div>
                  <img src={ListSvg} alt="" />
                  <p>Immerse yourself in new cultures and experiences.</p>
                </div>
              </li>
              <li className="list">
                <div>
                  <img src={ListSvg} alt="" />
                  <p>Save on your next adventure with exclusive deals and discounts.</p>
                </div>
              </li>
            </ul>
            <form>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email address" />
            </form>
            <button className="btn">Subscribe to monthly Newsletter</button>
          </div>
          <div className="right">
            <img src={ModalImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowModal;
