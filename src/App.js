import React from "react";
import "./component/style.css";
export default function App(props) {
  return (
    <div className="container">
      <div className="sender">
        <h5> {props.senderInfo.name} </h5>
        <p> {props.senderInfo.streetAdd}</p>
        <p> {props.senderInfo.country} </p>
      </div>
      <div className="stamp">
        <p>stamp</p>
      </div>
      <div className="receiver">
        <h5> {props.receiverInfo.name} </h5>
        <p> {props.receiverInfo.streetAdd}</p>
        <p> {props.receiverInfo.country} </p>
      </div>
    </div>
  );
}
