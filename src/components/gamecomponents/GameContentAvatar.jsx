import { useState } from "react";
import styles from "./GameContentStatistics.module.css";

function GameContentAvatar({
  currentAccount,
  width,
  weaponSlot,
  inventoryPage,
  armorSlot,
  setWeaponSlot,
  setArmorSlot,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isArmorOpen, setIsArmorOpen] = useState(false);

  const handleUnequipWeapon = function () {
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
  };
  const handleUnequipArmor = function () {
    setArmorSlot({
      id: 1112,
      itemType: "armor",
      name: "Cloth",
      physDef: 3,
      magDef: 3,
      healthBonus: 10,
      requiredLvl: 1,
      grade: "Empty",
      img: "/cloth.png",
    });
  };
  return (
    <div className={styles.avatarCont}>
      <img
        className={styles.avatarImg}
        src={currentAccount.img}
        alt=""
        style={{
          textAlign: "end",
          width: width,
          // borderBottom: "5px solid black",
          // boxShadow: "50px 13px 200px 100px black",
        }}
      />
      {inventoryPage && (
        <div className={styles.equippedItemCont}>
          <div>
            <div
              className={
                (weaponSlot?.grade === "Common" && styles.itemIndCommon) ||
                (weaponSlot?.grade === "Rare" && styles.itemIndRare) ||
                (weaponSlot?.grade === "Epic" && styles.itemIndEpic) ||
                (weaponSlot?.grade === "Unique" && styles.itemIndUnique) ||
                (weaponSlot?.grade === "Empty" && styles.itemIndEmpty)
              }
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              {weaponSlot && (
                <img
                  src={weaponSlot?.img}
                  alt=""
                  width="100%"
                  style={{ cursor: "pointer" }}
                />
              )}
              {isOpen && (
                <div className={styles.itemDetailsEquipped}>
                  <img src={weaponSlot?.img} alt="" width="100%" />
                  <h3
                    className={
                      (weaponSlot?.grade === "Common" &&
                        styles.itemDetailsCommon) ||
                      (weaponSlot?.grade === "Rare" &&
                        styles.itemDetailsRare) ||
                      (weaponSlot?.grade === "Epic" &&
                        styles.itemDetailsEpic) ||
                      (weaponSlot?.grade === "Unique" &&
                        styles.itemDetailsUnique) ||
                      (weaponSlot.grade === "Empty" && styles.itemDetailsEmpty)
                    }
                  >
                    {weaponSlot?.name}
                  </h3>
                  <p>Attack Power: {weaponSlot?.ap}</p>
                  <p>Magic Power: {weaponSlot?.mp}</p>
                  <h4
                    className={
                      (weaponSlot?.grade === "Common" &&
                        styles.itemDetailsCommon) ||
                      (weaponSlot?.grade === "Rare" &&
                        styles.itemDetailsRare) ||
                      (weaponSlot?.grade === "Epic" &&
                        styles.itemDetailsEpic) ||
                      (weaponSlot?.grade === "Unique" &&
                        styles.itemDetailsUnique) ||
                      (weaponSlot.grade === "Empty" && styles.itemDetailsEmpty)
                    }
                  >
                    {weaponSlot.name === "Fist" ||
                      `* ${weaponSlot?.grade} item *`}
                  </h4>
                  {weaponSlot.name !== "Fist" && (
                    <button
                      style={{
                        fontSize: "20px",
                        marginTop: "0",
                        width: "8rem",
                      }}
                      className={styles.shopBuyButton}
                      onClick={handleUnequipWeapon}
                    >
                      Unequip
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
          <div>
            <div
              className={
                (armorSlot.grade === "Common" && styles.itemIndCommon) ||
                (armorSlot.grade === "Rare" && styles.itemIndRare) ||
                (armorSlot.grade === "Epic" && styles.itemIndEpic) ||
                (armorSlot.grade === "Unique" && styles.itemIndUnique) ||
                (armorSlot.grade === "Empty" && styles.itemIndEmpty)
              }
              onMouseEnter={() => setIsArmorOpen(true)}
              onMouseLeave={() => setIsArmorOpen(false)}
            >
              {armorSlot && (
                <img
                  src={armorSlot.img}
                  alt=""
                  width="100%"
                  style={{ cursor: "pointer" }}
                />
              )}
              {isArmorOpen && (
                <div className={styles.itemDetailsEquippedArmor}>
                  <img src={armorSlot.img} alt="" width="100%" />
                  <h3
                    className={
                      (armorSlot.grade === "Common" &&
                        styles.itemDetailsCommon) ||
                      (armorSlot.grade === "Rare" && styles.itemDetailsRare) ||
                      (armorSlot.grade === "Epic" && styles.itemDetailsEpic) ||
                      (armorSlot.grade === "Unique" &&
                        styles.itemDetailsUnique) ||
                      (armorSlot.grade === "Empty" && styles.itemDetailsEmpty)
                    }
                  >
                    {armorSlot.name}
                  </h3>
                  <p>Phys. Defence: {armorSlot.physDef}</p>
                  <p>Mag. Defence: {armorSlot.magDef}</p>
                  <h4
                    className={
                      (armorSlot.grade === "Common" &&
                        styles.itemDetailsCommon) ||
                      (armorSlot.grade === "Rare" && styles.itemDetailsRare) ||
                      (armorSlot.grade === "Epic" && styles.itemDetailsEpic) ||
                      (armorSlot.grade === "Unique" &&
                        styles.itemDetailsUnique) ||
                      (armorSlot.grade === "Empty" && styles.itemDetailsEmpty)
                    }
                  >
                    {armorSlot.name === "Cloth" ||
                      `* ${armorSlot?.grade} item *`}
                  </h4>
                  {armorSlot.name !== "Cloth" && (
                    <button
                      style={{
                        fontSize: "20px",
                        marginTop: "0",
                        width: "8rem",
                      }}
                      className={styles.shopBuyButton}
                      onClick={handleUnequipArmor}
                    >
                      Unequip
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameContentAvatar;
