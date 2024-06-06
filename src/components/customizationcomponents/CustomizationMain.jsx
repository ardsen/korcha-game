import { useState } from "react";
import CustomizationRaceSelection from "./CustomizationRaceSelection";
import CustomizationSectionsOrc from "./CustomizationSectionsOrc";
import CustomizationSectionsHuman from "./CustomizationSectionsHuman";
import CustomizationStatSectionHuman from "./CustomizationStatSectionHuman";
// import CustomizationStatSectionOrc from "./CustomizationStatSectionOrc";

function CustomizationMain({
  currentAccount,
  setCurrentAccount,
  itemList,
  armorList,
}) {
  const [isOrc, setIsOrc] = useState(false);
  const [isFirstSelected, setIsFirstSelected] = useState(false);
  const [isSecondSelected, setIsSecondSelected] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [isFirstSelectedHuman, setIsFirstSelectedHuman] = useState(false);
  const [isSecondSelectedHuman, setIsSecondSelectedHuman] = useState(false);
  const [isStatSectionOpen, setIsStatSectionOpen] = useState(false);
  const [isStatSectionOpenOrc, setIsStatSectionOpenOrc] = useState(false);

  const p1 =
    " Your father was a great warrior, fought in many battles for the emperor. He mastered axes and maces to crush his enemies. After your birth, he moved into the city Kroyzk to settle down. You were trained here by your father to become a great warrior like himself. (STR +3, HP +1)";
  const p2 =
    "Your father was a skillful sorcerer and an elite member of a secret  cult called Froyner. The cult used to work behind closed doors to  shape the destiny of the empire. After emperor discovered Froyners,  he exile the members of it. Your father has exiled to city Kroyzk. You were trained here by your father to becoma a clever sorcerer like himself. (INT+3, END+1)";
  const p3 =
    "Your father was a rogue. He did everything he could do to look after his family and be a good father. He mastered the art of stealthiness. He was also good at using daggers. After plundering a loaded caravan, he wanted to start a new life in the city of Kroyzk with all the money he had earned. You were trained here by your father to master your dagger skills. (AGI +3, HP +1)";

  const p4 =
    "You used to play fighting games with your friends in streets when you were a child. Streets and your trainings made you tough and strong. (STR +3, HP +1)";
  const p5 =
    "You used to go to City's Library when you have spare times from your trainings. Even in those times you were eager to learn about magic and new spells. (INT +3, END +1)";
  const p6 =
    "During the spare time left from your training, you used to go to practice archery and dagger shooting. Your skills with daggers and bows got better everyday. (AGI +3, HP +1) ";
  const p7 =
    "The city Kroyzk was invaded by humans. You fought well with your greataxe and crushed many enemies to defend where you have been raised. Despite your valiant fighting, you couldn't save your family and had to watch the city's downfall as you were taken as a prisoner. (STR +3, HP +1)";
  const p8 =
    " The city Kroyzk was invaded by humans. You used the power of magic, set fire to many enemies and made a great impact on battle. Despite your valiant fighting, you couldn't save your family and had to watch the city's downfall as you were taken as a prisoner. (INT +3, END +1)";
  const p9 =
    "The city Troyer was invaded by humans. You were too fast for the enemy and had managed to defeat many of them. Despite your valiant fighting, you couldn't save your family and had to watch the city's downfall as you were taken as a prisoner.  (AGI +3, HP +1) ";
  const p10 =
    " Your father was a great warrior, fought in many battles for the emperor. He mastered axes and maces to crush his enemies. After your birth, he moved into the city Troyer to settle down. You were trained here by your father to become a great warrior like himself. (STR +3, HP +1)";
  const p11 =
    "Your father was a skillful sorcerer and an elite member of a secret  cult called Froyner. The cult used to work behind closed doors to  shape the destiny of the empire. After emperor discovered Froyners,  he exile the members of it. Your father has exiled to city Troyer. You were trained here by your father to become a clever sorcerer like himself. (INT+3, END+1)";
  const p12 =
    "Your father was a rogue. He did everything he could do to look after his family and be a good father. He mastered the art of stealthiness. He was also good at using daggers. After plundering a loaded caravan, he wanted to start a new life in the city of Troyer with all the money he had earned. You were trained here by your father to master your dagger skills. (AGI +3, HP +1)";

  const p13 =
    "You used to play fighting games with your friends in streets when you were a child. Streets and your trainings made you tough and strong. (STR +3, HP +1)";
  const p14 =
    "You used to go to City's Library when you have spare times from your trainings. Even in those times you were eager to learn about magic and new spells. (INT +3, END +1)";
  const p15 =
    "During the spare time left from your training, you used to go to practice archery and dagger shooting. Your skills with daggers and bows got better everyday. (AGI +3, HP +1) ";
  const p16 =
    "The city Troyer was invaded by humans. You fought well with your greataxe and crushed many enemies to defend where you have been raised. Despite your valiant fighting, you couldn't save your family and had to watch the city's downfall as you were taken as a prisoner. (STR +3, HP +1)";
  const p17 =
    " The city Troyer was invaded by humans. You used the power of magic, set fire to many enemies and made a great impact on battle. Despite your valiant fighting, you couldn't save your family and had to watch the city's downfall as you were taken as a prisoner. (INT +3, END +1)";
  const p18 =
    "The city Troyer was invaded by humans. You used your daggers on enemy to save your city. You were too fast for the enemy and had managed to defeat many of them. Despite your valiant fighting, you couldn't save your family and had to watch the city's downfall as you were taken as a prisoner. (AGI +3, HP +1) ";

  return (
    <main className="customization-main">
      <CustomizationRaceSelection
        setIsOrc={setIsOrc}
        isOrc={isOrc}
        isHuman={isHuman}
        setIsHuman={setIsHuman}
        setIsFirstSelected={setIsFirstSelected}
        setIsSecondSelected={setIsSecondSelected}
        setIsFirstSelectedHuman={setIsFirstSelectedHuman}
        setIsSecondSelectedHuman={setIsSecondSelectedHuman}
        setIsStatSectionOpen={setIsStatSectionOpen}
        setIsStatSectionOpenOrc={setIsStatSectionOpenOrc}
        currentAccount={currentAccount}
      />

      {isOrc && (
        <CustomizationSectionsOrc
          src1="/warrior-orc-birth.png"
          src2="/sorcerer-orc-birth.png"
          src3="/warlock-orc-birth.png"
          p1={p1}
          p2={p2}
          p3={p3}
          setIsFirstSelected={setIsFirstSelected}
          isNextSectionOpen={isFirstSelected}
          key={1}
          currentAccount={currentAccount}
        />
      )}
      {isHuman && (
        <CustomizationSectionsHuman
          src1="/human-knight-birth.png"
          src2="/human-sorcerer-birth.png"
          src3="/warlock-human-birth.png"
          p1={p10}
          p2={p11}
          p3={p12}
          setIsFirstSelectedHuman={setIsFirstSelectedHuman}
          currentAccount={currentAccount}
          isNextSectionOpen={isFirstSelectedHuman}
        />
      )}
      {isFirstSelected && (
        <CustomizationSectionsOrc
          src1="/orcs-child-street.png"
          src2="/orc-child-sorcerer.png"
          src3="/orc-child-warlock.png"
          p1={p4}
          p2={p5}
          p3={p6}
          setIsFirstSelected={setIsSecondSelected}
          key={2}
          currentAccount={currentAccount}
          isNextSectionOpen={isSecondSelected}
        />
      )}
      {isFirstSelectedHuman && (
        <CustomizationSectionsHuman
          src1="/human-warrior-child.png"
          src2="/human-child-sorcerer.jpeg"
          src3="/human-child-church.jpeg"
          p1={p13}
          p2={p14}
          p3={p15}
          setIsFirstSelectedHuman={setIsSecondSelectedHuman}
          currentAccount={currentAccount}
          isNextSectionOpen={isSecondSelectedHuman}
        />
      )}
      {isSecondSelected && (
        <CustomizationSectionsOrc
          src1="/youth-warrior-orc.png"
          src2="/youth-sorcerer-orc.png"
          src3="/youth-warlock-orc.png"
          p1={p7}
          p2={p8}
          p3={p9}
          key={3}
          currentAccount={currentAccount}
          setIsFirstSelected={setIsStatSectionOpenOrc}
          isNextSectionOpen={isStatSectionOpenOrc}
        />
      )}
      {isSecondSelectedHuman && (
        <CustomizationSectionsHuman
          src1="/human-young-warrior.jpeg"
          src2="/human-sorcerer-young.jpeg"
          src3="/human-cleric-young.jpeg"
          p1={p16}
          p2={p17}
          p3={p18}
          setIsFirstSelectedHuman={setIsStatSectionOpen}
          currentAccount={currentAccount}
          isNextSectionOpen={isStatSectionOpen}
        />
      )}
      {isStatSectionOpen && (
        <CustomizationStatSectionHuman
          currentAccount={currentAccount}
          setCurrentAccount={setCurrentAccount}
          img1="/human-warrior-finalization.png"
          img2="/human-sorcerer-finalization.png"
          img3="/human-warlock-finalization.png"
          race="human"
          village="Amarat"
          itemList={itemList}
          armorList={armorList}
        />
      )}
      {isStatSectionOpenOrc && (
        <CustomizationStatSectionHuman
          currentAccount={currentAccount}
          setCurrentAccount={setCurrentAccount}
          img1="/orc-finalization-warrior.png"
          img2="/orc-finalization-sorcerer.png"
          img3="/orc-finalization-warlock.png"
          race="orc"
          village="Proyse"
          itemList={itemList}
          armorList={armorList}
        />
      )}
    </main>
  );
}

export default CustomizationMain;
