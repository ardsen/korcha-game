// import { useState } from "react";
import { useState } from "react";
import styles from "./GameContent.module.css";
import GameContentAvatar from "./GameContentAvatar";
import GameContentInventory from "./GameContentInventory";
import GameContentStatistics from "./GameContentStatistics";
import GameVillageArmorShop from "./GameVillageArmorShop";
import GameVillageBlacksmithPage from "./GameVillageBlacksmithPage";
import GameVillageElderPage from "./GameVillageElderPage";
import GameVillageMagicShop from "./GameVillageMagicShop";
import GameVillageMerchantPage from "./GameVillageMerchantPage";
import GamePlayFirstMap from "./GamePlayFirstMap";
import GamePlaySecondMap from "./GamePlaySecondMap";
function GameContent({
  currentAccount,
  setCurrentAccount,
  itemList,
  armorList,
  isLiActiveStatistics,
  isLiActiveInventory,
  isLiActiveElder,
  isLiActiveMerchant,
  isLiActiveBlacksmith,
  isLiActiveMagicShop,
  isLiActiveWorkshop,
  blacksmithVillageItemList,
  merchantVillageItemList,
  armorshopVillageItemList,
  magicVillageItemList,
  isLiActiveCityMayor,
  isLiActiveCityMerchant,
  isLiActiveCityBlacksmith,
  isLiActiveCityMagic,
  isLiActiveCityWorkshop,
  isLiActiveFirstMap,
  isLiActiveSecondMap,
  blacksmithCityItemList,
  armorshopCityItemList,
  magicCityItemList,
  setExp,
  levelsArray,
  inGameRemainStats,
  setInGameRemainStats,
  setIsLevelUp,
}) {
  const [weaponSlot, setWeaponSlot] = useState(currentAccount.equippedItem);
  const [armorSlot, setArmorSlot] = useState(currentAccount.equippedArmor);

  return (
    <div className={styles.gameContent}>
      {isLiActiveStatistics && (
        <>
          <GameContentStatistics
            currentAccount={currentAccount}
            setCurrentAccount={setCurrentAccount}
            itemList={itemList}
            armorList={armorList}
            levelsArray={levelsArray}
            inGameRemainStats={inGameRemainStats}
            setInGameRemainStats={setInGameRemainStats}
            setIsLevelUp={setIsLevelUp}
          />

          <GameContentAvatar currentAccount={currentAccount} width="100%" />
        </>
      )}
      {isLiActiveInventory && (
        <>
          <GameContentInventory
            currentAccount={currentAccount}
            setWeaponSlot={setWeaponSlot}
            setCurrentAccount={setCurrentAccount}
            weaponSlot={weaponSlot}
            armorSlot={armorSlot}
            setArmorSlot={setArmorSlot}
            setExp={setExp}
          />
          <GameContentAvatar
            currentAccount={currentAccount}
            width="70%"
            weaponSlot={weaponSlot}
            inventoryPage={true}
            armorSlot={armorSlot}
            setWeaponSlot={setWeaponSlot}
            setArmorSlot={setArmorSlot}
          />
        </>
      )}
      {isLiActiveElder && (
        <GameVillageElderPage
          img={
            currentAccount.race === "orc"
              ? "url(/elder.png)"
              : "url(humanelder.jpg)"
          }
        />
      )}
      {isLiActiveMerchant && (
        <GameVillageMerchantPage
          merchantVillageItemList={merchantVillageItemList}
          currentAccount={currentAccount}
          setCurrentAccount={setCurrentAccount}
          img={
            currentAccount.race === "orc"
              ? "url(/merchant.png)"
              : "url(/humanvillagemerchant.jpg)"
          }
        />
      )}
      {isLiActiveBlacksmith && (
        <GameVillageBlacksmithPage
          blacksmithVillageItemList={blacksmithVillageItemList}
          currentAccount={currentAccount}
          img={
            currentAccount.race === "orc"
              ? "url(/blacksmith.jpg)"
              : "url(/humanblacksmithvillage.png)"
          }
          setCurrentAccount={setCurrentAccount}
        />
      )}
      {isLiActiveMagicShop && (
        <GameVillageMagicShop
          magicVillageItemList={magicVillageItemList}
          currentAccount={currentAccount}
          img={
            currentAccount.race === "orc"
              ? "url(/magicshopvillage.png)"
              : "url(humanvillagemagicshop.jpg)"
          }
          setCurrentAccount={setCurrentAccount}
        />
      )}
      {isLiActiveWorkshop && (
        <GameVillageArmorShop
          armorshopVillageItemList={armorshopVillageItemList}
          currentAccount={currentAccount}
          img={
            currentAccount.race === "orc"
              ? "url(/armorshop.jpg)"
              : "url(humanarmorshopvillage.jpg)"
          }
          setCurrentAccount={setCurrentAccount}
        />
      )}
      {isLiActiveCityMayor && (
        <GameVillageElderPage
          img={
            currentAccount.race === "orc"
              ? "url(/citymayor.png)"
              : "url(/humanmayor.jpg)"
          }
        />
      )}
      {isLiActiveCityMerchant && (
        <GameVillageMerchantPage
          merchantVillageItemList={merchantVillageItemList}
          currentAccount={currentAccount}
          setCurrentAccount={setCurrentAccount}
          img={
            currentAccount.race === "orc"
              ? "url(/citymerchant.png)"
              : "url(/humancitymerchant.jpg)"
          }
        />
      )}
      {isLiActiveCityBlacksmith && (
        <GameVillageBlacksmithPage
          currentAccount={currentAccount}
          blacksmithVillageItemList={blacksmithCityItemList}
          img={
            currentAccount.race === "orc"
              ? "url(/cityblacksmith.png)"
              : "url(/humanblacksmithcity.jpg)"
          }
          setCurrentAccount={setCurrentAccount}
        />
      )}
      {isLiActiveCityMagic && (
        <GameVillageMagicShop
          currentAccount={currentAccount}
          magicVillageItemList={magicCityItemList}
          img={
            currentAccount.race === "orc"
              ? "url(/magicshop.jpg)"
              : "url(/humancitymagicshop.jpg)"
          }
          setCurrentAccount={setCurrentAccount}
        />
      )}{" "}
      {isLiActiveCityWorkshop && (
        <GameVillageArmorShop
          currentAccount={currentAccount}
          armorshopVillageItemList={armorshopCityItemList}
          img={
            currentAccount.race === "orc"
              ? "url(/cityarmorshop.png)"
              : "url(/humancityarmorshop.jpg)"
          }
          setCurrentAccount={setCurrentAccount}
        />
      )}
      {isLiActiveFirstMap && <GamePlayFirstMap />}
      {isLiActiveSecondMap && <GamePlaySecondMap />}
    </div>
  );
}

export default GameContent;
