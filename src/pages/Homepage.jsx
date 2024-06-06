// import { Link } from "react-router-dom";
import "../style/homepage.css";
import { useState } from "react";
import HomepageHeader from "../components/homepagecomponents/homepageheadercomponents/HomepageHeader";
import HomepageMain from "../components/homepagecomponents/homepagemaincomponents/HomepageMain";
function Homepage({
  user,
  currentAccount,
  setCurrentAccount,
  setUser,
  itemList,
  exp,
  level,
}) {
  const [isInfoContainerOpen, setIsInfoContainerOpen] = useState(false);
  const [isSupportContainerOpen, setIsSupportContainerOpen] = useState(false);
  const [isSignUpContainerOpen, setIsSignUpContainerOpen] = useState(false);

  const overlayHandler = function () {
    setIsInfoContainerOpen(false);
    setIsSupportContainerOpen(false);
    setIsSignUpContainerOpen(false);
  };
  return (
    <>
      {" "}
      <HomepageHeader
        setIsInfoContainerOpen={setIsInfoContainerOpen}
        setIsSupportContainerOpen={setIsSupportContainerOpen}
        setIsSignUpContainerOpen={setIsSignUpContainerOpen}
      />
      <HomepageMain
        user={user}
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
        isInfoContainerOpen={isInfoContainerOpen}
        setIsInfoContainerOpen={setIsInfoContainerOpen}
        isSupportContainerOpen={isSupportContainerOpen}
        setIsSupportContainerOpen={setIsSupportContainerOpen}
        isSignUpContainerOpen={isSignUpContainerOpen}
        setIsSignUpContainerOpen={setIsSignUpContainerOpen}
        setUser={setUser}
        itemList={itemList}
        exp={exp}
        level={level}
      />
      <div
        className={`overlay ${
          isInfoContainerOpen || isSupportContainerOpen || isSignUpContainerOpen
            ? ""
            : "hidden"
        }`}
        onClick={overlayHandler}
      ></div>
    </>
  );
}

export default Homepage;
