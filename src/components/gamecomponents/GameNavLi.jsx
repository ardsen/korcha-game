import styles from "./GameNav.module.css";

function GameNavLi({
  children,
  setIsButtonOpen,
  isButtonOpen,
  inGameRemainStats,
}) {
  return (
    <li
      onClick={() => setIsButtonOpen(!isButtonOpen)}
      className={styles.insideNavButtons}
    >
      {children}
      {inGameRemainStats > 0 ? (
        <div className={styles.statReminder}>!</div>
      ) : (
        ""
      )}
    </li>
  );
}

export default GameNavLi;
