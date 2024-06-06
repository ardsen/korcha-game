import styles from "./GameContent.module.css";
import GameVillageMagicShopInventory from "./GameVillageMagicShopInventory";

function GameVillageMagicShop({
  magicVillageItemList,
  currentAccount,
  img,
  setCurrentAccount,
}) {
  return (
    <div className={styles.elderPageWrapper}>
      <div
        className={styles.magicShopImg}
        style={{ backgroundImage: img }}
      ></div>
      <GameVillageMagicShopInventory
        magicVillageItemList={magicVillageItemList}
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      />
      .
    </div>
  );
}

export default GameVillageMagicShop;
