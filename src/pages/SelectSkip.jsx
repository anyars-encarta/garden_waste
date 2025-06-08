import { useContext, useEffect } from "react";
import SkipCard from "../components/cards/SkipCard";
import SkipContext from "../../context/SkipContext";

const SelectSkip = ({ skips }) => {
  const { setSelectedSkip, activeSkipID, setActiveSkipID } =
    useContext(SkipContext);

  useEffect(() => {
    const storedSkip = localStorage.getItem("selectedSkip");

    if (storedSkip) {
      const parsedSkip = JSON.parse(storedSkip);
      setSelectedSkip(parsedSkip);
      setActiveSkipID(parsedSkip ? parsedSkip.id : null);
    }
  }, [setSelectedSkip, setActiveSkipID]);

  return (
    <div className="min-h-screen w-[70%] md:w-[92%] lg:w-[70%] flex flex-col items-center py-10 px-8">
      <h1 className="text-xl font-bold text-blue-600 bg-gray-800 py-1 px-4 rounded-full text-center min-w-[320px]">
        Choose Your Perfect Skip Size
      </h1>

      <span className="mt-10 text-lg font-semibold min-w-[320px] text-center text-gray-500">
        Select the right skip for your project - compare sizes, prices, and
        restrictions at a glance.
      </span>

      <div className="mt-10 flex justify-between gap-6 flex-wrap w-full">
        {skips.map((skip) => {
          const { id } = skip;

          return (
            <SkipCard
              skip={skip}
              key={id}
              active={activeSkipID === id}
              onSelect={() => {
                setActiveSkipID(activeSkipID === id ? null : id);
                setSelectedSkip(activeSkipID === id ? null : skip);
                localStorage.setItem(
                  "selectedSkip",
                  activeSkipID === id ? null : JSON.stringify(skip)
                );
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SelectSkip;
