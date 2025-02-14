import React, { useState,useEffect } from "react";
import Navbar from "../../UI/Navbar/Navbar";
import "./Comparar.css";
import Parrafos from "../../UI/Parrafos/Parrafos";
import formatCurrency from "../../../utils/formatUtils";

const Comparar = () => {
    const [results, setResults] = useState([]); //Estado que almacena los resultados
    const [selectedActual, setSelectedActual] = useState(null);
    const [selectedAnterior, setSelectedAnterior] = useState(null);
  
    useEffect(() => {
      const storedResults = localStorage.getItem("Resultados");
      if (storedResults) {
        setResults(JSON.parse(storedResults));
      }
    }, []);

    const handleSelectChange = (event, type) => {
      const selectIndex = parseInt(event.target.value, 10);
      if(selectIndex >= 0){
        const selectResult = results[selectIndex];
        if(type === "actual"){
          setSelectedActual(selectResult);
        }else{
          setSelectedAnterior(selectResult);
        }
      }else{
        if(type === "actual") setSelectedActual(null);
        if(type === "anterior") setSelectedAnterior(null);
      }
      
    };

    const calcularDiferencia = (content1, key) => {
      if (selectedActual && selectedAnterior) {
        const diferencia = (selectedActual?.[content1]?.[key] || 0) - (selectedAnterior?.[content1]?.[key] || 0);
        
        return diferencia >= 0 
          ? `+ ${formatCurrency(diferencia)}` 
          : `- ${formatCurrency(Math.abs(diferencia))}`;
      }
      return "+$0";
    }


    const calcularVariacion = (content1, key) => {
      const valorAnterior = selectedAnterior?.[content1]?.[key] || 0;
      const diferencia = Number(calcularDiferencia(content1, key)); // Extraer solo números
      
      if (valorAnterior === 0) return "+0%"; // Evitar NaN%
    
      const variacion = ((Number(diferencia) / valorAnterior) * 100).toFixed(2);
      
      return variacion >= 0 ? `+${variacion}%` : `${variacion}%`;
    };

  return (
    <div className="box-navbar">
      <h1>Comparación</h1>
      <div className="content-navbar">
        <Navbar />
      </div>
      <div className="content-compare">
        <div className="box-select-compare">
          <h3>Calculo Actual</h3>
          {/* <label for="opciones"></label> */}
          <select className="box-input" onChange={(e) => handleSelectChange(e, "actual")}>
            <option value='-1'>--Seleccione--</option>
            {results.map((_, index) => (
              <option key={index} value={index}>Resultado {index +1}</option>
            ))};
          </select>
        </div>
        <div className="box-select-compare">
          <h3>Calculo Anterior</h3>
          {/* <label for="opciones"></label> */}
          <select className="box-input" onChange={(e) => handleSelectChange(e,"anterior")}>
            <option value='-1'>--Seleccione--</option>
            {results.map((_, index) => (
              <option key={index} value={index}>Resultado {index +1}</option>
            ))};
          </select>
        </div>
      </div>
      
      <div className="content-results">
        <div className="card-result">
          <h2>Costos Empleador</h2>
          <div className="result">
            <Parrafos content="Actual"results={selectedActual}content1="proyecciones" content2="costoTotalEmpleador"/>
            <Parrafos content="Anterior"results={selectedAnterior}content1="proyecciones" content2="costoTotalEmpleador"/>
            <p>Diferencia <span>{console.log(typeof(calcularDiferencia("proyecciones","costoTotalEmpleador")))}</span></p> 
            <p>Variación <span>{calcularVariacion("proyecciones", "costoTotalEmpleador")}</span></p>
          </div>
        </div>
        <div className="card-result">
          <h2>Salud Empleador</h2>
          <div className="result">
            <Parrafos content="Actual"results={selectedActual}content1="seguridadSocial" content2="saludEmpleador"/>
            <Parrafos content="Anterior"results={selectedAnterior}content1="seguridadSocial" content2="saludEmpleador"/>
            <p>Diferencia <span>{calcularDiferencia("seguridadSocial","saludEmpleador")}</span></p>
            <p>Variacion <span>{calcularVariacion("seguridadSocial","saludEmpleador")}</span></p>
          </div>
        </div>
        <div className="card-result">
          <h2>Pension Empleador</h2>
          <div className="result">
            <Parrafos content="Actual"results={selectedActual}content1="seguridadSocial" content2="pensionEmpleador"/>
            <Parrafos content="Anterior"results={selectedAnterior}content1="seguridadSocial" content2="pensionEmpleador"/>
            <p>Diferencia <span>{calcularDiferencia("seguridadSocial","pensionEmpleador")}</span></p>
            <p>Variación <span>{calcularVariacion("seguridadSocial","pensionEmpleador")}</span></p>
          </div>
        </div>
        <div className="card-result">
          <h2>Subsidio Transporte</h2>
          <div className="result">
            <Parrafos content="Actual"results={selectedActual}content1="proyecciones" content2="auxilioTransporte"/>
            <Parrafos content="Anterior"results={selectedAnterior}content1="proyecciones" content2="auxilioTransporte"/>
            <p>Diferencia <span>{calcularDiferencia("proyecciones","auxilioTransporte")}</span></p> 
            <p>Variación <span>{calcularVariacion("proyecciones","auxilioTransporte")}</span></p>
          </div>
        </div>
        <div className="card-result">
          <h2>Deducciones</h2>
          <div className="result">
            <Parrafos content="Anterior"results={selectedAnterior}content1="proyecciones" content2="deducciones"/>
            <Parrafos content="Actual"results={selectedActual}content1="proyecciones" content2="deducciones"/>
            <p>Diferencia <span>{calcularDiferencia("proyecciones","deducciones")}</span></p> 
            <p>Variación <span>{calcularVariacion("proyecciones","deducciones")}</span></p>
            <p></p>
          </div>
        </div>
    
      </div>
     
    </div>
  );
};

export default Comparar;
