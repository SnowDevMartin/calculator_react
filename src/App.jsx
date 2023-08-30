import { useEffect, useState } from "react";
import ButtonsList from "./components/ButtonsList";
import Display from "./components/Display";


function App() {

  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isFirstOperator, setIsFirstOperator] = useState(true);

  const [numbers, setNumbers] = useState([]);
  const [prevOperator, setPrevOperator] = useState('');
  const [operator, setOperator] = useState('');
  const [prevResult, setPrevResult] = useState(undefined)
  const [result, setResult] = useState(undefined)
  
  const [equal, setEqual] = useState(false)
  const [clear, setClear] = useState(false)

  function evalExpression(expressioncalc) {
    return new Function('return ' + expressioncalc)();
  }

  
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    if (isFirstOperator) {
      setIsFirstOperator(false);
      setPrevOperator(operator)
      setNumbers([])
      setOperator('')
      return;
    }
    try {
      const expression = numbers.join('');
      const operatorTransformed = prevOperator.replace(/×/g, '*').replace(/÷/g, '/');
      const expressionWithDots = expression.replace(/,/g, '.');

      const expressionToEvaluate = prevResult + operatorTransformed + expressionWithDots; // Combinar números y operador
      console.log(expressionToEvaluate);
      const calculatedResult = evalExpression(expressionToEvaluate);
      
      const roundedResult = parseFloat(calculatedResult.toFixed(2));
      const formattedResult = Number.isInteger(roundedResult)
      ? roundedResult.toString().replace('.', ',')
      : roundedResult.toFixed(2).replace('.', ',');
      
      setPrevOperator(operator)
      setPrevResult(formattedResult);
      setNumbers([])
      setOperator('')
    } catch (error) {
      setResult('Error de expresión: ' + error.message); // Agregar el mensaje de error
    }
  }, [operator])


  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    if(prevResult === undefined) {
      setPrevResult(0)
      return;
    }
    try {
      const expression = numbers.join('');
      const operatorTransformed = prevOperator.replace(/×/g, '*').replace(/÷/g, '/');
      const expressionWithDots = expression.replace(/,/g, '.');

      const expressionToEvaluate = prevResult + operatorTransformed + expressionWithDots; // Combinar números y operador
      console.log(expressionToEvaluate);
      const calculatedResult = evalExpression(expressionToEvaluate);
      
      const roundedResult = parseFloat(calculatedResult.toFixed(2));
      const formattedResult = Number.isInteger(roundedResult)
      ? roundedResult.toString().replace('.', ',')
      : roundedResult.toFixed(2).replace('.', ',');
      
      setPrevResult(formattedResult);

    } catch (error) {
      setResult('Error de expresión: ' + error.message); // Agregar el mensaje de error
    }

  }, [equal])

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    setIsFirstOperator(true)
    setPrevResult(undefined)
    setResult(undefined)
    setNumbers([])
    setOperator('')
    setPrevOperator('')
  },[clear])
  
  return (
    <>
      <div className="transition duration-500 ease-in-out dark:bg-zinc-950 bg-gray-100 flex flex-col items-center justify-end min-h-screen">
        <div className="max-w-lg w-full flex justify-end mb-4 mr-10">
          <button
            className="bg-red-500 text-white p4 uppercase text-center text-lg"
            onClick={() => {
              console.log(`
              El valor de numbers es: ${numbers}
              El valor de operator previo es: ${prevOperator}
              El valor de operator es: ${operator}
              El valor de resultado previo es: ${prevResult}
              El valor de resultado es: ${result}
              El valor de equal es: ${equal}
              `)}}
          >Console Log</button>
          <Display 
           numbers={numbers}
           operator={operator}
           result={result}
           prevResult={prevResult}
           prevOperator={prevOperator}
            />
        </div>
        <div className="max-w-lg w-full">
          <ButtonsList 
            numbers={numbers}
            setNumbers={setNumbers}
            operator={operator}
            setOperator={setOperator}
            setPrevOperator={setPrevOperator}
            prevResult={prevResult}
            setPrevResult={setPrevResult}
            setResult={setResult}
            result={result}
            equal={equal}
            setEqual={setEqual}
            clear={clear}
            setClear={setClear}
            />
        </div>
      </div>
    </>
  );
}

export default App;