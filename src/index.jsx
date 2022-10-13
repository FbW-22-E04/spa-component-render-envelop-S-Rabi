import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const sender = {
  name: "Rabi Sanaye",
  streetAdd: "123 JG St.",
  country: "Dubai 22527, UAE",
};
const receiver = {
  name: "Rami Al Sadi",
  streetAdd: "124 Berlinerstr.",
  country: "22527 Frankfurt, Germany",
};

ReactDOM.render(
  <App senderInfo={sender} receiverInfo={receiver} />,
  document.getElementById("root")
);
