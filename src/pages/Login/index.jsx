import React, { useState, useEffect } from "react";
import "./styles.css";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/Buttons/CustomButton";
import Api from "../../services/api";
import notify from "../../services/toastify";

export default function Login(props) {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const changeNome = (ev) => {
    document.getElementById("nome_input").style.border = "none";
    setNome(ev.target.value);
  };

  const changeSenha = (ev) => {
    document.getElementById("senha_input").style.border = "none";
    setSenha(ev.target.value);
  };

  const handleLogin = async () => {
    let senha_input = document.getElementById("senha_input");
    let nome_input = document.getElementById("nome_input");

    if (!nome) nome_input.style.border = "solid 2px red";

    if (!senha) senha_input.style.border = "solid 2px red";
    else {
      try {
        const body = {
          nome: nome,
          senha: senha,
        };

        let response = await Api.post("/auth/", body);

        const token = response.data[0];
        localStorage.setItem("clinica_token", token);
        localStorage.setItem("role", response.data[1]);
        localStorage.setItem("isauth", true);

        goToHome();
      } catch (error) {
        if (error.message === "Request failed with status code 404") {
          nome_input.style.border = "solid 2px red";
          notify({"type": "error", "message": "Email não cadstrado!"});
        } else if (error.message === "Request failed with status code 401") {
          senha_input.style.border = "solid 2px red";
          notify({"type": "error", "message": "Senha incorreta!"});
        } else {
          console.error(error.message);
          notify({"type": "error", "message": "Tente novamente mais tarde!"});
        }
      }
    }
  };

  const goToHome = () => {
    window.location.href = "/home";
  };

  return (
    <div id="loginPage">
      <div id="login-div">
        <div className="logo"></div>
        <div className="title">Entre na sua conta</div>
        <div className="fields">
          <CustomInput
            id="nome_input"
            type="username"
            placeholder="Digite o seu nome"
            onChangeAction={changeNome}
            value={nome}
          />
          <CustomInput
            id="senha_input"
            type="password"
            placeholder="Digite a senha"
            onChangeAction={changeSenha}
            value={senha}
          />
          <div className="link">
          </div>
        </div>
        <CustomButton
          className="signin-button"
          onClickAction={handleLogin}
          text="Entrar"
          id="signin-button"
        />
        <div className="link">
        </div>
      </div>
    </div>
  );
}
