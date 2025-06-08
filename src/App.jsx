import { useContext } from "react";

import SkipContext from "../context/SkipContext";
import SelectionDetail from "./components/SelectionDetail";
import SelectSkip from "./pages/SelectSkip";
import Progress from "./pages/Progress";

const App = () => {
  const { selectedSkip, activeSkipID } = useContext(SkipContext);

  return (
    <div className="min-h-screen">
      <div className="min-h-screen bg-gray-950 text-white flex justify-center">
        <Progress />
        <SelectSkip />
      </div>

      {activeSkipID && <SelectionDetail skip={selectedSkip} />}
    </div>
  );
};

export default App;
