import React, { useState, useEffect } from "react";
import "./styles.css";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/Buttons/CustomButton";
import Api from "../../services/api";
import notify from "../../services/toastify";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const newEmail = props.location?.state?.email;
    if (newEmail) {
      setEmail(newEmail);
    }
  }, []);

  const changeEmail = (ev) => {
    document.getElementById("username_input").style.border = "none";
    setEmail(ev.target.value);
  };

  const changePassword = (ev) => {
    document.getElementById("password_input").style.border = "none";
    setPassword(ev.target.value);
  };

  const handleLogin = async () => {
    let password_input = document.getElementById("password_input");
    let username_input = document.getElementById("username_input");

    if (!email) username_input.style.border = "solid 2px red";

    if (!password) password_input.style.border = "solid 2px red";
    else {
      try {
        const body = {
          email: email,
          password: password,
        };

        // let response = await Api.post("/adm/signIn", body);

        // const token = response.data.token;
        // localStorage.setItem("auth_token", response.data.token);
        localStorage.setItem("isAuthenticated", true);

        goToHome();
      } catch (error) {
        if (error.message === "Request failed with status code 404") {
          username_input.style.border = "solid 2px red";
          notify({"type": "error", "message": "Email não cadstrado!"});
        } else if (error.message === "Request failed with status code 401") {
          password_input.style.border = "solid 2px red";
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
            id="username_input"
            type="username"
            placeholder="Digite o email"
            onChangeAction={changeEmail}
            value={email}
          />
          <CustomInput
            id="password_input"
            type="password"
            placeholder="Digite a senha"
            onChangeAction={changePassword}
            value={password}
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
