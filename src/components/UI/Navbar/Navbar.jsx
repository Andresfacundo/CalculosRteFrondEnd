import React from "react";
import Boton from "../Boton/Boton.jsx";
import Calculadora from "../../../assets/calculator-line.png";
import Comparar from "../../../assets/arrow-left-right-line.png";
import Resultado from "../../../assets/Chart Vertical.png";

const Navbar = () => {
  return (
    <>
      <Boton
        route="/"
        styleB="boxButton"
        className="boton"
        img={Calculadora}
        content="Formulario"
      />
      <Boton
        styleB="boxButton"
        className="boton"
        img={Resultado}
        content="Resultados"
        route="/Resultados"
      />
      <Boton
        route="/Comparar"
        styleB="boxButton"
        className="boton"
        img={Comparar}
        content="Comparar"
      />
    </>
  );
};

export default Navbar;
