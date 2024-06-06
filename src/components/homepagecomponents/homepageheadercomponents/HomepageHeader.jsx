import { Link } from "react-router-dom";
import HomepageHeaderButtonsContainer from "./HomepageHeaderButtonsContainer";

function HomepageHeader({
  setIsInfoContainerOpen,
  setIsSupportContainerOpen,
  setIsSignUpContainerOpen,
}) {
  return (
    <header className="homepage-header">
      <h2>
        <Link to="/"> Korcha </Link>
      </h2>
      <HomepageHeaderButtonsContainer
        setIsInfoContainerOpen={setIsInfoContainerOpen}
        setIsSupportContainerOpen={setIsSupportContainerOpen}
        setIsSignUpContainerOpen={setIsSignUpContainerOpen}
      />
    </header>
  );
}

export default HomepageHeader;
