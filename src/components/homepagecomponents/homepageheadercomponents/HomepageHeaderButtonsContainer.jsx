import HomepageHeaderButtons from "./HomepageHeaderButtons";

function HomepageHeaderButtonsContainer({
  setIsInfoContainerOpen,
  setIsSupportContainerOpen,
  setIsSignUpContainerOpen,
}) {
  const handleOpenInfo = () => setIsInfoContainerOpen(true);
  const handleOpenSupport = () => setIsSupportContainerOpen(true);
  const handleOpenSignUp = () => setIsSignUpContainerOpen(true);
  return (
    <div className="btn-container">
      <HomepageHeaderButtons
        className="signup-button"
        openHandler={handleOpenSignUp}
      />
      <HomepageHeaderButtons
        className="support-button"
        openHandler={handleOpenSupport}
      />
      <HomepageHeaderButtons
        className="info-button"
        openHandler={handleOpenInfo}
      />
    </div>
  );
}

export default HomepageHeaderButtonsContainer;
