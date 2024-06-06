import { useState } from "react";
import styles from "./GamePlay.module.css";
function EnemyAvatar({ currentEnemy, attackEffect, attackEffectX }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={styles.enemyAvatar}>
        <img src={currentEnemy.img} alt="" />
        <div
          className={styles.characterName}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <h3>{currentEnemy.tag}</h3>
          {isOpen && (
            <div className={styles.characterInfo}>
              <p>Physical Attack Power: {currentEnemy.ap}</p>
              <p>Magical Attack Power: {currentEnemy.magP}</p>
              <p>Health: {currentEnemy.health}</p>
              <p>Physical Defence: {currentEnemy.physDef}</p>
              <p>Magic Defence: {currentEnemy.magDef}</p>
            </div>
          )}
        </div>
        {attackEffect && (
          <>
            <div className={`${styles.attackEffect} animation-attackx`}></div>
            <div className="overlay"></div>
          </>
        )}
        {attackEffectX && (
          <div className={`${styles.attackEffect2} animation-attacky`}></div>
        )}{" "}
      </div>
    </>
  );
}

export default EnemyAvatar;
