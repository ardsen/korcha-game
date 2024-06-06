// import { useState } from "react";

function HomepageContactContainer({
  isSupportContainerOpen,
  setIsSupportContainerOpen,
}) {
  return (
    <div
      className={`support-container ${isSupportContainerOpen ? "" : "hidden"}`}
    >
      <button
        className="close-support-btn"
        onClick={() => setIsSupportContainerOpen(false)}
      >
        &times;
      </button>
      <h3>✉ Send Us a Message</h3>
      <form action="#" className="support-form">
        <div className="first-name-container">
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" placeholder="Enter your name" />
        </div>
        <div className="email-container">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your e-mail"
          />
        </div>
        <div className="message-container">
          <label htmlFor="msg">Your Message</label>
          <textarea
            name="msg"
            id="msg"
            cols="30"
            rows="4"
            placeholder="Enter your message"
            style={{ backgroundColor: "#faf9df" }}
          ></textarea>
        </div>
        <input type="submit" value="Send your message" className="submit-btn" />
      </form>
    </div>
  );
}

export default HomepageContactContainer;
