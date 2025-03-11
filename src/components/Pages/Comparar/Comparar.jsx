import React, { useState, useEffect } from "react";
import Navbar from "../../UI/Navbar/Navbar";
import "./Comparar.css";
import Parrafos from "../../UI/Parrafos/Parrafos";
import formatCurrency from "../../../utils/formatUtils";
import ComparativeGraph from "../../UI/ComparativeGrahp/ComparativeGrap";
import gomez from "../../../assets/Group 17.png";
import ResumenComparativo from "../../UI/Comparative/ResumenComparativo";
import ResultDiference from "../../Layouts/ResultDifference/ResultDiference";


const Comparar = () => {
  const [results, setResults] = useState([]); // Estado que almacena los resultados
  const [selectedActual, setSelectedActual] = useState(null);
  const [selectProyections, setSelectProyecctions] = useState(null);

  useEffect(() => {
    const storedResults = localStorage.getItem("Resultados");
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    }
  }, []);

  const handleSelectChange = (event, type) => {
    const selectIndex = parseInt(event.target.value, 10);
    if (selectIndex >= 0) {
      const selectResult = results[selectIndex];
      if (type === "actual") {
        setSelectedActual(selectResult);
      } else {
        setSelectProyecctions(selectResult);
      }
    } else {
      if (type === "actual") setSelectedActual(null);
      if (type === "anterior") setSelectProyecctions(null);
    }
  };

  // const calcularDiferencia = (content1, key) => {
  //   if (selectedActual && selectProyections) {
  //     const diferencia =
  //       (selectedActual?.[content1]?.[key] || 0) -
  //       (selectProyections?.[content1]?.[key] || 0);

  //     return diferencia >= 0
  //       ? `+ ${formatCurrency(diferencia)}`
  //       : `- ${formatCurrency(Math.abs(diferencia))}`;
  //   }
  //   return "+$0";
  // };

  const calcularVariacion = (content1, key) => {
    if (selectedActual && selectProyections) {
      const valorAnterior = selectProyections?.[content1]?.[key] || 0;
      const valorActual = selectedActual?.[content1]?.[key] || 0;
      // console.log(sele);


      if (valorAnterior === 0) return "+0%"; // Evitar NaN%

      const diferencia = (((valorActual - valorAnterior) / valorAnterior) * 100).toFixed(2);
      // const variacion = ((diferencia / valorAnterior) * 100).toFixed(2);

      return diferencia >= 0 ? `+${diferencia}%` : `${diferencia}%`;
    }
    return "+0%";
  };

  return (
    <div className="box-navbar">
      <h1>Comparación</h1>
      <div className="content-navbar">
        <Navbar />
      </div>
      <div className="content-card">
        <div className="content-compare">
          <div className="box-select-compare">
            <h3>Actual</h3>
            <select
              className="box-input"
              onChange={(e) => handleSelectChange(e, "actual")}
            >
              <option value="-1">--Seleccione--</option>
              {results.map((_, index) => (
                <option key={index} value={index}>
                  Resultado {index + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="box-select-compare">
            <h3>Proyectado</h3>
            <select
              className="box-input"
              onChange={(e) => handleSelectChange(e, "anterior")}
            >
              <option value="-1">--Seleccione--</option>
              {results.map((_, index) => (
                <option key={index} value={index}>
                  Resultado {index + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="result-proyecction">
            <ResultDiference selectedActual={selectedActual} selectProyections={selectProyections} />
            <div className="gomezV">
              <img src={gomez} alt="icono" />
            </div>
          </div>
        </div>
        <div className="content-graphic">
          <div className="">
            <ResumenComparativo selectedActual={selectedActual} selectProyections={selectProyections} />
          
          </div>
          <div className="gomezV">
              <img src={gomez} alt="icono" />
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Comparar;
