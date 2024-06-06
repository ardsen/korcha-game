import { useState } from "react";
import styles from "./GameNav.module.css";
import GameNavLi from "./GameNavLi";
import GameNavInsideLi from "./GameNavInsideLi";

function GameNav({
  isLiActiveElder,
  setIsLiActiveElder,
  isLiActiveMerchant,
  setIsLiActiveMerchant,
  isLiActiveBlacksmith,
  setIsLiActiveBlacksmith,
  isLiActiveMagicShop,
  setIsLiActiveMagicShop,
  isLiActiveWorkshop,
  setIsLiActiveWorkshop,
  isLiActiveStatistics,
  setIsLiActiveStatistics,
  isLiActiveInventory,
  setIsLiActiveInventory,
  isLiActiveCityMayor,
  setIsLiActiveCityMayor,
  isLiActiveCityMerchant,
  setIsLiActiveCityMerchant,
  isLiActiveCityBlacksmith,
  setIsLiActiveCityBlacksmith,
  isLiActiveCityMagic,
  setIsLiActiveCityMagic,
  isLiActiveCityWorkshop,
  setIsLiActiveCityWorkshop,
  isLiActiveFirstMap,
  setIsLiActiveFirstMap,
  isLiActiveSecondMap,
  setIsLiActiveSecondMap,
  inGameRemainStats,
}) {
  const [isCharacterButtonOpen, setIsCharacterButtonOpen] = useState(true);
  const [isVillageButtonOpen, setIsVillageButtonOpen] = useState(false);
  const [isCityButtonOpen, setIsCityButtonOpen] = useState(false);
  const [isWorldButtonOpen, setIsWorldButtonOpen] = useState(false);
  // const [isLiActiveElder, setIsLiActiveElder] = useState(true);
  // const [isLiActiveMerchant, setIsLiActiveMerchant] = useState(false);
  // const [isLiActiveBlacksmith, setIsLiActiveBlacksmith] = useState(false);
  // const [isLiActiveMagicShop, setIsLiActiveMagicShop] = useState(false);
  // const [isLiActiveWorkshop, setIsLiActiveWorkshop] = useState(false);

  const liArray = [
    setIsLiActiveStatistics,
    setIsLiActiveInventory,
    setIsLiActiveElder,
    setIsLiActiveMerchant,
    setIsLiActiveBlacksmith,
    setIsLiActiveMagicShop,
    setIsLiActiveWorkshop,
    setIsLiActiveCityMayor,
    setIsLiActiveCityMerchant,
    setIsLiActiveCityBlacksmith,
    setIsLiActiveCityMagic,
    setIsLiActiveCityWorkshop,
    setIsLiActiveFirstMap,
    setIsLiActiveSecondMap,
  ];

  const liHandler = function (e) {
    liArray.forEach((setLi) => {
      setLi(false);
    });
    liArray[e.target.dataset.number](true);
  };
  // const styleObj = {
  //   fontWeight: "600",
  //   fontSize: "1.4rem",
  //   display: "flex",
  //   flexDirection: "column",
  //   padding: "0.4rem",
  //   textAlign: "end",
  //   color: "var(--color-burgundy-dark)",
  //   gap: ".5rem",
  //   ":hover": {
  //     color: "white",
  //     backgroundColor: "white",
  //   },
  // };

  return (
    <div className={styles.navContainer}>
      <ul className={styles.navContainerUl}>
        <div
          className={styles.navLiParchment}
          style={{
            backgroundImage: "url(/parchment-bg3.png)",
          }}
        >
          <GameNavLi
            setIsButtonOpen={setIsCharacterButtonOpen}
            isButtonOpen={isCharacterButtonOpen}
            inGameRemainStats={inGameRemainStats}
          >
            Character
            {(isCharacterButtonOpen && "-") || (!isCharacterButtonOpen && "+")}
          </GameNavLi>
          {isCharacterButtonOpen && (
            <ul className={`${styles.insideNav} animation-left-to-right-short`}>
              <GameNavInsideLi
                isLiActive={isLiActiveStatistics}
                setIsLiActive={liHandler}
                number={0}
              >
                Statistics
              </GameNavInsideLi>
              <GameNavInsideLi
                isLiActive={isLiActiveInventory}
                setIsLiActive={liHandler}
                number={1}
              >
                Inventory
              </GameNavInsideLi>
            </ul>
          )}
        </div>
        <div style={{ backgroundImage: "url(/parchment-bg3.png)" }}>
          <GameNavLi
            setIsButtonOpen={setIsVillageButtonOpen}
            isButtonOpen={isVillageButtonOpen}
          >
            Village&nbsp;&nbsp;
            {(isVillageButtonOpen && "-") || (!isVillageButtonOpen && "+")}
          </GameNavLi>
          {isVillageButtonOpen && (
            <ul className={`${styles.insideNav} animation-left-to-right-short`}>
              <GameNavInsideLi
                isLiActive={isLiActiveElder}
                setIsLiActive={liHandler}
                number={2}
              >
                Elder
              </GameNavInsideLi>
              <GameNavInsideLi
                isLiActive={isLiActiveMerchant}
                setIsLiActive={liHandler}
                number={3}
              >
                Merchant
              </GameNavInsideLi>
              <GameNavInsideLi
                isLiActive={isLiActiveBlacksmith}
                setIsLiActive={liHandler}
                number={4}
              >
                Blacksmith
              </GameNavInsideLi>
              <GameNavInsideLi
                isLiActive={isLiActiveMagicShop}
                setIsLiActive={liHandler}
                number={5}
              >
                Magic Shop
              </GameNavInsideLi>
              <GameNavInsideLi
                isLiActive={isLiActiveWorkshop}
                setIsLiActive={liHandler}
                number={6}
              >
                Armor Shop
              </GameNavInsideLi>
            </ul>
          )}
        </div>

        <div style={{ backgroundImage: "url(/parchment-bg3.png)" }}>
          <GameNavLi
            setIsButtonOpen={setIsCityButtonOpen}
            isButtonOpen={isCityButtonOpen}
          >
            City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {(isCityButtonOpen && "-") || (!isCityButtonOpen && "+")}
          </GameNavLi>
          {isCityButtonOpen && (
            <ul className={`${styles.insideNav} animation-left-to-right-short`}>
              <GameNavInsideLi
                isLiActive={isLiActiveCityMayor}
                setIsLiActive={liHandler}
                number={7}
              >
                Mayor
              </GameNavInsideLi>
              <GameNavInsideLi
                isLiActive={isLiActiveCityMerchant}
                setIsLiActive={liHandler}
                number={8}
              >
                Merchant
              </GameNavInsideLi>
              <GameNavInsideLi
                isLiActive={isLiActiveCityBlacksmith}
                setIsLiActive={liHandler}
                number={9}
              >
                Blacksmith
              </GameNavInsideLi>
              <GameNavInsideLi
                isLiActive={isLiActiveCityMagic}
                setIsLiActive={liHandler}
                number={10}
              >
                Magic Shop
              </GameNavInsideLi>
              <GameNavInsideLi
                isLiActive={isLiActiveCityWorkshop}
                setIsLiActive={liHandler}
                number={11}
              >
                Armor Shop
              </GameNavInsideLi>
            </ul>
          )}
        </div>

        <div style={{ backgroundImage: "url(/parchment-bg3.png)" }}>
          <GameNavLi
            setIsButtonOpen={setIsWorldButtonOpen}
            isButtonOpen={isWorldButtonOpen}
          >
            World&nbsp;&nbsp;&nbsp;&nbsp;
            {(isWorldButtonOpen && "-") || (!isWorldButtonOpen && "+")}
          </GameNavLi>
          {isWorldButtonOpen && (
            <ul className={`${styles.insideNav} animation-left-to-right-short`}>
              <GameNavInsideLi
                isLiActive={isLiActiveFirstMap}
                setIsLiActive={liHandler}
                number={12}
              >
                Evergreen
              </GameNavInsideLi>
              <GameNavInsideLi
                isLiActive={isLiActiveSecondMap}
                setIsLiActive={liHandler}
                number={13}
              >
                Highlands
              </GameNavInsideLi>
            </ul>
          )}
        </div>
      </ul>
    </div>
  );
}

export default GameNav;
