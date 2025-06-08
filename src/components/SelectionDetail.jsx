const SelectionDetail = (skip) => {
  console.log("This is the skip", skip);

  return (
    <div className="sticky bottom-0 left-0 flex size-full flex-col">
      <section className="glassmorphism-gold flex h-[112px] w-full items-center justify-between gap-8 px-4 py-4 max-md:justify-center max-md:gap-5 md:px-12">
        <button className="bg-blue-600 hover:bg-blue-700 not-only:rounded-md text-white px-4 py-2 cursor-pointer">
          Back
        </button>

        <div className="flex items-center justify-between max-md:text-center">
          <p className="w-[50%] text-xs md:text-sm sm:line-clamp-3 text-center max-md:w-3/4 text-gray-100 border-r-2 pr-8">
            Imagery and information shown throughout this website may not
            reflect the exact shape or size specification, colours may vary,
            options and/or accessories may be featured at additional cost.
          </p>

          <div className="flex items-center justify-between w-[50%] pl-4 max-md:w-3/4">
            <div>
              <h2 className="text-3xl sm:text-lg text-white">
                {skip.skip.size} Yard Skip
              </h2>
              <p className="text-md text-gray-500">
                {skip.skip.hire_period_days} days hire
              </p>
            </div>

            <div classname="flex flex-col items-end">
              <h2 className="text-3xl sm:text-lg text-blue-600 font-bold">
                £
                {(
                  skip.skip.price_before_vat + skip.skip.vat || 0
                ).toLocaleString("en-GB", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h2>
              <p className="text-md text-gray-500">includes VAT</p>
            </div>
          </div>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 rounded-md text-white px-4 py-2 cursor-pointer">
          Next
        </button>
      </section>
    </div>
  );
};

export default SelectionDetail;
