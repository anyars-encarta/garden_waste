import { useContext } from "react";
import {
  DateComponent,
  PaymentComponent,
  PermitCheckComponent,
  PostCodeComponent,
  VehicleComponent,
  WasteComponent,
} from "../components/progress-icon-components";
import SkipContext from "../../context/SkipContext";

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
    <div className="flex flex-col items-start gap-4 text-white min-h-screen lg:min-w-[300px] mt-50">
      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          <PostCodeComponent
            color={`${postcodeComplete ? "text-blue-600" : "text-white"}`}
          />
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
          <WasteComponent
            color={`${wasteTypeComplete ? "text-blue-600" : "text-white"}`}
          />
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
          <VehicleComponent
            color={`${selectSkipComplete ? "text-blue-600" : "text-white"}`}
          />
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
          <PermitCheckComponent color={`${permitCheckComplete ? "text-blue-600" : "text-white"}`} />
          <div className={`w-[2px] h-[60px] ${chooseDateComplete ? "bg-blue-600" : "bg-white"} mx-auto`} />
        </div>
        <p className={`-mt-18 hidden lg:block font-light ${permitCheckComplete ? "text-blue-600" : "text-white"}`}>Permit Check</p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          <DateComponent color={`${chooseDateComplete ? "text-blue-600" : "text-white"}`} />
          <div className={`w-[2px] h-[60px] ${paymentComplete ? "bg-blue-600" : "bg-white"} mx-auto`} />
        </div>
        <p className={`-mt-18 hidden lg:block font-light ${chooseDateComplete ? "text-blue-600" : "text-white"}`}>Choose Date</p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <PaymentComponent color={`${paymentComplete ? "text-blue-600" : "text-white"}`} />
        <p className={`hidden lg:block font-light ${paymentComplete ? "text-blue-600" : "text-white"}`}>Make Payment</p>
      </div>
    </div>
  );
};

export default Progress;
