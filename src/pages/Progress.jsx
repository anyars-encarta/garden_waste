import { useContext } from "react";

import SkipContext from "../../context/SkipContext";
import { ICONS } from "../constants/Icons";

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
            color: postcodeComplete ? "text-blue-600" : theme === "dark" ? "text-white" : "text-gray-500",
          })}
          <div
            className={`w-[2px] h-[40px] ${
              wasteTypeComplete ? "bg-blue-600" : theme === "dark" ? "bg-white" : "bg-gray-500"
            } mx-auto`}
          />
        </div>
        <p
          className={`-mt-13 hidden lg:block font-light ${
            postcodeComplete ? "text-blue-600" : theme === "dark" ? "text-white" : "text-gray-500"
          }`}
        >
          Postal Code
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          {ICONS.waste({
            color: wasteTypeComplete ? "text-blue-600" : theme === "dark" ? "text-white" : "text-gray-500",
          })}
          <div
            className={`w-[2px] h-[40px] ${
              selectSkipComplete ? "bg-blue-600" : theme === "dark" ? "bg-white" : "bg-gray-500"
            } mx-auto`}
          />
        </div>
        <p
          className={`-mt-13 hidden lg:block font-light ${
            wasteTypeComplete ? "text-blue-600" : theme === "dark" ? "text-white" : "text-gray-500"
          }`}
        >
          Waste Type
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          {ICONS.vehicle({
            color: selectSkipComplete ? "text-blue-600" : theme === "dark" ? "text-white" : "text-gray-500",
          })}
          <div
            className={`w-[2px] h-[40px] ${
              permitCheckComplete ? "bg-blue-600" : theme === "dark" ? "bg-white" : "bg-gray-500"
            } mx-auto`}
          />
        </div>
        <p
          className={`-mt-13 hidden lg:block font-light ${
            selectSkipComplete ? "text-blue-600" : theme === "dark" ? "text-white" : "text-gray-500"
          }`}
        >
          Select Skip
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          {ICONS.permitCheck({
            color: permitCheckComplete ? "text-blue-600" : theme === "dark" ? "text-white" : "text-gray-500",
          })}
          <div
            className={`w-[2px] h-[40px] ${
              chooseDateComplete ? "bg-blue-600" : theme === "dark" ? "bg-white" : "bg-gray-500"
            } mx-auto`}
          />
        </div>
        <p
          className={`-mt-13 hidden lg:block font-light ${
            permitCheckComplete ? "text-blue-600" : theme === "dark" ? "text-white" : "text-gray-500"
          }`}
        >
          Permit Check
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          {ICONS.date({
            color: chooseDateComplete ? "text-blue-600" : theme === "dark" ? "text-white" : "text-gray-500",
          })}
          <div
            className={`w-[2px] h-[40px] ${
              paymentComplete ? "bg-blue-600" : theme === "dark" ? "bg-white" : "bg-gray-500"
            } mx-auto`}
          />
        </div>
        <p
          className={`-mt-13 hidden lg:block font-light ${
            chooseDateComplete ? "text-blue-600" : theme === "dark" ? "text-white" : "text-gray-500"
          }`}
        >
          Choose Date
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        {ICONS.payment({
          color: paymentComplete ? "text-blue-600" : theme === "dark" ? "text-white" : "text-gray-500",
        })}
        <p
          className={`hidden lg:block font-light ${
            paymentComplete ? "text-blue-600" : theme === "dark" ? "text-white" : "text-gray-500"
          }`}
        >
          Make Payment
        </p>
      </div>
    </div>
  );
};

export default Progress;
