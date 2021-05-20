import React from 'react'
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
