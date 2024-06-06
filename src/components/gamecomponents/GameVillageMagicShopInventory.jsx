import styles from "./GameContentStatistics.module.css";
import GameVillageMagicShopInventoryItemInd from "./GameVillageMagicShopInventoryItemInd";
function GameVillageMagicShopInventory({
  currentAccount,
  magicVillageItemList,
  setCurrentAccount,
}) {
  return (
    <div className={styles.shopInventory}>
      {magicVillageItemList.map((spell) => (
        <GameVillageMagicShopInventoryItemInd
          key={spell.id}
          currentAccount={currentAccount}
          name={spell.name}
          img={spell.img}
          description={spell.description}
          price={spell.price}
          staminaCost={spell.staminaConsume}
          sellPrice={spell.sellPrice}
          itemType={spell.itemType}
          setCurrentAccount={setCurrentAccount}
          damage={spell.damage}
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

export default GameVillageMagicShopInventory;
