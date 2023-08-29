const Display = ({numbers, operations, result }) => {
    

    return (
        <div className="mb-4 text-end">
            <div className="transition duration-500 ease-in-out dark:text-gray-400 text-xl mb-4">
                {result + ' ' + operations.slice(-1)} 
            </div>
            <div className="transition duration-500 ease-in-out dark:text-white text-5xl font-bold">
                {operations.length == 0 ?
                    '0'
                    : 
                    numbers.join('') }
            </div>
        </div>
    );
};

export default Display;
