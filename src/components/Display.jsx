const Display = ({numbers, result, operator, prevResult, prevOperator}) => {
    

    return (
        <div className="mb-4 text-end">
            <div className="transition duration-500 ease-in-out dark:text-gray-400 text-xl mb-4">
                {result === undefined ? '0' : prevResult + ' ' + prevOperator} 
            </div>
            <div className="transition duration-500 ease-in-out dark:text-white text-5xl font-bold">
                {
                numbers.length == 0 
                ? (
                    result === undefined 
                    ? '0'
                    :  prevResult
                ) 
                : numbers.join('')
                }
            </div>
        </div>
    );
};

export default Display;