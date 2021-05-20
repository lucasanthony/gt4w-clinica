import React from "react";
import "./styles.css";
import { FiTrash2 } from "react-icons/fi";
import Api from "../../services/api";

export default function EnfermeiroCard(props) {
  const deleteEnfermeiro = async () => {
    const confirm = window.confirm("Confirmar remoção do enfermeiro?");
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
    <div className="enfermeiro_card">
      <div className="texts_div">
        <span>{props.nome}</span>
      </div>

      <div className="icons_div">
        <div id="trash_icon" onClick={deleteEnfermeiro}>
          <FiTrash2 color="#f5f5f5" size="20" />
        </div>
      </div>
    </div>
  );
}
