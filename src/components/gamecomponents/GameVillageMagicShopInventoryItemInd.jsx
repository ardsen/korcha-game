import { useState } from "react";
import styles from "./GameContentStatistics.module.css";

function GameVillageMagicShopInventoryItemInd({
  name,
  description,
  img,
  price,
  staminaCost,
  currentAccount,
  sellPrice,
  itemType,
  setCurrentAccount,
  damage,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBought, setIsBought] = useState(false);

  const handleBuyItem = () => {
    setCurrentAccount((prevAccount) => ({
      ...prevAccount,
      coin: currentAccount.coin - price,
    }));

    currentAccount.inventory.push({
      name,
      img,
      price,
      staminaCost,
      id: Date.now() + Math.floor(Math.random() * 1000000),
      sellPrice,
      itemType,
      description,
      damage,
    });
    setIsBought(true);
    setTimeout(() => {
      setIsBought(false);
    }, 1000);
  };
  return (
    <div
      className={styles.itemIndMagic}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <img src={img} style={{ width: "100%", cursor: "pointer" }}></img>
      {isOpen && (
        <div className={styles.itemDetailsMagicShop}>
          <div className={styles.itemImg}>
            <img src={img} alt="" />
          </div>
          <div className={styles.itemInfo}>
            <h3>{name}</h3>
            <p>{description}</p>
            <br />
            <p>Stamina Consume: {staminaCost}</p>
            <br />
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

export default GameVillageMagicShopInventoryItemInd;
