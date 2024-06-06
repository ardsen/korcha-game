import { useState } from "react";
import styles from "./GameContentStatistics.module.css";
function GameVillageMerchantItemInd({ name, img, description }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.itemIndMerchandise}>
      <img
        src={img}
        alt=""
        style={{ width: "100%", cursor: "pointer" }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      />
      {isOpen && (
        <div className={styles.itemDetailsMerchandise}>
          <div className={styles.itemImg}>
            <img src={img} alt="" />
          </div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

export default GameVillageMerchantItemInd;
