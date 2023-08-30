const ButtonOperator = ({children, setOperator, prevResult, setResult, setPrevResult, result, numbers}) => {


    const handleOperatorClick = () => {
        if(prevResult === undefined && children != '-'){
            return;
        }
        if(result === undefined) {
            setResult(numbers.join(''))
            setPrevResult(numbers.join(''))
            console.log('result ya no es undefined');
            // setResult(numbers.join(''))
          }
        
        setOperator(children)
    }
    
    return (
        <button 
            className="transition duration-500 ease-in-out flex items-center justify-center rounded-full w-16 h-16 text-3xl bg-gray-300 dark:bg-neutral-800 hover:bg-gray-400 dark:hover:bg-zinc-700"
            onClick={handleOperatorClick}
        >
            {children}
        </button>
    )
}

export default ButtonOperator