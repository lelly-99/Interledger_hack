import React from "react";
import axios from "axios";

function SendButton() {
  async function handleClick() {
    await axios.get("http://localhost:3000/user");
  }
  return (
    <div className="send-button">
      <button onClick={handleClick} class="pushable">
        <span class="front"> Withdraw</span>
      </button>
      <button onClick={handleClick} class="pushable-orange">
        <span class="front-orange">Transfer</span>
      </button>
    </div>
  );
}

export default SendButton;
