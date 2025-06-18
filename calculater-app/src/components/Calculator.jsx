import React, { useState } from "react";
import Button from "./Button";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") return setInput("");
    if (value === "DEL") return setInput(input.slice(0, -1));
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
      return;
    }
    setInput((prev) => prev + value);
  };

  const buttons = [
    "C",
    "DEL",
    "/",
    "*",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    ".",
  ];
  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {buttons.map((btn, i) => (
          <Button key={i} label={btn} onClick={() => handleClick(btn)} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
