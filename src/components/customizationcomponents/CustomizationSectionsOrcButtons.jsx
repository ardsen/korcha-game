// import { useState } from "react";

function CustomizationSectionsOrcButtons({
  children,
  setIsButtonActive,
  isButtonActive,
}) {
  return (
    <button
      className={`btn btn-birth ${isButtonActive ? "active-button" : ""}`}
      onClick={setIsButtonActive}
    >
      {children}
    </button>
  );
}

export default CustomizationSectionsOrcButtons;
