//* libraries
import { useState } from "react";
//* components
import { AddCategory, GifGrid } from "./components";

//------------------------------------------------------------------------------
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onNewCategory = (newCategory) => {
    // Check if the new category already exists with the same characters
    if (categories.includes(newCategory)) return;

    //* First way
    setCategories([...categories, newCategory]);
    //* Second way
    // setCategories((cat) => [...cat, newCategory]);
  };

  return (
    <>
      {/* Title */}
      <h1>GiftExpertApp</h1>

      {/* Input */}
      <AddCategory
        //* First way
        onNewCategory={onNewCategory}
        //* Second way
        // setCategories={setCategories}
      />

      {/* Gifts list */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
