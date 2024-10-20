import React from "react";
import Item from "./Item";
import SendButton from "./SendButton";

function DashBoard() {
  return (
    <div className="dashboard">
      <Item />
      <SendButton />
    </div>
  );
}

export default DashBoard;
