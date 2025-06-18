import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Button({ label, onClick }) {
  const { dark } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={onClick} className={dark ? "dark-btn" : "light-btn"}>
        {label}
      </button>
    </div>
  );
}

export default Button;
