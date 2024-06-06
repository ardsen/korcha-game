function CustomizationSectionsHumanButtons({
  children,
  isButtonActive,
  setIsButtonActive,
}) {
  return (
    <button
      className={`btn btn-birth-human ${
        isButtonActive ? "active-button-human" : ""
      }`}
      onClick={setIsButtonActive}
    >
      {children}
    </button>
  );
}

export default CustomizationSectionsHumanButtons;
