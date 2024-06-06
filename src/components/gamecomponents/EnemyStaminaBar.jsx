import styles from "./GamePlay.module.css";
function EnemyStaminaBar({ currentAccount }) {
  let healthPercentage = (
    (currentAccount.remainStamina / currentAccount.stamina) *
    100
  ).toFixed(1);
  return (
    <>
      <div className={styles.staminaBarWrapper}>
        <span className={styles.staminaText}>
          {Math.trunc(currentAccount.remainStamina)}/{currentAccount.stamina}
        </span>
        <svg
          className="stamina-drop"
          fill="rgb(11, 53, 241)"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
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
        <span className={styles.healthBarText}>
          {isNaN(healthPercentage) ? "0" : healthPercentage}%
        </span>
        <div
          style={{
            height: "100%",
            width: `${healthPercentage}%`,
            backgroundColor: "rgb(11, 53, 241)",
            position: "absolute",
            top: "0",
            left: "0",
            transition: "all .5s",
          }}
        ></div>
      </div>
    </>
  );
}

export default EnemyStaminaBar;
