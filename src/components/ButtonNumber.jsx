const ButtonNumber = ({children, numbers, setNumbers}) => {

  const handleNumberClick = () => {
    if (children === "," && numbers.includes(",")) {
      // No agregar una coma adicional si ya existe una en el array
      return;
    }
    setNumbers([...numbers, children])
  };
  


  return (
    <button 
      onClick={handleNumberClick}
      className="transition duration-500 ease-in-out flex items-center justify-center rounded-full w-16 h-16 hover:bg-gray-300 dark:hover:bg-zinc-700"
    >
        {children}
    </button>
  );
}

export default ButtonNumber
