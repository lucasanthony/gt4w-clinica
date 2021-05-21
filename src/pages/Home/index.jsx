import React, { useEffect, useState } from "react";
import "./styles.css";

import axios from "axios";
import Api from "../../services/api";

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
  const [cpf, setCpf] = useState("");
  const [uf, setUf] = useState("");
  const [ufs, setUfs] = useState([]);
  const [role, setRole] = useState("");
  const [enfermeiros, setEnfermeiros] = useState([]);
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    if (role !== "ENFERMEIRO") {
      const fetchPacientes = async () => {
        const response = await Api.get("paciente/");
        setPacientes(response.data);
      };

      const fetchEnfermeiros = async () => {
        const response = await Api.get("usuario/");
        setEnfermeiros(response.data);
      };

      try {
        fetchPacientes();
        fetchEnfermeiros();
      } catch (error) {
        notify({ type: "error", message: "Tente novamente mais tarde!" });
      }
    }
  }, []);

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
    setRole(localStorage.getItem("role"));
  }, []);

  const salvarPaciente = async () => {
    try {
      const body = {
        nome: nome,
        data_nascimento: dataNascimento,
        peso: peso,
        altura: altura,
        uf: uf,
        cpf: "12345004444",
      };
      const response = await Api.post("paciente/", body);
      setPacientes([...pacientes, response.data]);
    } catch (error) {
      notify({ type: "error", message: "Tente novamente mais tarde!" });
    }
  };

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
  };

  const changeCpf = (ev) => {
    setCpf(ev.target.value);
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
              placeholder="CPF do paciente"
              id="cpf_input"
              type="password"
              onChangeAction={changeCpf}
              value={cpf}
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
                <option key={uf.id} value={uf.nome}>
                  {uf.nome}
                </option>
              ))}
            </select>
            <CustomButton
              text="Cadastrar"
              id="adicionar-paciente"
              onClickAction={salvarPaciente}
            />
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
                    altura={paciente.altura}
                    key={paciente.nome}
                    id={paciente.id}
                  />
                ))}
              </div>
              <div className="home_card_info">
                <h3 id="pacientes_h3">Enfermeiros</h3>
                {enfermeiros.map((enfermeiro) => (
                  <EnfermeiroCard
                    key={enfermeiro.nome}
                    nome={enfermeiro.nome}
                  />
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
