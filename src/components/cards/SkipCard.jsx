const SkipCard = ({ skip, active, onSelect }) => {
    const { size, allowed_on_road, allows_heavy_waste, hire_period_days, transport_cost, per_tonne_cost, vat, price_before_vat, forbidden } = skip;

  return (
    <div
      className={`flex-1 border p-4 rounded-lg bg-gray-900 min-w-[300px] hover:-translate-y-2 transition-transform duration-300 ease-in-out hover:border-yellow-500 cursor-pointer ${
        active ? "border-yellow-500" : "border-gray-500"
      }`}
      onClick={onSelect}
    >
      <div className="relative w-full h-34 bg-gray-800 rounded-lg mt-1 border border-yellow-500 hover:border-blue-500">
        <div className="absolute top-4 right-2 flex flex-col items-end gap-8">
          <div className=" bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {size} Yards
          </div>

          <div className="flex flex-col items-end gap-1">
            {!allowed_on_road && (
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

            {!allows_heavy_waste && (
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
          className="w-20 h-20 object-cover rounded-full absolute top-7 left-7 transform -translate-x-1/2 -translate-y-1/2 border border-yellow-500"
        />
      </div>

      <div className="flex items-center justify-between mb-10">
        <h2 className="text-xl font-semibold text-white mt-4 mb-2">
          {size} Yard Skip
        </h2>

        <span className="text-sm text-gray-400">
          {hire_period_days} day hire
        </span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div>
          <p>
            Transport Cost:{" "}
            <span className="text-blue-600">
              £
              {(transport_cost || 0).toLocaleString("en-GB", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </p>

          <p>
            Per Tonne Cost:{" "}
            <span className="text-blue-600">
              £
              {(per_tonne_cost || 0).toLocaleString("en-GB", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </p>

          <p>
            VAT:{" "}
            <span className="text-blue-600">
              £
              {(vat || 0).toLocaleString("en-GB", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
        </div>
        <h2 className="text-3xl font-bold text-blue-600">
          £
          {(price_before_vat || 0).toLocaleString("en-GB", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h2>
      </div>

      <button
        disabled={forbidden}
        className={`${
          active ? "bg-yellow-500" : "bg-gray-800"
        } hover:bg-gray-600 transition-colors duration-300 ease-in-out ${active ? "text-blue-500" : "text-white"} font-semibold py-2 px-4 rounded-md mt-4 w-full cursor-pointer flex items-center gap-4 justify-center`}
      >
        {!forbidden ? (
          active ? (
            <>
              Selected
              <img
                src="/selected.png"
                alt="Skip Size"
                className="w-6 h-6 object-cover"
              />
            </>
          ) : (
            <>
              Select Skip
              <img
                src="/right_arrow.png"
                alt="Skip Size"
                className="w-6 h-6 object-cover"
              />
            </>
          )
        ) : (
          <span className="text-gray-500">Not Available</span>
        )}
      </button>
    </div>
  );
};

export default SkipCard;
