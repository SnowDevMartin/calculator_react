const ButtonEqual = ({ children, equal, setEqual }) => {

  function handleEqual() {
    if(equal) {setEqual(false)} 
    else {setEqual(true)}
  }

  return (
    <button
      className="flex items-center buttonequal text-white justify-center rounded-full w-full h-full row-span-2 text-3xl"
      onClick={handleEqual}
    >
      {children}
    </button>
  );
};

export default ButtonEqual;
