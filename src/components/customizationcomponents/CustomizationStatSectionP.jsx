import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CustomizationStatSectionP({
  currentAccount,
  statsImgHandler,
  race,
  village,
  itemList,
}) {
  const [remainStats, setRemainStats] = useState(6);

  const [isInfosOpen, setIsInfosOpen] = useState(false);
  const [isInfoOpenEnd, setIsInfoOpenEnd] = useState(false);
  const [isInfoOpenStr, setIsInfoOpenStr] = useState(false);
  const [isInfoOpenInt, setIsInfoOpenInt] = useState(false);
  const [isInfoOpenFth, setIsInfoOpenFth] = useState(false);
  const [lastStatsArr, setLastStatsArr] = useState([]);
  const [characterName, setCharacterName] = useState("");
  const createCharacterName = function () {
    currentAccount.name = characterName;
  };
  useEffect(() => {
    if (currentAccount.str >= 11) {
      currentAccount.equippedItem = itemList.longsword;
      currentAccount.equippedArmor = itemList.tatteredClothGarb;
    }
    if (currentAccount.int >= 11) {
      currentAccount.equippedItem = itemList.stick;
      currentAccount.equippedArmor = itemList.tatteredClothGarb;
    }
    if (currentAccount.agi >= 11) {
      currentAccount.equippedItem = itemList.knife;
      currentAccount.equippedArmor = itemList.tatteredClothGarb;
    }
    setLastStatsArr([
      currentAccount.hp,
      currentAccount.end,
      currentAccount.str,
      currentAccount.int,
      currentAccount.agi,
    ]);
    statsImgHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const hiddenInfoHandler = () => {
    setIsInfosOpen(true);
  };
  const hiddenInfoHandlerClose = () => {
    setIsInfosOpen(false);
  };
  const plusHandler = () => {
    if (remainStats <= 0) return;
    currentAccount.hp += 1;
    setRemainStats(remainStats - 1);
  };
  const minusHandler = () => {
    if (currentAccount.hp <= lastStatsArr[0]) return;
    if (remainStats >= 6) return;
    currentAccount.hp -= 1;
    setRemainStats(remainStats + 1);
  };
  const plusHandlerEnd = () => {
    if (remainStats <= 0) return;
    currentAccount.end += 1;
    setRemainStats(remainStats - 1);
  };
  const minusHandlerEnd = () => {
    if (currentAccount.end <= lastStatsArr[1]) return;

    if (remainStats >= 6) return;
    currentAccount.end -= 1;
    setRemainStats(remainStats + 1);
  };
  const plusHandlerStr = () => {
    if (remainStats <= 0) return;
    currentAccount.str += 1;
    setRemainStats(remainStats - 1);
  };
  const minusHandlerStr = () => {
    if (currentAccount.str <= lastStatsArr[2]) return;

    if (remainStats >= 6) return;
    currentAccount.str -= 1;
    setRemainStats(remainStats + 1);
  };
  const plusHandlerInt = () => {
    if (remainStats <= 0) return;
    currentAccount.int += 1;
    setRemainStats(remainStats - 1);
  };
  const minusHandlerInt = () => {
    if (currentAccount.int <= lastStatsArr[3]) return;

    if (remainStats >= 6) return;
    currentAccount.int -= 1;
    setRemainStats(remainStats + 1);
  };
  const plusHandlerFth = () => {
    if (remainStats <= 0) return;
    currentAccount.agi += 1;
    setRemainStats(remainStats - 1);
  };
  const minusHandlerFth = () => {
    if (currentAccount.agi <= lastStatsArr[4]) return;

    if (remainStats >= 6) return;
    currentAccount.agi -= 1;
    setRemainStats(remainStats + 1);
  };
  return (
    <div className={`stats-container stats-container-${race}`}>
      <p className={`${race}`}>
        &nbsp;&nbsp;&nbsp;You managed to escape from prison. After spending a
        night camping and recover yourself, you set out towards to your
        father&apos;s village {village}. You had heard that he was loved there.
        The elders of the village could assist you.
        <br />
        &nbsp;&nbsp;&nbsp;On your way to {village}, you encountered a mystic
        wizard who gave you a potion to regain your strength. (6 STATS GAINED)
      </p>
      <div>
        <label
          htmlFor="nickname"
          className={race}
          style={{ display: "flex", gap: "10px", alignItems: "center" }}
        >
          <p>Enter your character&apos;s name:</p>
          <input
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            maxLength={15}
            type="text"
            htmlFor="nickname"
            style={{
              background: "var(--color-text)",
              border: "2px solid black",
              width: "12rem",
              pointerEvents: "fill",
            }}
          />
        </label>
      </div>
      <div className="hp-bar">
        <div
          className={`info-container info-container-human ${
            isInfosOpen ? "" : "hidden"
          }`}
          data-info="1"
        >
          HP: Health Points increases your hit points. Recommended for all
          classes but mostly Warriors.
        </div>
        <button
          className="info-btn info-btn-human"
          onMouseEnter={hiddenInfoHandler}
          onMouseLeave={hiddenInfoHandlerClose}
        >
          i
        </button>
        <span>hp&nbsp;</span>
        <button className="stat-button hp-minus-human" onClick={minusHandler}>
          -
        </button>
        <input
          type="text"
          className="hp-input-human"
          value={currentAccount.hp}
          onChange={(e) => e.target.value}
        ></input>
        <button
          className="stat-button hp-plus-human"
          onClick={plusHandler}
          value="hp"
        >
          +
        </button>
      </div>
      <div className="end-bar">
        <div
          className={`info-container info-container-human ${
            isInfoOpenEnd ? "" : "hidden"
          }`}
          data-info="2"
        >
          END: Endurance increases your stamina. Recommended mostly for
          Sorcerers, might be useful for Clerics.
        </div>
        <button
          className="info-btn info-btn-human"
          onMouseEnter={() => setIsInfoOpenEnd(true)}
          onMouseLeave={() => setIsInfoOpenEnd(false)}
        >
          i
        </button>
        <span>end</span>
        <button
          className="stat-button end-minus-human"
          onClick={minusHandlerEnd}
        >
          -
        </button>
        <input
          type="text"
          className="end-input-human"
          value={currentAccount.end}
          onChange={(e) => e.target.value}
        ></input>
        <button className="stat-button end-plus-human" onClick={plusHandlerEnd}>
          +
        </button>
      </div>
      <div className="str-bar">
        <div
          className={`info-container info-container-human ${
            isInfoOpenStr ? "" : "hidden"
          }`}
          data-info="3"
        >
          STR: Strength your physical power. Recommended mostly for Warriors,
          useful for Clerics
        </div>
        <button
          className="info-btn info-btn-human"
          onMouseEnter={() => setIsInfoOpenStr(true)}
          onMouseLeave={() => setIsInfoOpenStr(false)}
        >
          i
        </button>
        <span>str</span>
        <button
          className="stat-button str-minus-human"
          onClick={minusHandlerStr}
        >
          -
        </button>
        <input
          type="text"
          className="str-input-human"
          value={currentAccount.str}
          onChange={(e) => e.target.value}
        ></input>
        <button className="stat-button str-plus-human" onClick={plusHandlerStr}>
          +
        </button>
      </div>
      <div className="int-bar">
        <div
          className={`info-container info-container-human ${
            isInfoOpenInt ? "" : "hidden"
          }`}
          data-info="4"
        >
          INT: Intelligence increases your magic power. Only recommended for
          sorcerers.
        </div>
        <button
          className="info-btn info-btn-human"
          onMouseEnter={() => setIsInfoOpenInt(true)}
          onMouseLeave={() => setIsInfoOpenInt(false)}
        >
          i
        </button>
        <span>int</span>
        <button
          className="stat-button int-minus-human"
          onClick={minusHandlerInt}
        >
          -
        </button>
        <input
          type="text"
          className="int-input-human"
          value={currentAccount.int}
          onChange={(e) => e.target.value}
        ></input>
        <button className="stat-button int-plus-human" onClick={plusHandlerInt}>
          +
        </button>
      </div>
      <div className="fth-bar">
        <div
          className={`info-container info-container-human ${
            isInfoOpenFth ? "" : "hidden"
          }`}
          data-info="5"
        >
          AGI: Agility increases your physical power with daggers and critical
          damage.
        </div>
        <button
          className="info-btn info-btn-human"
          onMouseEnter={() => setIsInfoOpenFth(true)}
          onMouseLeave={() => setIsInfoOpenFth(false)}
        >
          i
        </button>
        <span>agi</span>
        <button
          className="stat-button fth-minus-human"
          onClick={minusHandlerFth}
        >
          -
        </button>
        <input
          type="text"
          className="fth-input-human"
          value={currentAccount.agi}
          onChange={(e) => e.target.value}
        ></input>
        <button className="stat-button fth-plus-human" onClick={plusHandlerFth}>
          +
        </button>
      </div>
      {remainStats === 0 ? (
        <Link to="/game">
          <button
            className="start-game-button animation-opacity"
            onClick={createCharacterName}
          >
            Start Your Journey!
          </button>
        </Link>
      ) : (
        <span className="animation-opacity remain-stats-span">
          Remain stat points:{" "}
          <input
            type="text"
            className="remain-stats-input-human"
            value={remainStats}
            onChange={(e) => e.target.value}
          ></input>
        </span>
      )}
    </div>
  );
}

export default CustomizationStatSectionP;
