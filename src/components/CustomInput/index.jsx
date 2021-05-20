import React from "react";
import "./styles.css";

export default function CustomInput(props) {
  return (
      <div className="custom_input_div" id={props.id} style={props.myMargin}>
        <input
          type={props.type}
          className="custom_input"
          placeholder={props.placeholder}
          onChange={props.onChangeAction}
          value={props.value}
        />
      </div>
  );
}
