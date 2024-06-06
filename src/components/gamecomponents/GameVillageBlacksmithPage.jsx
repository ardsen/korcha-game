import styles from "./GameContent.module.css";
import GameVillageBlacksmithShop from "./GameVillageBlacksmithShop";

function GameVillageBlacksmithPage({
  blacksmithVillageItemList,
  currentAccount,
  setCurrentAccount,
  img,
}) {
  return (
    <div className={styles.elderPageWrapper}>
      <div
        className={styles.blacksmithPageImg}
        style={{ backgroundImage: img }}
      ></div>
      <GameVillageBlacksmithShop
        blacksmithVillageItemList={blacksmithVillageItemList}
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      />
    </div>
  );
}

export default GameVillageBlacksmithPage;
