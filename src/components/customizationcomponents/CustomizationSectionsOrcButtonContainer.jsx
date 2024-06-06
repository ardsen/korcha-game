// import { useState } from "react";
import CustomizationSectionsOrcButtons from "./CustomizationSectionsOrcButtons";

function CustomizationSectionsOrcButtonContainer({
  isButtonActiveW,
  setIsButtonActiveW,
  isButtonActiveT,
  setIsButtonActiveT,
  isButtonActiveS,
  setIsButtonActiveS,
}) {
  const handlerWarrior = function () {
    setIsButtonActiveW(true);
    setIsButtonActiveT(false);
    setIsButtonActiveS(false);
  };
  const handlerSorcerer = function () {
    setIsButtonActiveW(false);
    setIsButtonActiveT(false);
    setIsButtonActiveS(true);
  };
  const handlerThief = function () {
    setIsButtonActiveW(false);
    setIsButtonActiveT(true);
    setIsButtonActiveS(false);
  };

  return (
    <div className="selection-button-container selection-button-birth">
      <CustomizationSectionsOrcButtons
        key="1"
        isButtonActive={isButtonActiveW}
        setIsButtonActive={handlerWarrior}
      >
        Warrior
      </CustomizationSectionsOrcButtons>
      <CustomizationSectionsOrcButtons
        key="2"
        isButtonActive={isButtonActiveS}
        setIsButtonActive={handlerSorcerer}
      >
        Sorcerer
      </CustomizationSectionsOrcButtons>
      <CustomizationSectionsOrcButtons
        key="3"
        isButtonActive={isButtonActiveT}
        setIsButtonActive={handlerThief}
      >
        Thief
      </CustomizationSectionsOrcButtons>
    </div>
  );
}

export default CustomizationSectionsOrcButtonContainer;
