// import React from "react";

export default function DevNotes({ setIsDevNotes }) {
  return (
    <>
      <div className="dev-notes-wrapper">
        <div className="dev-notes-container">
          <p>
            Developer note: This website is still under development. No back-end
            has been applied to this project yet, so data will be erased upon
            refresh or closure. However, you can still test the game by signing
            up with a new username and password, or simply signing in with ID:
            test and password: test1234. <br /> All the images on this project
            has generated with AI.
          </p>
          <div className="level-up-timer-container">
            <div className="level-up-timer animation-dev-notes"></div>
          </div>
          <button onClick={() => setIsDevNotes(false)}>Confirm</button>
        </div>
      </div>
      <div className="overlay"></div>
    </>
  );
}
