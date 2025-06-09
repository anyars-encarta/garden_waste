import { useContext } from "react";

import SkipContext from "../context/SkipContext";
import SelectionDetail from "./components/SelectionDetail";
import SelectSkip from "./pages/SelectSkip";
import Progress from "./pages/Progress";

const App = () => {
  const { theme } = useContext(SkipContext);
  const { selectedSkip, activeSkipID } = useContext(SkipContext);

  return (
    <div className="min-h-screen">
      <div
        className={`min-h-screen ${
          theme === "dark" ? "bg-gray-800" : "bg-gray-100"
        } text-white flex justify-center`}
      >
        <Progress />
        <SelectSkip />
      </div>

      {activeSkipID && <SelectionDetail skip={selectedSkip} />}
    </div>
  );
};

export default App;
