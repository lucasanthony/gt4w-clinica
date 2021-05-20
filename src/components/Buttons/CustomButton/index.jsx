import React from "react";
import "./styles.css";

export default function CustomButton(props) {
  return (
    <>
      <button className="custom_button" onClick={props.onClickAction} id={props.id}>
        {props.text}
      </button>
    </>
  );
}
