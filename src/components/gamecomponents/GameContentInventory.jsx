// import { useEffect } from "react";
import { useEffect } from "react";
import styles from "./GameContentStatistics.module.css";
import GameItemIndividual from "./GameItemIndividual";

function GameContentInventory({
  currentAccount,
  setWeaponSlot,
  setCurrentAccount,
  weaponSlot,
  armorSlot,
  setArmorSlot,
  setExp,
}) {
  useEffect(
    () =>
      setCurrentAccount((prevAccount) => ({
        ...prevAccount,
        ap: Math.trunc(
          (currentAccount.str * 0.8 + currentAccount.agi * 0.6) *
            (currentAccount.equippedItem?.ap * 0.4)
        ),
        magP: `${Math.trunc(
          (Number(currentAccount.int) + currentAccount.agi * 0.4) *
            (currentAccount.equippedItem?.mp * 0.4)
        )}`,
        physDef: `${Math.trunc(
          currentAccount.str * 1 +
            currentAccount.int * 0.5 +
            currentAccount.agi * 0.5 +
            currentAccount.hp * 1.5 +
            currentAccount.end * 0.5 +
            currentAccount.equippedArmor.physDef
        )}`,
        magDef: `${Math.trunc(
          currentAccount.int * 1 +
            currentAccount.agi * 0.5 +
            currentAccount.str * 0.5 +
            currentAccount.hp * 1 +
            currentAccount.end * 1 +
            currentAccount.equippedArmor.magDef
        )}`,
        health: `${Number(
          Math.trunc(
            currentAccount.hp * 100 + currentAccount?.equippedArmor?.healthBonus
          )
        )}`,
        remainHealth: `${Math.trunc(
          currentAccount.hp * 100 + currentAccount?.equippedArmor?.healthBonus
        )}`,
        stamina: `${Math.trunc(
          currentAccount.end * 100 +
            currentAccount.int * 50 +
            currentAccount.agi * 25
        )}`,
        remainStamina: `${Math.trunc(
          currentAccount.end * 100 +
            currentAccount.int * 50 +
            currentAccount.agi * 25
        )}`,
        criticalChance: `${Math.trunc(
          currentAccount.equippedItem?.criticalRate
        )}`,
        criticalDamage: `${(1.75 + currentAccount.agi * 0.05).toFixed(2)}`,
      })),

    [
      currentAccount.equippedItem,
      currentAccount.str,
      currentAccount.agi,
      setCurrentAccount,
      currentAccount.hp,
      currentAccount.equippedArmor.healthBonus,
      currentAccount.end,
      currentAccount.int,
      currentAccount.equippedArmor.magDef,
      currentAccount.equippedArmor.physDef,
    ]
  );

  return (
    <div className={styles.inventoryWrapper}>
      <p className={styles.inventoryTopic}>
        Inventory {currentAccount.inventory.length}/24
      </p>

      <div className={styles.inventoryContainer}>
        {currentAccount.inventory.map((item) => (
          <GameItemIndividual
            key={item.id}
            id={item.id}
            itemName={item.name}
            itemType={item.itemType}
            src={item.img}
            ap={item.ap}
            mp={item.mp}
            requiredLvl={item.requiredLvl}
            criticalRate={item.criticalRate}
            physDef={item.physDef}
            magDef={item.magDef}
            healthBonus={item.healthBonus}
            description={item.description}
            grade={item.grade}
            sellPrice={item.sellPrice}
            setWeaponSlot={setWeaponSlot}
            setCurrentAccount={setCurrentAccount}
            weaponSlot={weaponSlot}
            armorSlot={armorSlot}
            setArmorSlot={setArmorSlot}
            setExp={setExp}
            currentAccount={currentAccount}
            staminaCost={item.staminaCost}
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
    </div>
  );
}

export default GameContentInventory;
