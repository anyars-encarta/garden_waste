import ButtonState from "../ButtonState";
import CostComponent from "../CostComponent";
import PermissionComponent from "../PermissionComponent";

const SkipCard = ({ skip, active, onSelect }) => {
  const {
    size,
    allowed_on_road,
    allows_heavy_waste,
    hire_period_days,
    transport_cost,
    per_tonne_cost,
    vat,
    price_before_vat,
    forbidden,
  } = skip;

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
              <PermissionComponent
                imgSrc="warning"
                altText="warning"
                text="Not Allowed on the Road"
                bgColor="bg-gray-950"
              />
            )}

            {!allows_heavy_waste && (
              <PermissionComponent
                imgSrc="warning"
                altText="warning"
                text="Heavy Waste Not Allowed"
                bgColor="bg-red-950"
              />
            )}
          </div>
        </div>

        <img
          src="/waste_container.png"
          alt="Waste Container"
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
          <CostComponent name="Transport Cost" item={transport_cost} />

          <CostComponent name="Cost Per Tonne" item={per_tonne_cost} />

          <CostComponent name="VAT" item={vat} />
        </div>

        <div className='flex flex-col items-end'>
          <h2 className="text-3xl font-bold text-blue-600">
            £
            {(price_before_vat + vat || 0).toLocaleString("en-GB", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h2>

          <span className="text-sm text-gray-400">VAT inclusive</span>
        </div>
      </div>

      <button
        disabled={forbidden}
        className={`${
          active
            ? "bg-yellow-500 text-blue-500 hover:bg-yellow-300"
            : "bg-gray-800 text-white hover:bg-gray-600"
        } transition-colors duration-300 ease-in-out font-semibold py-2 px-4 rounded-md mt-4 w-full cursor-pointer flex items-center gap-4 justify-center`}
      >
        {!forbidden ? (
          active ? (
            <ButtonState
              state="Selected"
              imgSrc="selected"
              altText="selected"
            />
          ) : (
            <ButtonState
              state="Select Skip"
              imgSrc="right_arrow"
              altText="right arrow"
            />
          )
        ) : (
          <span className="text-gray-500">Not Available</span>
        )}
      </button>
    </div>
  );
};

export default SkipCard;
