import { useContext } from "react";
import SkipContext from "../../context/SkipContext";

const SelectionDetail = ({ skip }) => {
  const { setSelectSkipComplete, theme } = useContext(SkipContext);

  const { size, hire_period_days, price_before_vat, vat } = skip;
  return (
    <div className="sticky bottom-0 left-0 w-full flex flex-col">
      <div className="glassmorphism-gold flex h-[112px] w-full mx-auto items-center justify-between gap-4 sm:gap-8 px-2 sm:px-4 md:px-12">
        <button
          className="bg-blue-600 hover:bg-blue-700 rounded-md text-white px-4 py-2 cursor-pointer"
          onClick={() => {
            // Functionality to navigate to previous page
          }}
        >
          Back
        </button>

        <div className="flex flex-1 items-center justify-between max-md:flex-col max-md:gap-2 max-md:text-center">
          <p className="hidden lg:block w-1/2 text-xs md:text-sm line-clamp-2 text-center text-gray-100 border-r-2 pr-4">
            Imagery and information shown throughout this website may not
            reflect the exact shape or size specification, colours may vary,
            options and/or accessories may be featured at additional cost.
          </p>

          <div className="flex items-center justify-between w-full lg:w-1/2 pl-0 lg:pl-4 max-md:w-full">
            <div className="text-left max-md:text-center">
              <h2 className="text-lg md:text-3xl text-white">
                {size} Yard Skip
              </h2>
              <p
                className={`text-md ${
                  theme === "dark" ? "text-gray-400" : "text-gray-700"
                }`}
              >
                {hire_period_days} days hire
              </p>
            </div>

            <div className="flex flex-col items-end max-md:items-center ml-4">
              <h2 className="text-2xl md:text-3xl text-blue-600 font-bold">
                £
                {(price_before_vat + vat || 0).toLocaleString("en-GB", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h2>
              <p
                className={`text-md ${
                  theme === "dark" ? "text-gray-400" : "text-gray-700"
                }`}
              >
                includes VAT
              </p>
            </div>
          </div>
        </div>

        <button
          className="bg-blue-600 hover:bg-blue-700 rounded-md text-white px-4 py-2 cursor-pointer"
          onClick={
            () => setSelectSkipComplete(true)
            // App then navigates to the next page
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SelectionDetail;
