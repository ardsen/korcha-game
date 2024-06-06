import { useState, useEffect } from "react";
import styles from "./GameContentStatistics.module.css";
import GameContentStatisticsStats from "./GameContentStatisticsStats";
function GameContentStatistics({
  currentAccount,
  setCurrentAccount,
  // itemList,
  levelsArray,
  inGameRemainStats,
  setInGameRemainStats,
  setIsLevelUp,
}) {
  const statsButtonValidation = true;
  const [statValueHp, setStatValueHp] = useState(currentAccount.hp);
  const [statValueEnd, setStatValueEnd] = useState(currentAccount.end);
  const [statValueStr, setStatValueStr] = useState(currentAccount.str);
  const [statValueInt, setStatValueInt] = useState(currentAccount.int);
  const [statValueAgi, setStatValueAgi] = useState(currentAccount.agi);

  let curExp = currentAccount.exp - levelsArray[currentAccount.level - 2];
  let expNeeded =
    levelsArray[currentAccount.level - 1] -
    levelsArray[currentAccount.level - 2];

  let expPercentage = ((curExp * 100) / expNeeded).toFixed(2);
  const confirmButtonHandler = () => {
    setCurrentAccount((prevAccount) => ({
      ...prevAccount,
      hp: `${Number(statValueHp)}`,
      end: `${Number(statValueEnd)}`,
      str: `${Number(statValueStr)}`,
      int: `${Number(statValueInt)}`,
      agi: `${Number(statValueAgi)}`,
      ap: `${Math.trunc(
        (Number(statValueStr) * 0.8 + Number(statValueAgi) * 0.6) *
          Number(currentAccount.equippedItem?.ap * 0.4)
      )}`,
      magP: `${Math.trunc(
        (Number(statValueInt) + Number(statValueAgi) * 0.4) *
          Number(currentAccount.equippedItem?.mp * 0.4)
      )}`,
      physDef: `${Math.trunc(
        Number(statValueStr) * 1 +
          Number(statValueInt) * 0.5 +
          Number(statValueAgi) * 0.5 +
          Number(statValueHp) * 1.5 +
          Number(statValueEnd) * 0.5 +
          Number(currentAccount.equippedArmor.physDef)
      )}`,
      magDef: `${Math.trunc(
        Number(statValueInt) * 1 +
          Number(statValueAgi) * 0.5 +
          Number(statValueStr) * 0.5 +
          Number(statValueHp) * 1 +
          Number(statValueEnd) * 1 +
          Number(currentAccount.equippedArmor.magDef)
      )}`,
      health: `${Number(
        Math.trunc(
          Number(statValueHp) * 100 + currentAccount?.equippedArmor?.healthBonus
        )
      )}`,
      remainHealth: `${Math.trunc(
        Number(statValueHp) * 100 + currentAccount?.equippedArmor?.healthBonus
      )}`,
      stamina: `${Math.trunc(
        Number(statValueEnd) * 100 +
          Number(statValueInt) * 50 +
          Number(statValueAgi) * 25
      )}`,
      remainStamina: `${Math.trunc(
        Number(statValueEnd) * 100 +
          Number(statValueInt) * 50 +
          Number(statValueAgi) * 25
      )}`,

      criticalChance: `${Math.trunc(
        Number(currentAccount.equippedItem?.criticalRate)
      )}`,
      criticalDamage: `${(1.75 + Number(statValueAgi) * 0.05).toFixed(2)}`,
    }));
  };
  useEffect(
    () => {
      confirmButtonHandler();
      setTimeout(() => setIsLevelUp(false), 2000);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // const re mainStatsHandler = function () {
  //   if (curExp > 100)
  //     setInGameRemainStats((inGameRemainStats) => inGameRemainStats + 3);
  //   if (curExp > 300)
  //     setInGameRemainStats((inGameRemainStats) => inGameRemainStats + 3);
  //   if (curExp > 600)
  //     setInGameRemainStats((inGameRemainStats) => inGameRemainStats + 3);
  //   if (curExp > 1500)
  //     setInGameRemainStats((inGameRemainStats) => inGameRemainStats + 3);
  //   if (curExp > 3500)
  //     setInGameRemainStats((inGameRemainStats) => inGameRemainStats + 3);
  //   if (curExp > 10000)
  //     setInGameRemainStats((inGameRemainStats) => inGameRemainStats + 3);
  //   if (curExp > 14500)
  //     setInGameRemainStats((inGameRemainStats) => inGameRemainStats + 3);
  //   if (curExp > 20000)
  //     setInGameRemainStats((inGameRemainStats) => inGameRemainStats + 3);
  // };
  // useEffect(() => {
  //   remainStatsHandler;
  // }, [curExp, currentAccount.level]);
  return (
    <div className={styles.statisticsWrapper}>
      <div className={styles.statsContainer}>
        <div className={styles.remainStats}>
          &nbsp;Remain Stats:{" "}
          <input
            type="text"
            value={inGameRemainStats}
            onChange={(e) => e.target.value}
          />
        </div>
        <GameContentStatisticsStats
          statValue={statValueHp}
          setStatValue={setStatValueHp}
          setInGameRemainStats={setInGameRemainStats}
          inGameRemainStats={inGameRemainStats}
          currentAccount={currentAccount}
          statName={"hp"}
        >
          hp&nbsp;:
        </GameContentStatisticsStats>
        <GameContentStatisticsStats
          setInGameRemainStats={setInGameRemainStats}
          inGameRemainStats={inGameRemainStats}
          currentAccount={currentAccount}
          statValue={statValueEnd}
          setStatValue={setStatValueEnd}
          statName={"end"}
        >
          end:
        </GameContentStatisticsStats>
        <GameContentStatisticsStats
          setInGameRemainStats={setInGameRemainStats}
          inGameRemainStats={inGameRemainStats}
          currentAccount={currentAccount}
          statValue={statValueStr}
          setStatValue={setStatValueStr}
          statName={"str"}
        >
          str:
        </GameContentStatisticsStats>
        <GameContentStatisticsStats
          setInGameRemainStats={setInGameRemainStats}
          inGameRemainStats={inGameRemainStats}
          currentAccount={currentAccount}
          statValue={statValueInt}
          setStatValue={setStatValueInt}
          statName={"int"}
        >
          int:
        </GameContentStatisticsStats>
        <GameContentStatisticsStats
          statsButtonValidation={statsButtonValidation}
          setInGameRemainStats={setInGameRemainStats}
          inGameRemainStats={inGameRemainStats}
          currentAccount={currentAccount}
          statValue={statValueAgi}
          setStatValue={setStatValueAgi}
          statName={"agi"}
        >
          agi:
        </GameContentStatisticsStats>
        <button
          className={styles.statsConfirmButton}
          onClick={confirmButtonHandler}
        >
          Confirm
        </button>
      </div>
      <div className={styles.statisticsContainer}>
        <p style={{ fontSize: "24px" }}>LEVEL: {currentAccount.level}</p>

        <div
          style={{
            width: "14rem",
            height: "2rem",
            backgroundColor: "rgba(0, 0, 0, 0.500)",
            border: "5px white groove",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              position: "relative",
              zIndex: "1000",
              color: "white",
              textShadow: "1px 1px 5px black",
            }}
          >
            {curExp ? expPercentage : 0}%
          </span>
          <div
            style={{
              height: "100%",
              width: `${expPercentage}%`,
              backgroundColor: "rgb(240, 173, 51)",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          ></div>
        </div>
        <p>
          Experience Point: {curExp ? curExp : 0}/{expNeeded ? expNeeded : 100}
        </p>
        <br />
        <p>Health: {currentAccount.health}</p>
        <p>Stamina: {currentAccount.stamina}</p>
        <p>Pyshical Attack Power: {currentAccount.ap}</p>
        <p>Magical Attack Power: {currentAccount.magP}</p>
        <p>
          Critical damage: {Math.round(currentAccount.criticalDamage * 100)}%
        </p>
        <p>Critical chance: {currentAccount.criticalChance}%</p>
        <p>Pyshical Defence: {currentAccount.physDef}</p>
        <p>Magical Defence: {currentAccount.magDef}</p>
      </div>
    </div>
  );
}

export default GameContentStatistics;
