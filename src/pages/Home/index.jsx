import React, { useEffect, useState } from "react";
import "./styles.css";

import axios from "axios";

import Card from "../../components/Card";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/Buttons/CustomButton";
import EnfermeiroCard from "../../components/EnfermeiroCard";
import notify from "../../services/toastify";

export default function Home(props) {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [uf, setUf] = useState("");
  const [ufs, setUfs] = useState([]);
  const [role, setRole] = useState("");
  const [enfermeiros, setEnfermeiros] = useState([
    { nome: "Enfermeiro 1" },
    { nome: "Enfermeiro 2" },
    { nome: "Enfermeiro 3" },
    { nome: "Enfermeiro 4" },
    { nome: "Enfermeiro 5" },
    { nome: "Enfermeiro 6" },
    { nome: "Enfermeiro 7" },
  ]);
  const [pacientes, setPacientes] = useState([
    { nome: "Paciente 1", data_nascimento: "09/08/1997", peso: "88", uf: "PB" },
    { nome: "Paciente 2", data_nascimento: "24/08/1999", peso: "81", uf: "PB" },
    { nome: "Paciente 3", data_nascimento: "23/07/1999", peso: "70", uf: "RN" },
    { nome: "Paciente 4", data_nascimento: "24/10/1977", peso: "56", uf: "PB" },
    { nome: "Paciente 5", data_nascimento: "24/08/1999", peso: "66", uf: "PE" },
    { nome: "Paciente 6", data_nascimento: "21/05/1999", peso: "71", uf: "RN" },
    { nome: "Paciente 7", data_nascimento: "24/01/1994", peso: "88", uf: "PB" },
    {
      nome: "Paciente 8",
      data_nascimento: "10/08/1993",
      peso: "95",
      uf: "PE",
    },
    { nome: "Paciente 9", data_nascimento: "24/12/1992", peso: "90", uf: "PB" },
    {
      nome: "Paciente 10",
      data_nascimento: "11/08/1995",
      peso: "88",
      uf: "PB",
    },
  ]);

  useEffect(() => {
  })

  useEffect(() => {
    // requisição para busvcar estados
    const fetchUFs = async () => {
      const response = await axios.get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      );
      setUfs(response.data);
      setUf(response.data[0].nome);
    };
    try {
      fetchUFs();
    } catch (error) {
      notify({ type: "error", message: "Ocorreu um erro" });
    }
    setRole("MEDICO");
  }, []);

  const changeNome = (ev) => {
    document.getElementById("nome_input").style.border = "none";
    setNome(ev.target.value);
  };

  const changePeso = (ev) => {
    document.getElementById("peso_input").style.border = "none";
    setPeso(ev.target.value);
  };

  const changeAltura = (ev) => {
    document.getElementById("altura_input").style.border = "none";
    setAltura(ev.target.value);
  };

  const changedataNascimento = (ev) => {
    document.getElementById("data_nascimento_input").style.border = "none";
    setDataNascimento(ev.target.value);
  };

  const changeUf = (ev) => {
    setUf(ev.target.value);
  }

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
              placeholder="Altura do paciente"
              id="altura_input"
              type="name"
              onChangeAction={changeAltura}
              value={altura}
            />
            <CustomInput
              placeholder="Data de nascimento"
              id="data_nascimento_input"
              type="name"
              onChangeAction={changedataNascimento}
              value={dataNascimento}
            />
            <select name="ufs" id="ufs_select" onChange={changeUf}>
              {ufs.map((uf) => (
                <option key={uf.id} value={uf.nome}>{uf.nome}</option>
              ))}
            </select>
            <CustomButton text="Cadastrar" id="adicionar-paciente" />
          </div>

          {role === "MEDICO" ? (
            <>
              <div className="home_card_info">
                <h3 id="pacientes_h3">Pacientes</h3>
                {pacientes.map((paciente) => (
                  <Card
                    nome={paciente.nome}
                    data_nascimento={paciente.data_nascimento}
                    peso={paciente.peso}
                    uf={paciente.uf}
                    key={paciente.nome}
                  />
                ))}
              </div>
              <div className="home_card_info">
                <h3 id="pacientes_h3">Enfermeiros</h3>
                {enfermeiros.map((enfermeiro) => (
                  <EnfermeiroCard key={enfermeiro.nome} nome={enfermeiro.nome} />
                ))}
              </div>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
