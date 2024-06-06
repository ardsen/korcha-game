// import { useState } from "react";
import styles from "./GameContentStatisticsStats.module.css";

function GameContentStatisticsStats({
  children,
  setInGameRemainStats,
  inGameRemainStats,
  currentAccount,
  statValue,
  setStatValue,
  statName,
}) {
  const statPlusHandler = function () {
    if (inGameRemainStats <= 0) return;
    setInGameRemainStats(inGameRemainStats - 1);
    setStatValue(Number(statValue) + 1);
  };
  const statMinusHandler = function () {
    if (statValue <= currentAccount[statName]) return;
    setInGameRemainStats(inGameRemainStats + 1);
    setStatValue(statValue - 1);
  };

  return (
    <>
      <div className={styles.individualStatContainer}>
        <button onClick={statMinusHandler}>-</button>
        <div className={styles.inputContainer}>
          <label htmlFor="stat">{children}</label>
          <input
            type="text"
            value={Number(statValue)}
            onChange={(e) => e.target.value}
          />
        </div>
        <button onClick={statPlusHandler}>+</button>
      </div>
    </>
  );
}

export default GameContentStatisticsStats;
