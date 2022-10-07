import React, { useRef, useEffect, useState } from "react";
import { search, input, inputError, button } from "./searchbar.module.css";
import { BiError } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function SearchBar({ onSearch, flag, setRequest }) {
  // states

  const [empty, setEmpty] = useState(false); //if true, the string is empty
  const [hideError, setHideError] = useState(true); //if true, the error css will not be shown

  //use effect
  useEffect(() => {
    //shows the correct placeholder
    if (!empty && !flag) {
      inputRef.current.placeholder = "Ciudad no encontrada...";
    } else if (empty) {
      inputRef.current.placeholder = "Favor de escribir una ciudad...";
    } else {
      inputRef.current.placeholder = "Ciudad...";
    }

    //this trigger the error action
    if (empty || !flag) {
      setHideError(false); // empty string or city not found
    } else {
      setHideError(true); // succesful request
    }
  }, [flag, empty]); // if empty or flag are changed, the component will re-render

  // ref
  let city = "";
  const inputRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    if (!(city.trim() === "")) {
      onSearch(city);
      setRequest(true);
      setEmpty(false);
    } else {
      setEmpty(true);
    }
    inputRef.current.value = "";
  };

  const handleChange = () => {
    city = inputRef.current.value;
  };

  const showIcon = (() => {
    if (!hideError) {
      return (
        <IconContext.Provider value={{ color: "crimson" }}>
          <BiError />
        </IconContext.Provider>
      );
    }
    return null;
  })();

  return (
    <form onSubmit={handleSubmit} className={search}>
      <div>
        {showIcon}
        <input
          autoFocus
          className={hideError ? input : inputError}
          onChange={handleChange}
          placeholder="Ciudad..."
          ref={inputRef}
        />
        <button className={button}>Agregar</button>
      </div>
    </form>
  );
}
