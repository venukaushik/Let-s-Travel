import React, { useState, useEffect } from "react";
import "./Modal.css";
import ShowModal from "./ShowModal";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [hasModalBeenShown, setHasModalBeenShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasModalBeenShown && window.pageYOffset > 900) {
        setShowModal(true);
        setHasModalBeenShown(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasModalBeenShown]);

  //checking is the modal has been shown or not through sessionStorage
  useEffect(() => {
    const modalShown = sessionStorage.getItem("hasModalBeenShown");
    if (modalShown) {
      setHasModalBeenShown(true);
    }
  }, [hasModalBeenShown]);

  //setting the value of modal as true when found in sessionStorage
  useEffect(() => {
    if (hasModalBeenShown) {
      localStorage.setItem("hasModalBeenShown", true);
    }
  }, [hasModalBeenShown]);

  const closeModal = () => {
    setShowModal(false);
  };

  return <>{showModal && <ShowModal closeModal={closeModal} />}</>;
};

export default Modal;
