import styles from "./GameContentStatistics.module.css";
import GameVillageBlacksmithItemInd from "./GameVillageBlacksmithItemInd";
function GameVillageBlacksmithShop({
  blacksmithVillageItemList,
  currentAccount,
  setCurrentAccount,
}) {
  return (
    <div className={styles.shopInventory}>
      {blacksmithVillageItemList.map((weapon) => (
        <GameVillageBlacksmithItemInd
          setCurrentAccount={setCurrentAccount}
          key={weapon.id}
          img={weapon.img}
          name={weapon.name}
          ap={weapon.ap}
          mp={weapon.mp}
          requiredLvl={weapon.requiredLvl}
          criticalRate={weapon.criticalRate}
          grade={weapon.grade}
          price={weapon.price}
          currentAccount={currentAccount}
          itemType={weapon.itemType}
          sellPrice={weapon.sellPrice}
        />
      ))}
      <div
        style={{
          fontSize: "20px",
          fontWeight: "600",
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
          color: "var(--color-text)",
        }}
      >
        <img src="/coin-vector2.svg" alt="" className="coin" />
        {Math.trunc(currentAccount.coin)}
      </div>
    </div>
  );
}

export default GameVillageBlacksmithShop;
