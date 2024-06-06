// import { useState } from "react";
import HomepageInfoButtonContainer from "./HomepageInfoButtonContainer";

function HomepageInfoContainer({
  isInfoContainerOpen,
  setIsInfoContainerOpen,
}) {
  return (
    <section
      className={`info-hidden-section ${isInfoContainerOpen ? "" : "hidden"}`}
    >
      <div className="homepage-info-container">
        <button
          className="close-info-btn"
          style={{ borderRadius: "5px" }}
          onClick={() => setIsInfoContainerOpen(false)}
        >
          &times;
        </button>
        <HomepageInfoButtonContainer />{" "}
      </div>
    </section>
  );
}

export default HomepageInfoContainer;
