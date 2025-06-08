import { useState } from "react";
import SkipContext from "../../context/SkipContext";

const SkipContextProvider = ({ children }) => {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [activeSkipID, setActiveSkipID] = useState(null);

  return (
    <SkipContext.Provider
      value={{ selectedSkip, setSelectedSkip, activeSkipID, setActiveSkipID }}
    >
      {children}
    </SkipContext.Provider>
  );
};

export default SkipContextProvider;
