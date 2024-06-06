import styles from "./GamePlay.module.css";
import { useEffect, useState } from "react";

function SpellIndividual({
  spell,
  setIsAttackEffect,
  setIsAttackEffectX,
  setPointerNone,
  setDireWolf,
  setCurrentAccount,
  direwolf,
  setDamageTimeout,
  currentAccount,
  isMagic,
}) {
  let randomNumberBasicAttack =
    Math.floor(Math.random() * (115 - 85) + 85) / 100;
  const [isSpellInfoOpen, setIsSpellInfoOpen] = useState(false);
  const [spellStaminaEnough, setSpellStaminaEnough] = useState(true);
  const [notEnoughStamina, setNotEnoughStamina] = useState(false);

  const notStaminaHandler = () => {
    setNotEnoughStamina(true);
    setTimeout(() => {
      setNotEnoughStamina(false);
    }, 1200);
  };
  const attackHandler = function () {
    if (!spellStaminaEnough) return;
    if (direwolf.remainHealth <= 0) return;
    setDireWolf((prevAccount) => ({
      ...prevAccount,
      remainHealth:
        prevAccount.remainHealth -
        Math.trunc(
          currentAccount.magP * randomNumberBasicAttack * spell.damage -
            (currentAccount.magP * direwolf.magDef * spell.damage) / 300
        ),
    }));
    setCurrentAccount((prevAccount) => ({
      ...prevAccount,
      remainStamina: prevAccount.remainStamina - spell.staminaCost,
    }));
    setPointerNone(true);
    setIsAttackEffect(true);
    setTimeout(() => setIsAttackEffectX(true), 200);
    document
      .querySelector("#status")
      .insertAdjacentHTML(
        "afterbegin",
        `<p style = "background-color : rgb(0, 71, 0)">${Math.trunc(
          currentAccount.magP * randomNumberBasicAttack * spell.damage -
            (currentAccount.magP * direwolf.magDef * spell.damage) / 300
        )} magical damage dealt.</p>`
      );
    const timeout = setTimeout(() => {
      setCurrentAccount((prevAccount) => ({
        ...prevAccount,
        remainHealth:
          prevAccount.remainHealth -
          (isMagic
            ? Math.trunc(direwolf.magP * randomNumberBasicAttack) -
              (direwolf.magP - currentAccount.magDef) / 300
            : Math.trunc(direwolf.ap * randomNumberBasicAttack) -
              (direwolf.ap - currentAccount.physDef) / 300),
      }));

      document
        .querySelector("#status")
        .insertAdjacentHTML(
          "afterbegin",
          `<p>${
            isMagic
              ? Math.trunc(
                  direwolf.magP * randomNumberBasicAttack -
                    (direwolf.magP - currentAccount.magDef) / 300
                )
              : Math.trunc(
                  direwolf.ap * randomNumberBasicAttack -
                    (direwolf.ap - currentAccount.physDef) / 300
                )
          } ${isMagic ? "magical damage received." : "damage received."}</p>`
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
    if (spell.staminaCost > currentAccount.remainStamina) {
      return setSpellStaminaEnough(false);
    } else {
      return setSpellStaminaEnough(true);
    }
  }, [currentAccount.remainStamina, spell.staminaCost]);
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
      }}
      onMouseEnter={() => setIsSpellInfoOpen(true)}
      onMouseLeave={() => setIsSpellInfoOpen(false)}
      onClick={spellStaminaEnough ? attackHandler : notStaminaHandler}
    >
      <img className={styles.spellImg} src={spell.img} alt="" />
      {isSpellInfoOpen && (
        <div className={styles.spellInfoContainer}>
          <p>{spell.name}</p>
          <p>
            -{spell.staminaCost}
            <svg
              fill="rgb(11, 53, 241)"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              viewBox="0 0 375.6 375.6"
              style={{ verticalAlign: "-3px" }}
            >
              <g>
                <path
                  d="M264.189,74.338c-34.517-41.977-68.516-70.779-69.946-71.984c-3.723-3.139-9.166-3.139-12.888,0
        c-1.431,1.205-35.43,30.008-69.946,71.984c-47.074,57.246-70.943,109.035-70.943,153.927c0,81.24,66.094,147.334,147.334,147.334
        c81.24,0,147.334-66.094,147.334-147.334C335.133,183.374,311.264,131.584,264.189,74.338z M203.358,327.385
        c-1.281,0.326-2.565,0.472-3.826,0.472c-6.892,0-13.178-4.65-14.957-11.629c-2.104-8.257,2.872-16.65,11.126-18.779
        c2.82-0.742,64.614-17.775,64.611-79.787c0-8.531,6.916-15.449,15.447-15.449c8.532,0,15.45,6.916,15.45,15.447
        C291.215,286.758,233.759,319.649,203.358,327.385z"
                />
              </g>
            </svg>
          </p>
        </div>
      )}
      {notEnoughStamina && (
        <>
          <div className={styles.lowStamina}>
            <p>LOW STAMINA</p>
            <div className={styles.lowStaminaTimerCont}>
              <div
                className={`${styles.lowStaminaTimer} ${styles.animationTimerStamina}`}
              ></div>
            </div>
          </div>
          <div className="overlay"></div>
        </>
      )}
    </div>
  );
}

export default SpellIndividual;
