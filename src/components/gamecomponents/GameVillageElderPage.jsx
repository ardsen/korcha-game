import styles from "./GameContent.module.css";

function GameVillageElderPage({ img }) {
  return (
    <div className={styles.elderPageWrapper}>
      <div
        className={styles.elderPageImg}
        style={{ backgroundImage: img }}
      ></div>
      <div className={styles.overlayUnderDev}>
        <p>This page is under development...</p>
        <span className={`${styles.loading} ${styles.animationLoading}`}></span>
      </div>
    </div>
  );
}

export default GameVillageElderPage;
