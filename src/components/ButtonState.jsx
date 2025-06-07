const ButtonState = ({ state, imgSrc, altText }) => {
  return (
    <>
      {state}
      <img
        src={`/${imgSrc}.png`}
        alt={altText}
        className="w-6 h-6 object-cover"
      />
    </>
  );
};

export default ButtonState;
