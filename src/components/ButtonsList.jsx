import ButtonClear from "./ButtonClear";
import ButtonEqual from "./ButtonEqual";
import ButtonNumber from "./ButtonNumber";
import ButtonOperator from "./ButtonOperator";
import ButtonThemeColor from "./ButtonThemeColor";

const ButtonsList = ({numbers, setNumbers, operator, setOperator, setPrevOperator}) => {
  

  return (
    <div className="transition duration-500 ease-in-out shadow-md bg-gray-200 dark:bg-neutral-900 rounded-t-lg py-10 px-5 w-full h-full">
      {/* Flexbox Container */}
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-4 w-full text-black dark:text-white max-w-xs text-3xl">
        
          <ButtonThemeColor />
          <ButtonOperator
            numbers={numbers}
            operator={operator}
            setOperator={setOperator}
            setPrevOperator={setPrevOperator}
          >%</ButtonOperator>
          <ButtonOperator
            numbers={numbers}
            operator={operator}
            setOperator={setOperator}
            setPrevOperator={setPrevOperator}
          >÷</ButtonOperator>
          <ButtonOperator
            numbers={numbers}
            operator={operator}
            setOperator={setOperator}
            setPrevOperator={setPrevOperator}
          >×</ButtonOperator>

          <ButtonNumber
            numbers={numbers}
            setNumbers={setNumbers}
          >7</ButtonNumber>
          <ButtonNumber
            numbers={numbers}
            setNumbers={setNumbers}
          >8</ButtonNumber>
          <ButtonNumber
            numbers={numbers}
            setNumbers={setNumbers}
          >9</ButtonNumber>
          <ButtonOperator
            numbers={numbers}
            operator={operator}
            setOperator={setOperator}
            setPrevOperator={setPrevOperator}
          >-</ButtonOperator>

          <ButtonNumber
            numbers={numbers}
            setNumbers={setNumbers}
          >4</ButtonNumber>
          <ButtonNumber
            numbers={numbers}
            setNumbers={setNumbers}
          >5</ButtonNumber>
          <ButtonNumber
            numbers={numbers}
            setNumbers={setNumbers}
          >6</ButtonNumber>
          <ButtonOperator
            numbers={numbers}
            operator={operator}
            setOperator={setOperator}
            setPrevOperator={setPrevOperator}
          >+</ButtonOperator>

          <ButtonNumber
            numbers={numbers}
            setNumbers={setNumbers}
          >1</ButtonNumber>
          <ButtonNumber
            numbers={numbers}
            setNumbers={setNumbers}
          >2</ButtonNumber>
          <ButtonNumber
            numbers={numbers}
            setNumbers={setNumbers}
          >3</ButtonNumber>
          <ButtonEqual>=</ButtonEqual>

          <ButtonClear>AC</ButtonClear>
          <ButtonNumber
            numbers={numbers}
            setNumbers={setNumbers}
          >0</ButtonNumber>
          <ButtonNumber
            numbers={numbers}
            setNumbers={setNumbers}
          >,</ButtonNumber>
        </div>
      </div>
    </div>
  );
};

export default ButtonsList;
