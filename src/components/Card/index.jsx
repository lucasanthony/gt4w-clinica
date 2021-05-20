import React from "react";
import "./styles.css";

export default function Card(props) {
  return (
    <>
      <div className="card" onClick={props.link}>
        <div>
          <p>{props.nome}</p>
          <p>{props.data_nascimento}</p>
        </div>
        <div>
          <p>{props.peso}</p>
          <p>{props.uf}</p>
        </div>
      </div>
    </>
  );
}
