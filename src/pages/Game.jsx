// import { useEffect } from "react";
// import { useEffect } from "react";
// import { useLayoutEffect } from "react";

import GameHeader from "../components/gamecomponents/GameHeader";
import GameMain from "../components/gamecomponents/GameMain";

function Game({
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
  return (
    <>
      <GameHeader currentAccount={currentAccount} />
      <GameMain
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
        itemList={itemList}
        armorList={armorList}
        blacksmithVillageItemList={blacksmithVillageItemList}
        merchantVillageItemList={merchantVillageItemList}
        armorshopVillageItemList={armorshopVillageItemList}
        magicVillageItemList={magicVillageItemList}
        blacksmithCityItemList={blacksmithCityItemList}
        armorshopCityItemList={armorshopCityItemList}
        magicCityItemList={magicCityItemList}
        setExp={setExp}
        levelsArray={levelsArray}
        inGameRemainStats={inGameRemainStats}
        setInGameRemainStats={setInGameRemainStats}
        isLevelUp={isLevelUp}
        setIsLevelUp={setIsLevelUp}
      />
    </>
  );
}

export default Game;
