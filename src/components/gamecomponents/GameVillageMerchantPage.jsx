import styles from "./GameContent.module.css";
import GameVillageMerchantInventory from "./GameVillageMerchantInventory";
function GameVillageMerchantPage({
  merchantVillageItemList,
  currentAccount,
  setCurrentAccount,
  img,
}) {
  return (
    <div className={styles.elderPageWrapper}>
      <div
        className={styles.merchantPageImg}
        style={{ backgroundImage: img }}
      ></div>
      <GameVillageMerchantInventory
        merchantVillageItemList={merchantVillageItemList}
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      />
      <div className={styles.overlayUnderDev}>
        <p>This page is under development...</p>
        <span className={`${styles.loading} ${styles.animationLoading}`}></span>
      </div>
    </div>
  );
}

export default GameVillageMerchantPage;
