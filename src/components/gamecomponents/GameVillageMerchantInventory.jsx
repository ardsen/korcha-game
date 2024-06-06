import styles from "./GameContentStatistics.module.css";
import GameVillageMerchantItemInd from "./GameVillageMerchantItemInd";

function GameVillageMerchantInventory({
  merchantVillageItemList,
  currentAccount,
  setCurrentAccount,
}) {
  return (
    <div className={styles.shopInventory}>
      {merchantVillageItemList.map((item) => (
        <GameVillageMerchantItemInd
          key={item.id}
          name={item.name}
          description={item.description}
          img={item.img}
          setCurrentAccount={setCurrentAccount}
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

export default GameVillageMerchantInventory;
