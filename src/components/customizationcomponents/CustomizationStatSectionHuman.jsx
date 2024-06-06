import { useState } from "react";
import CustomizationStatSectionHumanImgs from "./CustomizationStatSectionHumanImgs";
import CustomizationStatSectionP from "./CustomizationStatSectionP";

function CustomizationStatSectionHuman({
  currentAccount,
  setCurrentAccount,
  img1,
  img2,
  img3,
  race,
  village,
  itemList,
  armorList,
}) {
  const [statsImg, setStatsImg] = useState(img1);
  const statsImgHandler = function () {
    if (currentAccount.int > 12) {
      setStatsImg(img2);
      currentAccount.img = img2;
    } else if (currentAccount.agi > 10) {
      setStatsImg(img3);
      currentAccount.img = img3;
    } else {
      setStatsImg(img1);
      currentAccount.img = img1;
    }
  };
  return (
    <section
      className="stat-distribute-section stat-distribute-section-human  animation-left-to-right"
      style={{ overflow: "hidden" }}
    >
      <div className="stat-distribute-container">
        <CustomizationStatSectionHumanImgs src={statsImg} />
        <CustomizationStatSectionP
          currentAccount={currentAccount}
          setCurrentAccount={setCurrentAccount}
          statsImgHandler={statsImgHandler}
          race={race}
          village={village}
          itemList={itemList}
          armorList={armorList}
        />
      </div>
    </section>
  );
}

export default CustomizationStatSectionHuman;
