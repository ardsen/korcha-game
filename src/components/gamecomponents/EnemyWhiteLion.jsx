import styles from "./GamePlay.module.css";
import GameHeader from "./GameHeader";
import AttackMenu from "./AttackMenu";
import EnemyAvatar from "./EnemyAvatar";
import EnemyHealthBar from "./EnemyHealthBar";
import EnemyStaminaBar from "./EnemyStaminaBar";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function EnemyWhiteLion({
  currentAccount,
  setCurrentAccount,
  exp,
  setExp,
  levelsArray,
  setInGameRemainStats,
  // inGameRemainStats,
  setIsLevelUp,
}) {
  const [attackEffect, setIsAttackEffect] = useState(false);
  const [attackEffectX, setIsAttackEffectX] = useState(false);
  const [pointerNone, setPointerNone] = useState(false);
  const [onWin, setOnWin] = useState(false);
  const [onDefeat, setOnDefeat] = useState(false);
  const [isCharacterInfoOpen, setIsCharacterInfoOpen] = useState(false);
  const [direwolf, setDireWolf] = useState({
    tag: "White Lion",
    ap: 25,
    magP: 85,
    physDef: 30,
    magDef: 40,
    health: 1000,
    stamina: 0,
    criticalChance: 0,
    criticalDamage: 0,
    remainHealth: 1000,
    remainStamina: 0,
    img: "/whitelion.png",
    loot: 180,
    expGained: 330,
  });
  const [isStaminaEnough, setIsStaminaEnough] = useState(false);
  const [isStaminaEnoughStrong, setIsStaminaEnoughStrong] = useState(false);
  const [isStaminaEnoughCrush, setIsStaminaEnoughCrush] = useState(false);
  const [damageTimeout, setDamageTimeout] = useState();
  const myElementRef = useRef(null);
  let randomNumberBasicAttack =
    Math.floor(Math.random() * (100 - 70) + 70) / 100;
  let randomNumberBasicAttackStrong =
    Math.floor(Math.random() * (150 - 120) + 120) / 100;
  let randomNumberCrit = Math.floor(Math.random() * 100);
  let critMultiplier =
    randomNumberCrit < currentAccount.criticalChance
      ? currentAccount.criticalDamage
      : 1;

  const confirmHandler = function () {
    setExp(exp + direwolf.expGained);
    currentAccount.coin += direwolf.loot;
    currentAccount.remainHealth = currentAccount.health;
    if (
      currentAccount.exp + direwolf.expGained >=
      levelsArray[currentAccount.level - 1]
    ) {
      setInGameRemainStats((x) => x + 3);
      setIsLevelUp(true);
    }
  };
  const confirmHandlerDefeat = function () {
    currentAccount.coin -= currentAccount.coin * 0.2;
    currentAccount.remainHealth = currentAccount.health;
  };

  const restHandler = () => {
    if (currentAccount.stamina <= currentAccount.remainStamina) return;
    setPointerNone(true);

    setCurrentAccount((prevAccount) => ({
      ...prevAccount,
      remainStamina:
        currentAccount.remainStamina +
        (currentAccount.stamina - currentAccount.remainStamina) * 0.3,
    }));
    document
      .querySelector("#status")
      .insertAdjacentHTML(
        "afterbegin",
        `<p style = "background-color : rgb(20, 30, 241)">${Math.trunc(
          (currentAccount.stamina - currentAccount.remainStamina) * 0.3
        )} stamina recovered.</p>`
      );
    const timeout = setTimeout(() => {
      setCurrentAccount((prevAccount) => ({
        ...prevAccount,
        remainHealth:
          prevAccount.remainHealth -
          Math.trunc(direwolf.magP * randomNumberBasicAttack) -
          (direwolf.magP - currentAccount.magDef) / 300,
      }));

      document
        .querySelector("#status")
        .insertAdjacentHTML(
          "afterbegin",
          `<p>${Math.trunc(
            direwolf.magP * randomNumberBasicAttack -
              (direwolf.magP - currentAccount.magDef) / 300
          )} magical damage received.</p>`
        );
      setPointerNone(false);
    }, 2000);

    setDamageTimeout(timeout);
  };

  const attackHandler = function () {
    if (direwolf.remainHealth <= 0) return;
    setDireWolf((prevAccount) => ({
      ...prevAccount,
      remainHealth:
        prevAccount.remainHealth -
        Math.trunc(
          critMultiplier * currentAccount.ap * randomNumberBasicAttack -
            (currentAccount.ap * direwolf.physDef) / 300
        ),
    }));
    setCurrentAccount((prevAccount) => ({
      ...prevAccount,
      remainStamina: prevAccount.remainStamina - 50,
    }));
    setPointerNone(true);
    setIsAttackEffect(true);
    setTimeout(() => setIsAttackEffectX(true), 200);
    document.querySelector("#status").insertAdjacentHTML(
      "afterbegin",
      `<p style = "background-color : rgb(0, 71, 0)">${Math.trunc(
        critMultiplier * currentAccount.ap * randomNumberBasicAttack -
          (currentAccount.ap * direwolf.physDef) / 300
      )} damage dealt.
        ${
          critMultiplier > 1
            ? '<span style="background-color: rgb(171, 30, 30); color: wheat; font-size: larger; padding: 0.1rem 0.3rem; border-radius:2px">CRIT.</span>'
            : ""
        }
        </p>`
    );
    const timeout = setTimeout(() => {
      setCurrentAccount((prevAccount) => ({
        ...prevAccount,
        remainHealth:
          prevAccount.remainHealth -
          Math.trunc(direwolf.magP * randomNumberBasicAttack) -
          (direwolf.magP - currentAccount.magDef) / 300,
      }));

      document
        .querySelector("#status")
        .insertAdjacentHTML(
          "afterbegin",
          `<p>${Math.trunc(
            direwolf.magP * randomNumberBasicAttack -
              (direwolf.magP - currentAccount.magDef) / 300
          )} magical damage received.</p>`
        );
      setPointerNone(false);
    }, 2000);
    setDamageTimeout(timeout);
    setTimeout(() => {
      setIsAttackEffect(false);
      setIsAttackEffectX(false);
    }, 1200);
  };

  const attackHandlerStrong = function () {
    if (direwolf.remainHealth <= 0) return;
    setDireWolf((prevAccount) => ({
      ...prevAccount,
      remainHealth:
        prevAccount.remainHealth -
        Math.trunc(
          critMultiplier * currentAccount.ap * randomNumberBasicAttackStrong -
            (currentAccount.ap * direwolf.physDef) / 300
        ),
    }));
    setCurrentAccount((prevAccount) => ({
      ...prevAccount,
      remainStamina: prevAccount.remainStamina - 250,
    }));
    setPointerNone(true);
    setIsAttackEffect(true);
    setTimeout(() => setIsAttackEffectX(true), 200);
    document.querySelector("#status").insertAdjacentHTML(
      "afterbegin",
      `<p style = "background-color : rgb(0, 71, 0)">${Math.trunc(
        critMultiplier * currentAccount.ap * randomNumberBasicAttackStrong -
          (currentAccount.ap * direwolf.physDef) / 300
      )} damage dealt.
        ${
          critMultiplier > 1
            ? '<span style="background-color: rgb(171, 30, 30); color: wheat; font-size: larger; padding: 0.1rem 0.3rem; border-radius:2px">CRIT.</span>'
            : ""
        }
        </p>`
    );
    const timeout = setTimeout(() => {
      setCurrentAccount((prevAccount) => ({
        ...prevAccount,
        remainHealth:
          prevAccount.remainHealth -
          Math.trunc(direwolf.magP * randomNumberBasicAttack) -
          (direwolf.magP - currentAccount.physDef) / 300,
      }));

      document
        .querySelector("#status")
        .insertAdjacentHTML(
          "afterbegin",
          `<p>${Math.trunc(
            direwolf.magP * randomNumberBasicAttack -
              (direwolf.magP - currentAccount.magDef) / 300
          )} magical damage received.</p>`
        );
      setPointerNone(false);
    }, 2000);
    setDamageTimeout(timeout);
    setTimeout(() => {
      setIsAttackEffect(false);
      setIsAttackEffectX(false);
    }, 1200);
  };
  const attackHandlerCrush = function () {
    if (direwolf.remainHealth <= 0) return;
    setDireWolf((prevAccount) => ({
      ...prevAccount,
      remainHealth:
        prevAccount.remainHealth -
        Math.trunc(
          currentAccount.ap * randomNumberBasicAttack -
            (currentAccount.ap * direwolf.physDef) / 1200
        ),
    }));
    setCurrentAccount((prevAccount) => ({
      ...prevAccount,
      remainStamina: prevAccount.remainStamina - 150,
    }));
    setPointerNone(true);
    setIsAttackEffect(true);
    setTimeout(() => setIsAttackEffectX(true), 200);
    document
      .querySelector("#status")
      .insertAdjacentHTML(
        "afterbegin",
        `<p style = "background-color : rgb(0, 71, 0)">${Math.trunc(
          currentAccount.ap * randomNumberBasicAttack -
            (currentAccount.ap * direwolf.physDef) / 300
        )} damage dealt.</p>`
      );
    const timeout = setTimeout(() => {
      setCurrentAccount((prevAccount) => ({
        ...prevAccount,
        remainHealth:
          prevAccount.remainHealth -
          Math.trunc(direwolf.magP * randomNumberBasicAttack) -
          (direwolf.magP - currentAccount.magDef) / 300,
      }));

      document
        .querySelector("#status")
        .insertAdjacentHTML(
          "afterbegin",
          `<p>${Math.trunc(
            direwolf.magP * randomNumberBasicAttack -
              (direwolf.magP - currentAccount.magDef) / 300
          )} magical damage received.</p>`
        );
      setPointerNone(false);
    }, 2000);
    setDamageTimeout(timeout);
    setTimeout(() => {
      setIsAttackEffect(false);
      setIsAttackEffectX(false);
    }, 1200);
  };

  useEffect(() => {
    if (direwolf.remainHealth <= 0) {
      direwolf.remainHealth = 0;
      clearTimeout(damageTimeout);
      setOnWin(true);
    }
  }, [direwolf.remainHealth, direwolf, damageTimeout]);

  useEffect(() => {
    if (currentAccount.remainHealth <= 0) {
      currentAccount.remainHealth = 0;
      clearTimeout(damageTimeout);
      setOnDefeat(true);
    }
  }, [currentAccount.remainHealth, currentAccount, damageTimeout]);

  useEffect(() => {
    if (currentAccount.remainStamina < 50) {
      setIsStaminaEnough(true);
    } else {
      setIsStaminaEnough(false);
    }
  }, [currentAccount.remainStamina]);

  useEffect(() => {
    if (currentAccount.remainStamina < 250) {
      setIsStaminaEnoughStrong(true);
    } else {
      setIsStaminaEnoughStrong(false);
    }
  }, [currentAccount.remainStamina]);
  useEffect(() => {
    if (currentAccount.remainStamina < 150) {
      setIsStaminaEnoughCrush(true);
    } else {
      setIsStaminaEnoughCrush(false);
    }
  }, [currentAccount.remainStamina]);
  return (
    <div>
      <GameHeader />
      <div className={styles.inGameWrapper}>
        <div className={styles.inGameContainer}>
          <div className={styles.inGameAvatar}>
            <EnemyHealthBar currentAccount={currentAccount} />
            <EnemyStaminaBar currentAccount={currentAccount} />
            <img src={currentAccount.img} alt="" />
            <div
              className={styles.characterName}
              onMouseEnter={() => setIsCharacterInfoOpen(true)}
              onMouseLeave={() => setIsCharacterInfoOpen(false)}
            >
              <h3>{currentAccount.name}</h3>
              {isCharacterInfoOpen && (
                <div className={styles.characterInfo}>
                  <p>Physical Attack Power: {currentAccount.ap}</p>
                  <p>Magical Attack Power: {currentAccount.magP}</p>
                  <p>Health: {currentAccount.health}</p>
                  <p>Physical Defence: {currentAccount.physDef}</p>
                  <p>Magic Defence: {currentAccount.magDef}</p>
                </div>
              )}
            </div>
          </div>
          <div className={`${styles.attackMenuWrapper}`}>
            <AttackMenu
              attackHandler={attackHandler}
              pointerNone={pointerNone}
              attackHandlerStrong={attackHandlerStrong}
              isStaminaEnough={isStaminaEnough}
              isStaminaEnoughStrong={isStaminaEnoughStrong}
              restHandler={restHandler}
              attackHandlerCrush={attackHandlerCrush}
              isStaminaEnoughCrush={isStaminaEnoughCrush}
              currentAccount={currentAccount}
              setIsAttackEffect={setIsAttackEffect}
              setIsAttackEffectX={setIsAttackEffectX}
              setPointerNone={setPointerNone}
              setDireWolf={setDireWolf}
              setCurrentAccount={setCurrentAccount}
              direwolf={direwolf}
              setDamageTimeout={setDamageTimeout}
              myElementRef={myElementRef}
              isMagic={true}
            />
            <div className={styles.attackHistoryContainer}>
              <div className={styles.attackHistoryTopic}>
                <h3>Status History</h3>
              </div>
              <div
                className={styles.statusInd}
                id="status"
                ref={myElementRef}
              ></div>
            </div>
          </div>
          <div className={styles.inGameAvatar}>
            <EnemyHealthBar currentAccount={direwolf} />
            <EnemyStaminaBar currentAccount={direwolf} />
            <EnemyAvatar
              currentEnemy={direwolf}
              attackEffect={attackEffect}
              attackEffectX={attackEffectX}
            />
          </div>
        </div>
        {onWin && (
          <>
            <div className={styles.onWinContainer}>
              <h3>Victory!</h3>
              <p>
                You have earned{" "}
                <span className={styles.embeddedNumberExp}>
                  {direwolf.expGained}
                </span>{" "}
                experience point.
              </p>
              <p>You found a treasure inside the cave of the direwolf. </p>
              <p>
                <span className={styles.embeddedNumberGold}>
                  {direwolf.loot}
                </span>
                <img
                  style={{ verticalAlign: "-4px" }}
                  className="coin"
                  src="/coin-vector2.svg"
                ></img>{" "}
                gold gained
              </p>
              <Link to="/game">
                {" "}
                <button onClick={confirmHandler}>Confirm</button>
              </Link>
            </div>
            <div className={styles.overlay}></div>
          </>
        )}
        {onDefeat && (
          <>
            <div className={styles.onWinContainer}>
              <h3>Defeat!</h3>

              <p>You dropped some of your gold while running.</p>
              <p>
                <span className={styles.embeddedNumberGold}>
                  {Math.trunc(currentAccount.coin * 0.2)}
                </span>
                <img
                  style={{ verticalAlign: "-4px" }}
                  className="coin"
                  src="/coin-vector2.svg"
                ></img>{" "}
                gold lost.
              </p>
              <Link to="/game">
                {" "}
                <button onClick={confirmHandlerDefeat}>Confirm</button>
              </Link>
            </div>
            <div className={styles.overlay}></div>
          </>
        )}
      </div>
    </div>
  );
}

export default EnemyWhiteLion;
