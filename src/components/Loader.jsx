const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <img src="/loading-circle.svg" alt="Loading..." className="h-24 w-24" />

      <div className="flex justify-center items-center">
        <div className="w-5 h-5 rounded-full bg-yellow-500 mr-10 animate-bounce" />
        <div className="w-5 h-5 rounded-full bg-yellow-500 mr-10 animate-bounce delay-200" />
        <div className="w-5 h-5 rounded-full bg-yellow-500 animate-bounce delay-300" />
      </div>
    </div>
  );
};

export default Loader;
