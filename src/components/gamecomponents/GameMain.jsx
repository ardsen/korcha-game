import { useState } from "react";
import GameContent from "./GameContent";
import styles from "./GameMain.module.css";
import GameNav from "./GameNav";

function GameMain({
  currentAccount,
  setCurrentAccount,
  itemList,
  armorList,
  blacksmithVillageItemList,
  merchantVillageItemList,
  armorshopVillageItemList,
  magicVillageItemList,
  blacksmithCityItemList,
  armorshopCityItemList,
  magicCityItemList,
  setExp,
  levelsArray,
  inGameRemainStats,
  setInGameRemainStats,
  isLevelUp,
  setIsLevelUp,
}) {
  const [isLiActiveStatistics, setIsLiActiveStatistics] = useState(true);
  const [isLiActiveInventory, setIsLiActiveInventory] = useState(false);
  const [isLiActiveElder, setIsLiActiveElder] = useState(false);
  const [isLiActiveMerchant, setIsLiActiveMerchant] = useState(false);
  const [isLiActiveBlacksmith, setIsLiActiveBlacksmith] = useState(false);
  const [isLiActiveMagicShop, setIsLiActiveMagicShop] = useState(false);
  const [isLiActiveWorkshop, setIsLiActiveWorkshop] = useState(false);
  const [isLiActiveCityMayor, setIsLiActiveCityMayor] = useState(false);
  const [isLiActiveCityMerchant, setIsLiActiveCityMerchant] = useState(false);
  const [isLiActiveCityBlacksmith, setIsLiActiveCityBlacksmith] =
    useState(false);
  const [isLiActiveCityMagic, setIsLiActiveCityMagic] = useState(false);
  const [isLiActiveCityWorkshop, setIsLiActiveCityWorkshop] = useState(false);
  const [isLiActiveFirstMap, setIsLiActiveFirstMap] = useState(false);
  const [isLiActiveSecondMap, setIsLiActiveSecondMap] = useState(false);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <GameNav
            isLiActiveStatistics={isLiActiveStatistics}
            setIsLiActiveStatistics={setIsLiActiveStatistics}
            isLiActiveInventory={isLiActiveInventory}
            setIsLiActiveInventory={setIsLiActiveInventory}
            isLiActiveElder={isLiActiveElder}
            setIsLiActiveElder={setIsLiActiveElder}
            isLiActiveMerchant={isLiActiveMerchant}
            setIsLiActiveMerchant={setIsLiActiveMerchant}
            isLiActiveBlacksmith={isLiActiveBlacksmith}
            setIsLiActiveBlacksmith={setIsLiActiveBlacksmith}
            isLiActiveMagicShop={isLiActiveMagicShop}
            setIsLiActiveMagicShop={setIsLiActiveMagicShop}
            isLiActiveWorkshop={isLiActiveWorkshop}
            setIsLiActiveWorkshop={setIsLiActiveWorkshop}
            isLiActiveCityMayor={isLiActiveCityMayor}
            setIsLiActiveCityMayor={setIsLiActiveCityMayor}
            isLiActiveCityMerchant={isLiActiveCityMerchant}
            setIsLiActiveCityMerchant={setIsLiActiveCityMerchant}
            isLiActiveCityBlacksmith={isLiActiveCityBlacksmith}
            setIsLiActiveCityBlacksmith={setIsLiActiveCityBlacksmith}
            isLiActiveCityMagic={isLiActiveCityMagic}
            setIsLiActiveCityMagic={setIsLiActiveCityMagic}
            isLiActiveCityWorkshop={isLiActiveCityWorkshop}
            setIsLiActiveCityWorkshop={setIsLiActiveCityWorkshop}
            isLiActiveFirstMap={isLiActiveFirstMap}
            setIsLiActiveFirstMap={setIsLiActiveFirstMap}
            isLiActiveSecondMap={isLiActiveSecondMap}
            setIsLiActiveSecondMap={setIsLiActiveSecondMap}
            inGameRemainStats={inGameRemainStats}
          />
          <GameContent
            currentAccount={currentAccount}
            setCurrentAccount={setCurrentAccount}
            itemList={itemList}
            armorList={armorList}
            isLiActiveStatistics={isLiActiveStatistics}
            isLiActiveInventory={isLiActiveInventory}
            isLiActiveElder={isLiActiveElder}
            isLiActiveMerchant={isLiActiveMerchant}
            isLiActiveBlacksmith={isLiActiveBlacksmith}
            isLiActiveMagicShop={isLiActiveMagicShop}
            isLiActiveWorkshop={isLiActiveWorkshop}
            blacksmithVillageItemList={blacksmithVillageItemList}
            merchantVillageItemList={merchantVillageItemList}
            armorshopVillageItemList={armorshopVillageItemList}
            magicVillageItemList={magicVillageItemList}
            isLiActiveCityMayor={isLiActiveCityMayor}
            isLiActiveCityMerchant={isLiActiveCityMerchant}
            isLiActiveCityBlacksmith={isLiActiveCityBlacksmith}
            isLiActiveCityMagic={isLiActiveCityMagic}
            isLiActiveCityWorkshop={isLiActiveCityWorkshop}
            isLiActiveFirstMap={isLiActiveFirstMap}
            isLiActiveSecondMap={isLiActiveSecondMap}
            blacksmithCityItemList={blacksmithCityItemList}
            armorshopCityItemList={armorshopCityItemList}
            magicCityItemList={magicCityItemList}
            setExp={setExp}
            levelsArray={levelsArray}
            inGameRemainStats={inGameRemainStats}
            setInGameRemainStats={setInGameRemainStats}
            setIsLevelUp={setIsLevelUp}
          />
        </div>
        {isLevelUp && (
          <>
            <div className={styles.onLevelUp}>
              <p>Level up! You&apos;ve reached level {currentAccount.level}.</p>
              <p>You have earned 3 stat points.</p>
              <div className={styles.levelUpTimerContainer}>
                <div
                  className={`${styles.levelUpTimer} ${styles.animationTimerLevelUp}`}
                ></div>
              </div>
              <button
                className={styles.confirmButton}
                onClick={() => setIsLevelUp(false)}
              >
                Confirm
              </button>
            </div>
            <div className="overlay"></div>
          </>
        )}
      </main>
    </>
  );
}

export default GameMain;
