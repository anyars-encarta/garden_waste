import { useContext } from "react";

import SkipContext from "../../context/SkipContext";
import { ICONS } from "../constants/Icons";


const Progress = () => {
  const {
    postcodeComplete,
    wasteTypeComplete,
    selectSkipComplete,
    permitCheckComplete,
    chooseDateComplete,
    paymentComplete,
  } = useContext(SkipContext);

  return (
    <div className="fixed left-[2%] flex flex-col items-start gap-4 text-white min-h-screen lg:min-w-[300px] mt-50">
      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          {ICONS.postCode({
        color: postcodeComplete ? "text-blue-600" : "text-white",
      })}
          <div
            className={`w-[2px] h-[60px] ${
              wasteTypeComplete ? "bg-blue-600" : "bg-white"
            } mx-auto`}
          />
        </div>
        <p
          className={`-mt-18 hidden lg:block font-light ${
            postcodeComplete ? "text-blue-600" : "text-white"
          }`}
        >
          Postal Code
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          {ICONS.waste({
        color: wasteTypeComplete ? "text-blue-600" : "text-white",
      })}
          <div
            className={`w-[2px] h-[60px] ${
              selectSkipComplete ? "bg-blue-600" : "bg-white"
            } mx-auto`}
          />
        </div>
        <p
          className={`-mt-18 hidden lg:block font-light ${
            wasteTypeComplete ? "text-blue-600" : "text-white"
          }`}
        >
          Waste Type
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          {ICONS.vehicle({
        color: selectSkipComplete ? "text-blue-600" : "text-white",
      })}
          <div className={`w-[2px] h-[60px] ${permitCheckComplete ? "bg-blue-600" : "bg-white"} mx-auto`} />
        </div>
        <p
          className={`-mt-18 hidden lg:block font-light ${
            selectSkipComplete ? "text-blue-600" : "text-white"
          }`}
        >
          Select Skip
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          {ICONS.permitCheck({
        color: permitCheckComplete ? "text-blue-600" : "text-white",
      })}
          <div className={`w-[2px] h-[60px] ${chooseDateComplete ? "bg-blue-600" : "bg-white"} mx-auto`} />
        </div>
        <p className={`-mt-18 hidden lg:block font-light ${permitCheckComplete ? "text-blue-600" : "text-white"}`}>Permit Check</p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          {ICONS.date({
        color: chooseDateComplete ? "text-blue-600" : "text-white",
      })}
          <div className={`w-[2px] h-[60px] ${paymentComplete ? "bg-blue-600" : "bg-white"} mx-auto`} />
        </div>
        <p className={`-mt-18 hidden lg:block font-light ${chooseDateComplete ? "text-blue-600" : "text-white"}`}>Choose Date</p>
      </div>

      <div className="flex items-center justify-center gap-2">
        {ICONS.payment({
        color: paymentComplete ? "text-blue-600" : "text-white",
      })}
        <p className={`hidden lg:block font-light ${paymentComplete ? "text-blue-600" : "text-white"}`}>Make Payment</p>
      </div>
    </div>
  );
};

export default Progress;
