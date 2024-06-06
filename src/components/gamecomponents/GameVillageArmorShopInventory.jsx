import styles from "./GameContentStatistics.module.css";
import GameVillageArmorShopInventoryIndItem from "./GameVillageArmorShopInventoryIndItem";

function GameVillageArmorShopInventory({
  armorshopVillageItemList,
  currentAccount,
  setCurrentAccount,
}) {
  return (
    <div className={styles.shopInventory}>
      {armorshopVillageItemList.map((armor) => (
        <GameVillageArmorShopInventoryIndItem
          key={armor.id}
          name={armor.name}
          physDef={armor.physDef}
          magDef={armor.magDef}
          healthBonus={armor.healthBonus}
          img={armor.img}
          grade={armor.grade}
          price={armor.price}
          currentAccount={currentAccount}
          requiredLvl={armor.requiredLvl}
          itemType={armor.type}
          sellPrice={armor.sellPrice}
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

export default GameVillageArmorShopInventory;
