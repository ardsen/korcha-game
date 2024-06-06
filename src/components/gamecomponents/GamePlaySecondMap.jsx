import { Link } from "react-router-dom";
import styles from "./GamePlay.module.css";
import { useState } from "react";

function GamePlaySecondMap() {
  const [isOpenBanditWarrior, setIsOpenBanditWarrior] = useState(false);
  const [isOpenBanditMage, setIsOpenBanditMage] = useState(false);
  const [isOpenBanditLeader, setIsOpenBanditLeader] = useState(false);
  const [isOpenOrcBanditWarrior, setIsOpenOrcBanditWarrior] = useState(false);
  const [isOpenOrcBanditMage, setIsOpenOrcBanditMage] = useState(false);
  const [isOpenOrcBanditLeader, setIsOpenOrcBanditLeader] = useState(false);
  const [isOpenSpectralGuardian, setIsOpenSpectralGuardian] = useState(false);
  const [isOpenFrostbornWarrior, setIsOpenFrostbornWarrior] = useState(false);
  const [isOpenDarkMage, setIsOpenDarkMage] = useState(false);
  const [isOpenDarkKnight, setIsOpenDarkKnight] = useState(false);
  return (
    <div className={styles.firstMapContainer}>
      <div className={styles.secondMap}>
        <div
          className={styles.enemyContBanditWarrior}
          onClick={() => setIsOpenBanditWarrior(true)}
          onMouseLeave={() => setIsOpenBanditWarrior(false)}
        >
          {isOpenBanditWarrior && (
            <Link to="/banditwarrior">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
        <div
          className={styles.enemyContBanditMage}
          onClick={() => setIsOpenBanditMage(true)}
          onMouseLeave={() => setIsOpenBanditMage(false)}
        >
          {isOpenBanditMage && (
            <Link to="/banditmage">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
        <div
          className={styles.enemyContBanditLeader}
          onClick={() => setIsOpenBanditLeader(true)}
          onMouseLeave={() => setIsOpenBanditLeader(false)}
        >
          {isOpenBanditLeader && (
            <Link to="/banditleader">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
        <div
          className={styles.enemyContBanditLeader}
          onClick={() => setIsOpenBanditLeader(true)}
          onMouseLeave={() => setIsOpenBanditLeader(false)}
        >
          {isOpenBanditLeader && (
            <Link to="/banditleader">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
        <div
          className={styles.enemyContOrcBanditWarrior}
          onClick={() => setIsOpenOrcBanditWarrior(true)}
          onMouseLeave={() => setIsOpenOrcBanditWarrior(false)}
        >
          {isOpenOrcBanditWarrior && (
            <Link to="/orcbanditwarrior">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
        <div
          className={styles.enemyContOrcBanditMage}
          onClick={() => setIsOpenOrcBanditMage(true)}
          onMouseLeave={() => setIsOpenOrcBanditMage(false)}
        >
          {isOpenOrcBanditMage && (
            <Link to="/orcbanditmage">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
        <div
          className={styles.enemyContOrcBanditLeader}
          onClick={() => setIsOpenOrcBanditLeader(true)}
          onMouseLeave={() => setIsOpenOrcBanditLeader(false)}
        >
          {isOpenOrcBanditLeader && (
            <Link to="/orcbanditleader">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
        <div
          className={styles.enemyContSpectralGuardian}
          onClick={() => setIsOpenSpectralGuardian(true)}
          onMouseLeave={() => setIsOpenSpectralGuardian(false)}
        >
          {isOpenSpectralGuardian && (
            <Link to="/spectralguardian">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
        <div
          className={styles.enemyContFrostbornWarrior}
          onClick={() => setIsOpenFrostbornWarrior(true)}
          onMouseLeave={() => setIsOpenFrostbornWarrior(false)}
        >
          {isOpenFrostbornWarrior && (
            <Link to="/frostbornwarrior">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
        <div
          className={styles.enemyContDarkMage}
          onClick={() => setIsOpenDarkMage(true)}
          onMouseLeave={() => setIsOpenDarkMage(false)}
        >
          {isOpenDarkMage && (
            <Link to="/darkmage">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
        <div
          className={styles.enemyContDarkKnight}
          onClick={() => setIsOpenDarkKnight(true)}
          onMouseLeave={() => setIsOpenDarkKnight(false)}
        >
          {isOpenDarkKnight && (
            <Link to="/darkknight">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default GamePlaySecondMap;
