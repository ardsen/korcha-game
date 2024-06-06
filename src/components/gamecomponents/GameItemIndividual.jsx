import { useEffect, useState } from "react";
import styles from "./GameContentStatistics.module.css";
function GameItemIndividual({
  src,
  itemName,
  ap,
  mp,
  requiredLvl,
  criticalRate,
  itemType,
  physDef,
  magDef,
  healthBonus,
  description,
  grade,
  setWeaponSlot,
  setCurrentAccount,
  weaponSlot,
  armorSlot,
  setArmorSlot,
  currentAccount,
  sellPrice,
  id,
  staminaCost,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleEquipWeapon = () => {
    setWeaponSlot({
      ap,
      criticalRate,
      grade,
      img: src,
      itemType,
      mp,
      requiredLvl,
      name: itemName,
      id,
    });
  };
  const handleEquipArmor = () => {
    setArmorSlot({
      grade,
      healthBonus,
      physDef,
      magDef,
      requiredLvl,
      name: itemName,
      img: src,
      id,
    });
  };
  const handleSellItem = () => {
    // const deletedItem = currentAccount.inventory.filter(
    //   (item) => item.id === id
    // );
    const newArray = currentAccount.inventory.filter((item) => item.id !== id);
    currentAccount.coin += sellPrice;
    setCurrentAccount((prevAccount) => ({
      ...prevAccount,
      inventory: newArray,
    }));
    if (weaponSlot.id === id) {
      setWeaponSlot({
        id: 1111,
        itemType: "weapon",
        name: "Fist",
        ap: 3,
        mp: 3,
        requiredLvl: 1,
        criticalRate: 10,
        img: "/fist.png",
        grade: "Empty",
      });
    }
    if (armorSlot.id === id) {
      setArmorSlot({
        id: 1112,
        itemType: "armor",
        name: "Cloth",
        physDef: 3,
        healthBonus: 10,
        magDef: 3,
        requiredLvl: 1,
        grade: "Empty",
        img: "/cloth.png",
      });
      setCurrentAccount((prevAccount) => ({
        ...prevAccount,
        health: `${Number(
          Math.trunc(
            currentAccount.hp * 100 + currentAccount.equippedArmor?.healthBonus
          )
        )}`,
      }));
    }
  };

  useEffect(() => {
    setCurrentAccount((prevAccount) => ({
      ...prevAccount,
      equippedItem: weaponSlot,
      equippedArmor: armorSlot,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weaponSlot, armorSlot]);
  return (
    <div
      className={
        (itemType === "merchandise" && styles.itemIndMerchandise) ||
        (itemType === "spell" && styles.itemIndMagic) ||
        (grade === "Common" && styles.itemIndCommon) ||
        (grade === "Rare" && styles.itemIndRare) ||
        (grade === "Epic" && styles.itemIndEpic) ||
        (grade === "Unique" && styles.itemIndUnique)
      }
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <img src={src} alt="" style={{ width: "100%", cursor: "pointer" }} />
      {itemType === "weapon"
        ? isOpen && (
            <div className={styles.itemDetails}>
              <div className={styles.itemImg}>
                <img src={src} alt="" />
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
                  {itemName}
                </h3>
                <p>Attack Power: {ap}</p>
                <p>Attack Power: {mp}</p>
                <p>Critical Chance: {criticalRate}%</p>
                <p
                  className={
                    currentAccount.level < requiredLvl
                      ? styles.requiredLevelNot
                      : styles.requiredLevelOk
                  }
                >
                  Required Level: {requiredLvl}
                </p>
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
                <button
                  className={
                    currentAccount.equippedItem?.name === itemName ||
                    currentAccount.level < requiredLvl
                      ? styles.shopBuyButtonNot
                      : styles.shopBuyButton
                  }
                  onClick={handleEquipWeapon}
                >
                  {(currentAccount.equippedItem?.name === itemName &&
                    "Equipped") ||
                    (currentAccount.level < requiredLvl &&
                      "Level requirement") ||
                    "Equip"}
                </button>
                <button
                  className={styles.shopBuyButton}
                  onClick={handleSellItem}
                >
                  Sell for <img src="coin-vector2.svg" className="coin"></img>
                  {sellPrice}
                </button>
              </div>
            </div>
          )
        : ""}
      {itemType === "armor"
        ? isOpen && (
            <div className={styles.itemDetails}>
              <div className={styles.itemImg}>
                <img src={src} alt="" />
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
                  {itemName}
                </h3>
                <p>Physical Defence: {physDef} </p>
                <p>Magical Defence: {magDef}</p>
                <p>Health Bonus: +{healthBonus}</p>
                <p
                  className={
                    currentAccount.level < requiredLvl
                      ? styles.requiredLevelNot
                      : styles.requiredLevelOk
                  }
                >
                  Required Level: {requiredLvl}
                </p>
                <h4
                  className={
                    (grade === "Common" && styles.itemDetailsCommon) ||
                    (grade === "Rare" && styles.itemDetailsRare) ||
                    (grade === "Epic" && styles.itemDetailsEpic) ||
                    (grade === "Unique" && styles.itemDetailsUnique)
                  }
                >
                  <b>* {grade} item * </b>
                </h4>
                <button
                  className={
                    currentAccount.equippedArmor.name === itemName ||
                    currentAccount.level < requiredLvl
                      ? styles.shopBuyButtonNot
                      : styles.shopBuyButton
                  }
                  onClick={handleEquipArmor}
                >
                  {(currentAccount.equippedArmor.name === itemName &&
                    "Equipped") ||
                    (currentAccount.level < requiredLvl &&
                      "Level requirement") ||
                    "Equip"}
                </button>
                <button
                  className={styles.shopBuyButton}
                  onClick={handleSellItem}
                >
                  Sell for <img src="coin-vector2.svg" className="coin"></img>
                  {sellPrice}
                </button>
              </div>
            </div>
          )
        : ""}
      {itemType === "merchandise" && isOpen ? (
        <div className={styles.itemDetailsMerchandise}>
          <div className={styles.itemImg}>
            <img src={src} alt="" />
          </div>
          <h3>{itemName}</h3>
          <p>{description}</p>
        </div>
      ) : (
        ""
      )}
      {itemType === "spell" && isOpen ? (
        <div className={styles.itemDetailsMagicShop}>
          <div className={styles.itemImg}>
            <img src={src} alt="" />
          </div>
          <div className={styles.itemInfo}>
            <h3>{itemName}</h3>
            <p>{description}</p>
            <br />
            <p>Stamina Consume: {staminaCost}</p>
            <br />
            <button className={styles.shopBuyButton} onClick={handleSellItem}>
              Sell for <img src="coin-vector2.svg" className="coin"></img>
              {sellPrice}
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default GameItemIndividual;
