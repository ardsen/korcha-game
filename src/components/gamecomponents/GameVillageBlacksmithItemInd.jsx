import { useState } from "react";
import styles from "./GameContentStatistics.module.css";
function GameVillageBlacksmithItemInd({
  name,
  ap,
  mp,
  requiredLvl,
  criticalRate,
  img,
  grade,
  price,
  currentAccount,
  itemType,
  sellPrice,
  setCurrentAccount,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBought, setIsBought] = useState(false);
  const handleBuyItem = () => {
    setCurrentAccount((prevAccount) => ({
      ...prevAccount,
      coin: currentAccount.coin - price,
    }));
    currentAccount.inventory.push({
      itemType,
      name,
      ap,
      mp,
      criticalRate,
      img,
      grade,
      price,
      requiredLvl,
      id: Date.now() + Math.floor(Math.random() * 1000000),
      sellPrice,
    });
    setIsBought(true);
    setTimeout(() => {
      setIsBought(false);
    }, 1000);
  };
  return (
    <div
      className={
        (grade === "Common" && styles.itemIndCommon) ||
        (grade === "Rare" && styles.itemIndRare) ||
        (grade === "Epic" && styles.itemIndEpic) ||
        (grade === "Unique" && styles.itemIndUnique)
      }
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <img src={img} alt="" style={{ width: "100%", cursor: "pointer" }} />
      {isOpen && (
        <div className={styles.itemDetails}>
          <div className={styles.itemImg}>
            <img src={img} alt="" />
          </div>
          <div className={styles.itemInfo}>
            <h3
              className={
                (grade === "Common" && styles.itemDetailsCommon) ||
                (grade === "Rare" && styles.itemDetailsRare) ||
                (grade === "Epic" && styles.itemDetailsEpic) ||
                (grade === "Unique" && styles.itemDetailsUnique)
              }
            >
              {name}
            </h3>
            <p>Attack Power: {ap}</p>
            <p>Magic Power: {mp}</p>
            <p>Critical Chance: {criticalRate}%</p>
            <p>Required Level: {requiredLvl}</p>
            <h4
              className={
                (grade === "Common" && styles.itemDetailsCommon) ||
                (grade === "Rare" && styles.itemDetailsRare) ||
                (grade === "Epic" && styles.itemDetailsEpic) ||
                (grade === "Unique" && styles.itemDetailsUnique)
              }
            >
              <b>* {grade} item *</b>
            </h4>
            <h4
              className={
                (price <= currentAccount.coin && styles.itemPriceOk) ||
                (price > currentAccount.coin && styles.itemPriceNot)
              }
            >
              Price:&nbsp;
              <span>{price}</span>
              <img src="/coin-vector2.svg" alt="" className="coin" />
            </h4>
            <button
              onClick={handleBuyItem}
              className={
                (currentAccount.inventory.length >= 24 &&
                  styles.shopBuyButtonNot) ||
                (price <= currentAccount.coin && styles.shopBuyButton) ||
                (price > currentAccount.coin && styles.shopBuyButtonNot)
              }
            >
              {`${
                (currentAccount.inventory.length >= 24 && "Inventory Full") ||
                (price <= currentAccount.coin && "Buy Item") ||
                (price > currentAccount.coin && "Insufficient Gold")
              }`}
            </button>
            {isBought && (
              <div className={styles.itemBought}>
                <p>Item added to your inventory</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default GameVillageBlacksmithItemInd;
