import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import AppContainer from "./containers/AppContainer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/conteudo" element={<AppContainer />} />{" "}
      </Routes>
    </div>
  );
};

export default App;
