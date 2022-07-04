//* libraries
import { useState } from "react";

//------------------------------------------------------------------------------
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  //* First way
  //   const onInputChange = (event) => setInputValue(event.target.value);
  //* Second way
  const onInputChange = ({ target }) => setInputValue(target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    const inputValueTrim = inputValue.trim();
    // If the length of the element is '<= 1' then is not added
    if (inputValueTrim.length <= 1) return;

    //* First way
    onNewCategory(inputValueTrim);
    //* Second way
    // setCategories((categories) => [inputValueTrim, ...categories]);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search GIFs"
        value={inputValue}
        //* Firs way
        //   onChange={(event) => onInputChange(event)}
        //* Second way
        onChange={onInputChange}
      />
    </form>
  );
};
