import { useState } from "react";

function CustomizationRaceSelection({
  setIsOrc,
  isOrc,
  isHuman,
  setIsHuman,
  setIsFirstSelected,
  setIsSecondSelected,
  setIsFirstSelectedHuman,
  setIsSecondSelectedHuman,
  setIsStatSectionOpen,
  currentAccount,
  setIsStatSectionOpenOrc,
}) {
  const [isOrcOpen, setIsOrcOpen] = useState(false);
  const [isHumanOpen, setIsHumanOpen] = useState(false);
  const handlerOrc = () => {
    setIsHumanOpen(false);
    setIsOrcOpen(!isOrcOpen);
    setIsOrc(!isOrc);
    setIsHuman(false);
    setIsFirstSelected(false);
    setIsSecondSelected(false);
    setIsFirstSelectedHuman(false);
    setIsSecondSelectedHuman(false);
    setIsStatSectionOpen(false);
    setIsStatSectionOpenOrc(false);
    currentAccount.hp = 5;
    currentAccount.end = 5;
    currentAccount.str = 5;
    currentAccount.int = 5;
    currentAccount.agi = 5;
    currentAccount.race = "orc";
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  const handlerHuman = () => {
    setIsOrcOpen(false);
    setIsHumanOpen(!isHumanOpen);
    setIsOrc(false);
    setIsHuman(!isHuman);
    setIsFirstSelected(false);
    setIsSecondSelected(false);
    setIsFirstSelectedHuman(false);
    setIsSecondSelectedHuman(false);
    setIsStatSectionOpen(false);
    setIsStatSectionOpenOrc(false);

    currentAccount.hp = 5;
    currentAccount.end = 5;
    currentAccount.str = 5;
    currentAccount.int = 5;
    currentAccount.agi = 5;
    currentAccount.race = "human";
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <section className="race-selection">
      <div
        className={`orc-race-container ${isOrcOpen ? "active-container" : ""}`}
        onClick={handlerOrc}
      >
        <img src="/orc-selection-bg.png" alt="" />
        <h1>Orc</h1>
        <span></span>
      </div>
      <div
        className={`human-race-container ${
          isHumanOpen ? "active-container-h" : ""
        }`}
        onClick={handlerHuman}
      >
        <span></span>
        <h1>Human</h1>
        <img src="/human-selection-bg.png" alt="" />
      </div>
    </section>
  );
}

export default CustomizationRaceSelection;
