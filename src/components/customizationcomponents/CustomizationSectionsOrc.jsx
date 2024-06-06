import { useState, useEffect } from "react";
import CustomizationSectionsOrcButtonContainer from "./CustomizationSectionsOrcButtonContainer";
import CustomizationSectionsOrcImgs from "./CustomizationSectionsOrcImgs";
import CustomizationSectionsOrcP from "./CustomizationSectionsOrcP";

function CustomizationSectionsOrc({
  src1,
  src2,
  src3,
  p1,
  p2,
  p3,
  setIsFirstSelected,
  currentAccount,
  isNextSectionOpen,
}) {
  const [isButtonActiveW, setIsButtonActiveW] = useState(true);
  const [isButtonActiveS, setIsButtonActiveS] = useState(false);
  const [isButtonActiveT, setIsButtonActiveT] = useState(false);

  const sectionHandler = function () {
    setIsFirstSelected(true);
    if (isButtonActiveW) {
      currentAccount.str += 3;
      currentAccount.hp += 1;
    }
    if (isButtonActiveS) {
      currentAccount.int += 3;
      currentAccount.end += 1;
    }
    if (isButtonActiveT) {
      currentAccount.agi += 3;
      currentAccount.hp += 1;
    }
  };
  useEffect(() => {
    if (setIsFirstSelected) {
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
      className={`selection-section birth-selection-section animation-left-to-right ${
        isNextSectionOpen ? "pointer-event-none" : ""
      }`}
    >
      <div className="selection-container birth-selection-container">
        <CustomizationSectionsOrcButtonContainer
          isButtonActiveS={isButtonActiveS}
          isButtonActiveW={isButtonActiveW}
          isButtonActiveT={isButtonActiveT}
          setIsButtonActiveS={setIsButtonActiveS}
          setIsButtonActiveT={setIsButtonActiveT}
          setIsButtonActiveW={setIsButtonActiveW}
        />
        <CustomizationSectionsOrcImgs
          src={`${
            (isButtonActiveW && src1) ||
            (isButtonActiveS && src2) ||
            (isButtonActiveT && src3)
          }`}
        />
        {isButtonActiveW && (
          <CustomizationSectionsOrcP>{p1}</CustomizationSectionsOrcP>
        )}{" "}
        {isButtonActiveS && (
          <CustomizationSectionsOrcP>{p2}</CustomizationSectionsOrcP>
        )}
        {isButtonActiveT && (
          <CustomizationSectionsOrcP>{p3}</CustomizationSectionsOrcP>
        )}
        <button
          className="next-button next-button-child"
          onClick={sectionHandler}
        >
          Confirm
        </button>
      </div>
    </section>
  );
}

export default CustomizationSectionsOrc;
