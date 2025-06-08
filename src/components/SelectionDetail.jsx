const SelectionDetail = (skip) => {
  console.log("This is the skip", skip);

  return (
    <div className="sticky bottom-0 left-0 flex size-full flex-col">
      <section className="glassmorphism-gold flex h-[112px] w-full items-center justify-between px-4 max-md:justify-center max-md:gap-5 md:px-12">
      <button className="btn btn-ghost btn-circle">Back</button>
        <button className="btn btn-ghost btn-circle">Next</button>
      </section>
    </div>
  );
};

export default SelectionDetail;
