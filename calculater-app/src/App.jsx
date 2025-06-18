import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ThemeProvider, { ThemeContext } from "./context/ThemeContext";
import Calculator from "./components/Calculator";

const AppContent = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={dark ? "app dark" : "app light"}>
      <h1>🧮 Calculator</h1>
      <button onClick={toggleTheme}>
        {dark ? "Switch to light" : "Switch to dark"}
      </button>
      <Calculator />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
