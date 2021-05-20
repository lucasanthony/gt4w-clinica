import React from "react";
import "./styles.css";
import { FiTrash2 } from "react-icons/fi";

export default function Card(props) {
  const deletePaciente = async () => {
    const confirm = window.confirm("Confirmar remoção do paciente?");
    if (confirm) {
      //   try {
      //     await Api.delete(
      //       `/employee/${props.id}
      //       }`
      //     );
      //     props.deleteEmployee(props.id);
      //     props.changePopUpState();
      //   } catch (error) {
      //     console.log(error);
      //   }
    }
  };

  return (
    <>
      <div className="card" onClick={props.link}>
        <div id="infos_paciente">
          <p>
            <b>Nome:</b> {props.nome}
          </p>
          <p>
            <b>Nascimento:</b> {props.data_nascimento}
          </p>
          <p>
            <b>Peso:</b> {props.peso} kg
          </p>
          <p>
            <b>Estado:</b> {props.uf}
          </p>
        </div>
        <div className="icons_div">
          <div id="trash_icon" onClick={deletePaciente}>
            <FiTrash2 color="#f5f5f5" size="20" />
          </div>
        </div>
      </div>
    </>
  );
}
