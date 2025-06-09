import { useContext } from "react";

import SkipContext from "../../context/SkipContext";
import { ICONS } from "../constants/Icons";

const getStepColor = (complete, theme) => {
  if (complete) return "text-blue-600";
  return theme === "dark" ? "text-white" : "text-gray-500";
};

const getLineColor = (complete, theme) => {
  if (complete) return "bg-blue-600";
  return theme === "dark" ? "bg-white" : "bg-gray-500";
};

const Progress = () => {
  const {
    theme,
    setTheme,
    postcodeComplete,
    wasteTypeComplete,
    selectSkipComplete,
    permitCheckComplete,
    chooseDateComplete,
    paymentComplete,
  } = useContext(SkipContext);

  return (
    <div className="fixed left-[2%] flex flex-col items-start gap-4 text-white min-h-screen lg:min-w-[300px] mt-30">
      <img
        src={
          theme === "dark" ? "/src/assets/light.svg" : "/src/assets/dark.svg"
        }
        alt="theme"
        className="w-8 h-8 cursor-pointer"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      />

      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          {ICONS.postCode({
            color: getStepColor(postcodeComplete, theme),
          })}
          <div
            className={`w-[2px] h-[40px] ${getLineColor(wasteTypeComplete, theme)} mx-auto`}
          />
        </div>
        <p
          className={`-mt-13 hidden lg:block font-light ${getStepColor(postcodeComplete, theme)}`}
        >
          Postal Code
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          {ICONS.waste({
            color: getStepColor(wasteTypeComplete, theme),
          })}
          <div
            className={`w-[2px] h-[40px] ${getLineColor(selectSkipComplete, theme)} mx-auto`}
          />
        </div>
        <p
          className={`-mt-13 hidden lg:block font-light ${getStepColor(wasteTypeComplete, theme)}`}
        >
          Waste Type
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          {ICONS.vehicle({
            color: getStepColor(selectSkipComplete, theme),
          })}
          <div
            className={`w-[2px] h-[40px] ${getLineColor(permitCheckComplete, theme)} mx-auto`}
          />
        </div>
        <p
          className={`-mt-13 hidden lg:block font-light ${getStepColor(selectSkipComplete, theme)}`}
        >
          Select Skip
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          {ICONS.permitCheck({
            color: getStepColor(permitCheckComplete, theme),
          })}
          <div
            className={`w-[2px] h-[40px] ${getLineColor(chooseDateComplete, theme)} mx-auto`}
          />
        </div>
        <p
          className={`-mt-13 hidden lg:block font-light ${getStepColor(permitCheckComplete, theme)}`}
        >
          Permit Check
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          {ICONS.date({
            color: getStepColor(chooseDateComplete, theme),
          })}
          <div
            className={`w-[2px] h-[40px] ${getLineColor(paymentComplete, theme)} mx-auto`}
          />
        </div>
        <p
          className={`-mt-13 hidden lg:block font-light ${getStepColor(chooseDateComplete, theme)}`}
        >
          Choose Date
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        {ICONS.payment({
          color: getStepColor(paymentComplete, theme),
        })}
        <p
          className={`hidden lg:block font-light ${getStepColor(paymentComplete, theme)}`}
        >
          Make Payment
        </p>
      </div>
    </div>
  );
};

export default Progress;