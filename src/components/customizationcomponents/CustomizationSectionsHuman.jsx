import { useState, useEffect } from "react";
import CustomizationSectionsHumanButtonContainer from "./CustomizationSectionsHumanButtonContainer";
import CustomizationSectionsHumanImgs from "./CustomizationSectionsHumanImgs";
import CustomizationSectionsHumanP from "./CustomizationSectionsHumanP";

function CustomizationSectionsHuman({
  src1,
  src2,
  src3,
  p1,
  p2,
  p3,
  setIsFirstSelectedHuman,
  currentAccount,
  isNextSectionOpen,
}) {
  const [isButtonActiveK, setIsButtonActiveK] = useState(true);
  const [isButtonActiveM, setIsButtonActiveM] = useState(false);
  const [isButtonActiveR, setIsButtonActiveR] = useState(false);

  const nextButtonHandler = function () {
    setIsFirstSelectedHuman(true);
    if (isButtonActiveK) {
      currentAccount.str += 3;
      currentAccount.hp += 1;
    }
    if (isButtonActiveM) {
      currentAccount.int += 3;
      currentAccount.end += 1;
    }
    if (isButtonActiveR) {
      currentAccount.str += 1;
      currentAccount.agi += 2;
      currentAccount.hp += 1;
    }
  };

  useEffect(() => {
    if (setIsFirstSelectedHuman) {
      setTimeout(() => {
        window.scrollBy({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }, 50);
    }
  });

  return (
    <section
      className={`selection-section birth-selection-section-human animation-left-to-right ${
        isNextSectionOpen ? "pointer-event-none" : ""
      }`}
    >
      <div className="selection-container birth-selection-container">
        <CustomizationSectionsHumanImgs
          src={
            (isButtonActiveK && src1) ||
            (isButtonActiveM && src2) ||
            (isButtonActiveR && src3)
          }
        />
        <CustomizationSectionsHumanButtonContainer
          isButtonActiveK={isButtonActiveK}
          isButtonActiveM={isButtonActiveM}
          isButtonActiveR={isButtonActiveR}
          setIsButtonActiveK={setIsButtonActiveK}
          setIsButtonActiveM={setIsButtonActiveM}
          setIsButtonActiveR={setIsButtonActiveR}
        />
        <CustomizationSectionsHumanP>
          {(isButtonActiveK && p1) ||
            (isButtonActiveM && p2) ||
            (isButtonActiveR && p3)}
        </CustomizationSectionsHumanP>
        <button
          className="next-button next-button-child"
          onClick={nextButtonHandler}
        >
          Confirm
        </button>
      </div>
    </section>
  );
}

export default CustomizationSectionsHuman;
