import { useState } from "react";
import styles from "./GamePlay.module.css";
import SpellIndividual from "./SpellIndividual";

function AttackMenu({
  attackHandler,
  pointerNone,
  attackHandlerStrong,
  isStaminaEnough,
  isStaminaEnoughStrong,
  isStaminaEnoughCrush,
  restHandler,
  attackHandlerCrush,
  currentAccount,
  setIsAttackEffect,
  setIsAttackEffectX,
  setPointerNone,
  setDireWolf,
  setCurrentAccount,
  direwolf,
  setDamageTimeout,
  myElementRef,
  isMagic,
}) {
  const [isAttackOpen, setIsAttackOpen] = useState(false);
  const [isSpellsOpen, setIsSpellsOpen] = useState(false);

  return (
    <div
      className={`${styles.attackMenuContainer} ${
        pointerNone ? "pointer-event-none-button" : ""
      }`}
    >
      <div className={styles.attackMenuInsideContainer}>
        <button onClick={() => setIsAttackOpen(!isAttackOpen)}>
          Attack {isAttackOpen ? "-" : "+"}
        </button>
        {isAttackOpen && (
          <div className={styles.attackButtonInside}>
            <button
              onClick={attackHandler}
              className={`${styles.basicAttackButton} ${
                isStaminaEnough ? "pointer-event-none-button" : ""
              }`}
            >
              Basic
            </button>
            {isStaminaEnough && (
              <div className={styles.notEnoughStamina}>
                Low
                <svg
                  fill="rgb(11, 53, 241)"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 375.6 375.6"
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
              </div>
            )}

            <button
              onClick={attackHandlerStrong}
              className={`${styles.strongAttackButton} ${
                isStaminaEnoughStrong ? "pointer-event-none-button" : ""
              }`}
            >
              Strong
            </button>
            {isStaminaEnoughStrong && (
              <div
                className={styles.notEnoughStamina}
                style={{ left: "7.1rem" }}
              >
                Low
                <svg
                  fill="rgb(11, 53, 241)"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 375.6 375.6"
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
              </div>
            )}
            <button
              onClick={attackHandlerCrush}
              className={`${styles.crushAttackButton} ${
                isStaminaEnoughCrush ? "pointer-event-none-button" : ""
              }`}
            >
              Crush
            </button>
            {isStaminaEnoughCrush && (
              <div
                className={styles.notEnoughStamina}
                style={{ left: "13.4rem" }}
              >
                Low
                <svg
                  fill="rgb(11, 53, 241)"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 375.6 375.6"
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
              </div>
            )}
          </div>
        )}
      </div>
      <div className={styles.spellsButtonContainer}>
        <button onClick={() => setIsSpellsOpen(!isSpellsOpen)}>
          Spells {isSpellsOpen ? "-" : "+"}
        </button>
        {isSpellsOpen && (
          <div className={styles.spellsButtonInside}>
            <ul className={styles.spellsUl}>
              {currentAccount.inventory
                .filter((item) => item.itemType === "spell")
                .filter((item, i, self) => {
                  return self.findIndex((i) => i.name === item.name) === i;
                })
                .map((spell) => (
                  <SpellIndividual
                    key={spell.id}
                    spell={spell}
                    setIsAttackEffect={setIsAttackEffect}
                    setIsAttackEffectX={setIsAttackEffectX}
                    setPointerNone={setPointerNone}
                    setDireWolf={setDireWolf}
                    setCurrentAccount={setCurrentAccount}
                    direwolf={direwolf}
                    setDamageTimeout={setDamageTimeout}
                    myElementRef={myElementRef}
                    currentAccount={currentAccount}
                    isMagic={isMagic}
                  />
                ))}
            </ul>
          </div>
        )}{" "}
      </div>
      <button onClick={restHandler} className={styles.restButton}>
        Rest
      </button>
    </div>
  );
}

export default AttackMenu;
