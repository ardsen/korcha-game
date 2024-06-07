import { useEffect, useState } from "react";
import HomepageLoginContainer from "./HomepageLoginContainer";
import HomepageLogo from "./HomepageLogo";
import HomepageInfoContainer from "./HomepageInfoContainer";
import HomepageContactContainer from "./HomepageContactContainer";
import HomepageSignupContainer from "./HomepageSignupContainer";
import DevNotes from "./DevNotes";

function HomepageMain({
  user,
  currentAccount,
  setCurrentAccount,
  isInfoContainerOpen,
  setIsInfoContainerOpen,
  isSupportContainerOpen,
  setIsSupportContainerOpen,
  isSignUpContainerOpen,
  setIsSignUpContainerOpen,
  setUser,
  itemList,
  exp,
  level,
}) {
  const [count, setCount] = useState(0);
  const [isDevNotes, setIsDevNotes] = useState(true)
  useEffect(() => {
    const changeImg = setInterval(() => {
      setCount((count) => count + 1);
    }, 4500);
    return () => clearInterval(changeImg);
  }, [count]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDevNotes(false);
    }, 15000); 
    return () => clearTimeout(timer);
  }, []);
  return (
    <main
      className="homepage-main"
      style={{ backgroundImage: `url(/homepage-bg${count % 3}.png)` }}
    >
      <HomepageLoginContainer
        user={user}
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      />
      <HomepageInfoContainer
        isInfoContainerOpen={isInfoContainerOpen}
        setIsInfoContainerOpen={setIsInfoContainerOpen}
      />
      <HomepageContactContainer
        isSupportContainerOpen={isSupportContainerOpen}
        setIsSupportContainerOpen={setIsSupportContainerOpen}
      />
      <HomepageSignupContainer
        isSignUpContainerOpen={isSignUpContainerOpen}
        setIsSignUpContainerOpen={setIsSignUpContainerOpen}
        setUser={setUser}
        itemList={itemList}
        exp={exp}
        level={level}
        user={user}
      />
      {isDevNotes && <DevNotes setIsDevNotes = {setIsDevNotes}/>}
      <HomepageLogo />
    </main>
  );
}

export default HomepageMain;
