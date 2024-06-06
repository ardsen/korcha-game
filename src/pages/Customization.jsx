import CustomizationHeader from "../components/customizationcomponents/CustomizationHeader";
import CustomizationMain from "../components/customizationcomponents/CustomizationMain";
import "../style/customization.css";
function Customization({
  currentAccount,
  setCurrentAccount,
  itemList,
  armorList,
}) {
  return (
    <>
      <CustomizationHeader />
      <CustomizationMain
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
        itemList={itemList}
        armorList={armorList}
      />
    </>
  );
}

export default Customization;
