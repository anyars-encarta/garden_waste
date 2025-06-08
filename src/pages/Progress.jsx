import {
  DateComponent,
  PaymentComponent,
  PermitCheckComponent,
  PostCodeComponent,
  VehicleComponent,
  WasteComponent,
} from "../components/progress-icon-components";

const Progress = () => {
  return (
    <div className="flex flex-col items-start gap-4 text-white min-h-screen lg:min-w-[300px] mt-50">
      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          <PostCodeComponent color="text-white" />
          <div className="w-[2px] h-[60px] bg-white mx-auto " />
        </div>
        <p className="-mt-18 hidden lg:block font-light">Postal Code</p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          <WasteComponent color="text-white" />
          <div className="w-[2px] h-[60px] bg-white mx-auto " />
        </div>
        <p className="-mt-18 hidden lg:block font-light">Waste Type</p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          <VehicleComponent color="text-white" />
          <div className="w-[2px] h-[60px] bg-white mx-auto " />
        </div>
        <p className="-mt-18 hidden lg:block font-light">Select Skip</p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          <PermitCheckComponent color="text-white" />
          <div className="w-[2px] h-[60px] bg-white mx-auto " />
        </div>
        <p className="-mt-18 hidden lg:block font-light">Permit Check</p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          <DateComponent color="text-white" />
          <div className="w-[2px] h-[60px] bg-white mx-auto " />
        </div>
        <p className="-mt-18 hidden lg:block font-light">Choose Date</p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <PaymentComponent color="text-white" />
        <p className="hidden lg:block font-light">Make Payment</p>
      </div>
    </div>
  );
};

export default Progress;
