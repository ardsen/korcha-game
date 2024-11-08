import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.spinnerFullpage}>
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
}

export default Spinner;
