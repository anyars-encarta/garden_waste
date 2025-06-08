import { useState } from "react";
import SkipContext from "../../context/SkipContext";

const SkipContextProvider = ({ children }) => {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [activeSkipID, setActiveSkipID] = useState(null);

  const [postcodeComplete, setPostcodeComplete] = useState(true);
  const [wasteTypeComplete, setWasteTypeComplete] = useState(true);
  const [selectSkipComplete, setSelectSkipComplete] = useState(true);
  const [permitCheckComplete, setPermitCheckComplete] = useState(true);
  const [chooseDateComplete, setChooseDateComplete] = useState(true);
  const [paymentComplete, setPaymentComplete] = useState(true);

  return (
    <SkipContext.Provider
      value={{
        selectedSkip,
        setSelectedSkip,
        activeSkipID,
        setActiveSkipID,
        postcodeComplete,
        setPostcodeComplete,
        wasteTypeComplete,
        setWasteTypeComplete,
        selectSkipComplete,
        setSelectSkipComplete,
        permitCheckComplete,
        setPermitCheckComplete,
        chooseDateComplete,
        setChooseDateComplete,
        paymentComplete,
        setPaymentComplete,
      }}
    >
      {children}
    </SkipContext.Provider>
  );
};

export default SkipContextProvider;
