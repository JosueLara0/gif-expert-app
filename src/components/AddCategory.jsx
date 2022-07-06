//* libraries
import { useState } from "react";
import PropTypes from "prop-types";

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

    console.log(inputValueTrim);
    if (inputValueTrim.length <= 1) return;

    //* First way
    onNewCategory(inputValueTrim);
    //* Second way
    // setCategories((categories) => [inputValueTrim, ...categories]);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
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

//? Props validations
AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
