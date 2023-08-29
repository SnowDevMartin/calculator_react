import { useEffect, useState } from "react";

const ButtonNumber = ({children, numbers, setNumbers, chainNumbersArr, setChainNumbersArr, operators, setOperators}) => {

  const isLastCharacterOperator = () => {
    const operators = ['+', '-', '×', '÷', '%'];
    const lastCharacter = operations.slice(-1);
    return operators.includes(lastCharacter);
  };

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
