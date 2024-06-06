import styles from "./GameContent.module.css";
import GameVillageArmorShopInventory from "./GameVillageArmorShopInventory";

function GameVillageArmorShop({
  armorshopVillageItemList,
  currentAccount,
  img,
  setCurrentAccount,
}) {
  return (
    <div className={styles.elderPageWrapper}>
      <div
        className={styles.armorShopImg}
        style={{ backgroundImage: img }}
      ></div>
      <GameVillageArmorShopInventory
        armorshopVillageItemList={armorshopVillageItemList}
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      />
    </div>
  );
}

export default GameVillageArmorShop;
