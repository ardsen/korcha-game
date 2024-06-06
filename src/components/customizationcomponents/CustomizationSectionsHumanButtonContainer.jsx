import CustomizationSectionsHumanButtons from "./CustomizationSectionsHumanButtons";

function CustomizationSectionsHumanButtonContainer({
  isButtonActiveK,
  isButtonActiveM,
  isButtonActiveR,
  setIsButtonActiveK,
  setIsButtonActiveM,
  setIsButtonActiveR,
}) {
  const handlerActiveK = function () {
    setIsButtonActiveK(true);
    setIsButtonActiveM(false);
    setIsButtonActiveR(false);
  };
  const handlerActiveM = function () {
    setIsButtonActiveK(false);
    setIsButtonActiveM(true);
    setIsButtonActiveR(false);
  };
  const handlerActiveR = function () {
    setIsButtonActiveK(false);
    setIsButtonActiveM(false);
    setIsButtonActiveR(true);
  };
  return (
    <div className="selection-button-container selection-button-birth-human">
      <CustomizationSectionsHumanButtons
        isButtonActive={isButtonActiveK}
        setIsButtonActive={handlerActiveK}
      >
        Knight
      </CustomizationSectionsHumanButtons>
      <CustomizationSectionsHumanButtons
        isButtonActive={isButtonActiveM}
        setIsButtonActive={handlerActiveM}
      >
        Mage
      </CustomizationSectionsHumanButtons>
      <CustomizationSectionsHumanButtons
        isButtonActive={isButtonActiveR}
        setIsButtonActive={handlerActiveR}
      >
        Rogue
      </CustomizationSectionsHumanButtons>
    </div>
  );
}

export default CustomizationSectionsHumanButtonContainer;
