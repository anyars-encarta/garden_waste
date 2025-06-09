import { useEffect, useState } from "react";
import SkipContext from "../../context/SkipContext";

const SkipContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [activeSkipID, setActiveSkipID] = useState(null);

  const [postcodeComplete, setPostcodeComplete] = useState(true);
  const [wasteTypeComplete, setWasteTypeComplete] = useState(true);
  const [selectSkipComplete, setSelectSkipComplete] = useState(false);
  const [permitCheckComplete, setPermitCheckComplete] = useState(false);
  const [chooseDateComplete, setChooseDateComplete] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <SkipContext.Provider
      value={{
        selectedSkip,
        setSelectedSkip,
        activeSkipID,
        setActiveSkipID,
        theme,
        setTheme,
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
