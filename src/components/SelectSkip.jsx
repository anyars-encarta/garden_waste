import SkipCard from "./cards/SkipCard";

const SelectSkip = () => {
  return (
    <div className="h-screen w-[70%] md:w-[92%] lg:w-[84%] xl:w-[70%] overflow-x-hidden flex flex-col items-center py-10 px-8">
      <h1 className="text-xl font-bold text-blue-600 bg-gray-800 py-1 px-4 rounded-full text-center min-w-[320px]">
        Choose Your Perfect Skip Size
      </h1>

      <span className="mt-10 text-lg font-semibold min-w-[320px] text-center text-gray-500">
        Select the right skip for your project - compare sizes, prices, and
        restrictions at a glance.
      </span>

      <div className="mt-10 flex justify-between gap-4 flex-wrap w-full">
        <SkipCard />
        <SkipCard />
        <SkipCard />
        <SkipCard />
        <SkipCard />
      </div>
    </div>
  );
};

export default SelectSkip;
