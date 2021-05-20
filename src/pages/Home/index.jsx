import React from "react";
import "./styles.css";
import { goTo } from "../../services/navigation";

import Card from "../../components/Card";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/Buttons/CustomButton";

export default function Home(props) {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [peso, setPeso] = useState("");
  const [uf, setUf] = useState("");

  const changeNome = (ev) => {
    document.getElementById("nome_input").style.border = "none";
    setNome(ev.target.value);
  };

  const changePeso = (ev) => {
    document.getElementById("peso_input").style.border = "none";
    setPeso(ev.target.value);
  };

  const changedataNascimento = (ev) => {
    document.getElementById("data_nascimento_input").style.border = "none";
    setDataNascimento(ev.target.value);
  };

  const changeUf = (ev) => {
    document.getElementById("uf_input").style.border = "none";
    setUf(ev.target.value);
  };

  return (
    <div id="home">
      <div id="content">
        <div className="home_data">
          <div className="home_card_info">
            <h3>Cadastrar paciente</h3>
            <CustomInput
              placeholder="Nome do paciente"
              id="nome_input"
              type="name"
              onChangeAction={changeNome}
              value={nome}
            />
            <CustomInput
              placeholder="Peso do paciente"
              id="peso_input"
              type="name"
              onChangeAction={changePeso}
              value={peso}
            />
            <CustomInput
              placeholder="Data de nascimento"
              id="data_nascimentoinput"
              type="name"
              onChangeAction={changedataNascimento}
              value={dataNascimento}
            />
            <CustomInput
              placeholder="Estado"
              id="uf_input"
              type="name"
              onChangeAction={changeUf}
              value={uf}
            />
            <CustomButton text="Cadastrar" id="adicionar-paciente" />
          </div>
          <div className="home_card_info">
            <Card
              nome="Paciente 1"
              data_nascimento="24/08/1999"
              peso="85"
              uf="PB"
            />
            <Card
              nome="Paciente 2"
              data_nascimento="24/08/1999"
              peso="88"
              uf="RN"
            />
            <Card
              nome="Paciente 3"
              data_nascimento="24/08/1999"
              peso="81"
              uf="PE"
            />
            <Card
              nome="Paciente 4"
              data_nascimento="24/08/1999"
              peso="82"
              uf="PE"
            />
            <Card
              nome="Paciente 5"
              data_nascimento="24/08/1999"
              peso="77"
              uf="PB"
            />
            <Card
              nome="Paciente 6"
              data_nascimento="24/08/1999"
              peso="66"
              uf="RN"
            />
            <Card
              nome="Paciente 7"
              data_nascimento="24/08/1999"
              peso="69"
              uf="PB"
            />
            <Card
              nome="Paciente 8"
              data_nascimento="24/08/1999"
              peso="50"
              uf="PB"
            />
            <Card
              nome="Paciente 9"
              data_nascimento="24/08/1999"
              peso="81"
              uf="PB"
            />
            <Card
              nome="Paciente 10"
              data_nascimento="24/08/1999"
              peso="81"
              uf="PB"
            />
            <Card
              nome="Paciente 11"
              data_nascimento="24/08/1999"
              peso="85"
              uf="PB"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
