const CostComponent = ({name, item}) => {
  return (
    <p>
      {name}:{" "}
      <span className="text-blue-600">
        £
        {(item || 0).toLocaleString("en-GB", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </span>
    </p>
  );
};

export default CostComponent;
