import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MessageProvider from "./context/MessageContext";
import MessageNew from "./components/MessageNew";

function App() {
  return (
    <MessageProvider>
      <h1>message</h1>
      <MessageNew />
    </MessageProvider>
  );
}

export default App;
