import { useEffect, useState } from "react";
import ButtonsList from "./components/ButtonsList";
import Display from "./components/Display";


function App() {

  const [numbers, setNumbers] = useState([]);
  const [chainNumbersArr, setChainNumbersArr] = useState([]);
  const [operator, setOperator] = useState('');
  const [operations, setOperations] = useState([]);
  const [result, setResult] = useState('')


  useEffect(() => {
    if(numbers.length === 0) {
      return;
    }
    const chainNumbers = numbers.join('')
    setOperations([...operations, chainNumbers, operator])
    setNumbers([])
    setOperator('')
  }, [operator])
  
  useEffect(() => {
    try {
      const expression = operations.slice(0, -1);
      const expressionReplaceChar = expression.map(item => {
        if (item === '×') return '*';
        if (item === '÷') return '/';
        return item;
      }).join('');
      const expressionWithDots = expressionReplaceChar.replace(/,/g, '.');
      const calculatedResult = eval(expressionWithDots);
      const roundedResult = parseFloat(calculatedResult.toFixed(2)); // Redondea a 2 decimales y convierte a número
      const formattedResult = Number.isInteger(roundedResult)
      ? roundedResult.toString().replace('.', ',')
      : roundedResult.toFixed(2).replace('.', ',');
      setResult(formattedResult);
    } catch (error) {
      if(operations.length === 0) {
        console.log('Operations aún es 0');
        return;
      }
      setResult('Error de expresión:', error);
    }
  }, [operations])
  
  return (
    <>
      <div className="transition duration-500 ease-in-out dark:bg-zinc-950 bg-gray-100 flex flex-col items-center justify-end min-h-screen">
        <div className="max-w-lg w-full flex justify-end mb-4 mr-10">
          {/* <button
            className="bg-red-500 text-white p4 uppercase text-center text-lg"
            onClick={() => {
              console.log(`
              El valor de numbers es: ${numbers}
              El valor de operator es: ${operator}
              El valor de operations es: ${operations} y su length es de: ${operations.length}
              `)}}
          >Console Log</button> */}
          <Display 
           numbers={numbers}
           operations={operations}
           setOperations={setOperations}
           result={result}
            />
        </div>
        <div className="max-w-lg w-full">
          <ButtonsList 
            numbers={numbers}
            setNumbers={setNumbers}
            operator={operator}
            setOperator={setOperator}
            chainNumbersArr={chainNumbersArr}
            setChainNumbersArr={setChainNumbersArr}
            operations={operations}
            setOperations={setOperations}
            />
        </div>
      </div>
    </>
  );
}

export default App;



