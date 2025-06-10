const PermissionComponent = ({ imgSrc, altText, text, bgColor }) => {
  return (
    <div className={`flex items-center gap-2 ${bgColor} rounded-full px-2 py-1`}>
      <img
        src={`/${imgSrc}.png`}
        alt={altText}
        className="w-4 h-4 object-cover rounded-full"
      />
      <span className="text-white text-xs">{text}</span>
    </div>
  );
};

export default PermissionComponent;
