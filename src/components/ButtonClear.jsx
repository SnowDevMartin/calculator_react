const ButtonClear = ({children}) => {
  return (
    <button className="transition duration-500 ease-in-out flex items-center justify-center rounded-full w-16 h-16 btn-clea text-xl hover:bg-gray-300 dark:hover:bg-zinc-700">
        {children}
    </button>
  )
}

export default ButtonClear
