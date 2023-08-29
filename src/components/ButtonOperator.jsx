const ButtonOperator = ({children, operator, setOperator, operations}) => {


    const handleOperatorClick = () => {
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
