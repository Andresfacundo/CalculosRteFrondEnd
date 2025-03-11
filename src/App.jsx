import { Routes, Route } from "react-router-dom";
import React from "react";
import Formulario from "./components/Pages/Formulario/Formulario";
import Resultados from "./components/Pages/Resultados/Resultados";
import Logo from "./components/UI/Logo/Logo";
import Comparar from "./components/Pages/Comparar/Comparar";
import NotFound from "./components/UI/NotFound/NotFound";
import NotAvaible from "./components/UI/NotAvaible/NotAvaible";



const App = () => {
  return (
    <>
      <Logo />
      <Routes>
        <Route path="/" Component={Formulario} />
        <Route path="Resultados" Component={Resultados} />
        <Route path="Comparar" Component={Comparar}/>
        <Route path="*" Component={NotFound}/>
        <Route path="notAvaible" Component={NotAvaible}/>
      </Routes>
    </>
  );
};

export default App;

