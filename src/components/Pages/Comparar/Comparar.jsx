import React, { useState,useEffect } from "react";
import Navbar from "../../UI/Navbar/Navbar";
import "./Comparar.css";
import Parrafos from "../../UI/Parrafos/Parrafos";
// import formatCurrency from '../../UI/Parrafos/Parrafos'



const Comparar = () => {
    const [results, setResults] = useState(null); //Estado que almacena los resultados
    console.log(results);
    
  
    useEffect(() => {
      const storedResults = localStorage.getItem("Resultados");
      if (storedResults) {
        setResults(JSON.parse(storedResults));
      }
    }, []);
 
  return (
    <div className="box-navbar">
      <h1>Comparación</h1>
      <div className="content-navbar">
        <Navbar />
      </div>
      <div className="content-compare">
        <div className="box-select-compare">
          <h3>Calculo Actual</h3>
          <label for="opciones"></label>
          <select id="opciones">
            <option>--Seleccione--</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div className="box-select-compare">
          <h3>Calculo Anterior</h3>
          <label for="opciones"></label>
          <select id="opciones">
            <option>--Seleccione--</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
      </div>
      <div className="content-results">
        <div className="card-result">
          <h2>Costos Empleador</h2>
          <div className="result">
            <Parrafos content="Anterior"results={results}content1="proyecciones" content2="costoTotalEmpleador"/>
            <Parrafos content="Actual"results={results}content1="proyecciones" content2="costoTotalEmpleador"/>
            <p>Diferencia</p> 
          </div>
        </div>
      
      
      </div>
    </div>
  );
};

export default Comparar;
