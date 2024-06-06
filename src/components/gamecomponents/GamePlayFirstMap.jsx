import { useState } from "react";
import styles from "./GamePlay.module.css";
import { Link } from "react-router-dom";

function GamePlayFirstMap() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenApe, setIsOpenApe] = useState(false);
  const [isOpenLion, setIsOpenLion] = useState(false);
  const [isOpenBarbarian, setIsOpenBarbarian] = useState(false);
  const [isOpenIronclad, setIsOpenIronclad] = useState(false);
  const [isOpenCorruptedOrc, setIsOpenCorruptedOrc] = useState(false);
  const [isOpenRoguePaladin, setIsOpenRoguePaladin] = useState(false);
  const [isOpenDesertMonster, setIsOpenDesertMonster] = useState(false);
  const [isOpenKingsHand, setIsOpenKingsHand] = useState(false);
  const [isOpenPyromancer, setIsOpenPyromancer] = useState(false);
  return (
    <div className={styles.firstMapContainer}>
      <div className={styles.firstMap}>
        <div
          className={styles.enemyCont}
          onClick={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {isOpen && (
            <Link to="/direwolf">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
        <div
          className={styles.enemyContApe}
          onClick={() => setIsOpenApe(true)}
          onMouseLeave={() => setIsOpenApe(false)}
        >
          {isOpenApe && (
            <Link to="/youngape">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
        <div
          className={styles.enemyContLion}
          onClick={() => setIsOpenLion(true)}
          onMouseLeave={() => setIsOpenLion(false)}
        >
          {isOpenLion && (
            <Link to="/whitelion">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
        <div
          className={styles.enemyContBarbarian}
          onClick={() => setIsOpenBarbarian(true)}
          onMouseLeave={() => setIsOpenBarbarian(false)}
        >
          {isOpenBarbarian && (
            <Link to="/barbarian">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
        <div
          className={styles.enemyContIronclad}
          onClick={() => setIsOpenIronclad(true)}
          onMouseLeave={() => setIsOpenIronclad(false)}
        >
          {isOpenIronclad && (
            <Link to="/ironcladmarauder">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
        <div
          className={styles.enemyContCorruptedOrc}
          onClick={() => setIsOpenCorruptedOrc(true)}
          onMouseLeave={() => setIsOpenCorruptedOrc(false)}
        >
          {isOpenCorruptedOrc && (
            <Link to="/corruptedorc">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
        <div
          className={styles.enemyContRoguePaladin}
          onClick={() => setIsOpenRoguePaladin(true)}
          onMouseLeave={() => setIsOpenRoguePaladin(false)}
        >
          {isOpenRoguePaladin && (
            <Link to="/roguepaladin">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
        <div
          className={styles.enemyContDesertMonster}
          onClick={() => setIsOpenDesertMonster(true)}
          onMouseLeave={() => setIsOpenDesertMonster(false)}
        >
          {isOpenDesertMonster && (
            <Link to="/desertmonster">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
        <div
          className={styles.enemyContKingsHand}
          onClick={() => setIsOpenKingsHand(true)}
          onMouseLeave={() => setIsOpenKingsHand(false)}
        >
          {isOpenKingsHand && (
            <Link to="/kingshand">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
        <div
          className={styles.enemyContPyromancer}
          onClick={() => setIsOpenPyromancer(true)}
          onMouseLeave={() => setIsOpenPyromancer(false)}
        >
          {isOpenPyromancer && (
            <Link to="/pyromancer">
              {" "}
              <button className={styles.fightButton}>Fight</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default GamePlayFirstMap;
