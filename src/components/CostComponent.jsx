import { useContext } from "react";
import SkipContext from "../../context/SkipContext";

const CostComponent = ({name, item}) => {
  const { theme } = useContext(SkipContext);

  return (
    <p className={`${theme === "dark" ? "text-white" : "text-black"} font-semibold`}>
      {name}:{" "}
      <span className="text-blue-600">
        £
        {(item || 0).toLocaleString("en-GB", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </span>
    </p>
  );
};

export default CostComponent;
