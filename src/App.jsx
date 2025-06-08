import { useContext, useEffect, useState } from "react";

import SkipContext from "../context/SkipContext";
import SelectionDetail from "./components/SelectionDetail";
import SelectSkip from "./pages/SelectSkip";
import Progress from "./pages/Progress";
import Loader from "./components/Loader";

const App = () => {
  const [skips, setSkips] = useState(null);
  const { selectedSkip, activeSkipID } = useContext(SkipContext);

  useEffect(() => {
    fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    )
      .then((res) => res.json())
      .then((data) => {
        setSkips(data);
      });
  }, []);

  if (!skips) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="min-h-screen bg-gray-950 text-white flex justify-center">
        <Progress />
        <SelectSkip skips={skips} />
      </div>

      {activeSkipID && <SelectionDetail skip={selectedSkip} />}
    </div>
  );
};

export default App;
