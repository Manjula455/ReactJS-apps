import React, { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

function MessageNew() {
  const { message, setMessage } = useContext(MessageContext);
  return (
    <>
      <h1>My message:{message}</h1>
      <button onClick={() => setMessage("new message")}>send</button>
    </>
  );
}

export default MessageNew;
