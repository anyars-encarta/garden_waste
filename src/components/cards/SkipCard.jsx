import { useState } from "react";

const SkipCard = () => {
  const [allowed, setAllowed] = useState(true);
  const [heavyWaste, setHeavyWaste] = useState(false);
  const [size, setSize] = useState(4);

  return (
    <div className="flex-1 border border-gray-500 p-4 rounded-lg bg-gray-900 min-w-[300px] hover:-translate-y-2 transition-transform duration-300 ease-in-out hover:border-blue-500 cursor-pointer">
      <div className="relative w-full h-34 bg-gray-800 rounded-lg mt-1 border border-yellow-500">
        <div className="absolute top-4 right-2 flex flex-col items-end gap-8">
          <div className=" bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {size} Yard Skip
          </div>

          <div className='flex flex-col items-end gap-1'>
            {allowed && (
              <div className="flex items-center gap-2 bg-gray-950 rounded-full px-2 py-1">
                <img
                  src="/warning.png"
                  alt="warning"
                  className="w-4 h-4 object-cover rounded-full"
                />
                <span className=" text-white  text-xs">
                  Not Allowed on the Road
                </span>
              </div>
            )}

            {!heavyWaste && (
              <div className="flex items-center gap-2 bg-red-950 rounded-full px-2 py-1">
                <img
                  src="/warning.png"
                  alt="warning"
                  className="w-4 h-4 object-cover rounded-full"
                />
                <span className=" text-white  text-xs">
                  Heavy Waste Not Allowed
                </span>
              </div>
            )}
          </div>
        </div>

        <img
          src="/waste_container.png"
          alt="Skip Size"
          className="w-20 h-20 object-cover rounded-full absolute top-7 left-7 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="flex items-center justify-between mb-10">
        <h2 className="text-xl font-semibold text-white mt-4 mb-2">
          {size} Yard Skip
        </h2>

        <span className="text-sm text-gray-400">14 day hire</span>
      </div>

      <h2 className="text-3xl font-bold text-blue-600">$50</h2>

      <button className="bg-gray-800 hover:bg-gray-600 transition-colors duration-300 ease-in-out text-white py-2 px-4 rounded-md mt-4 w-full cursor-pointer flex items-center gap-4 justify-center">
        Select Skip
        <img
          src="/right_arrow.png"
          alt="Skip Size"
          className="w-6 h-6 object-cover"
        />
      </button>
    </div>
  );
};

export default SkipCard;
