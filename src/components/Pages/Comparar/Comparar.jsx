import React, { useState, useEffect } from "react";
import Navbar from "../../UI/Navbar/Navbar";
import "./Comparar.css";
import Parrafos from "../../UI/Parrafos/Parrafos";
import formatCurrency from "../../../utils/formatUtils";
import ComparativeGraph from "../../UI/ComparativeGrahp/ComparativeGrap";
import gomez from "../../../assets/Group 17.png";


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

  const calcularDiferencia = (content1, key) => {
    if (selectedActual && selectProyections) {
      const diferencia =
        (selectedActual?.[content1]?.[key] || 0) -
        (selectProyections?.[content1]?.[key] || 0);

      return diferencia >= 0
        ? `+ ${formatCurrency(diferencia)}`
        : `- ${formatCurrency(Math.abs(diferencia))}`;
    }
    return "+$0";
  };

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
              <h2>Proyecciones</h2>
              <div className="content-proyecctions">
                <div className="title">
                  <h3>Empleador</h3>
                  <h3>Trabajador</h3>
                </div>
                <div className="result">
                  <div className="employer-proyecctions">
                    <div className="box-employer">
                      <p>Provisiones</p>
                      <Parrafos results={results} content1="proyecciones" content2="provisionesPrestacionesSociales" />
                    </div>
                    <div className="box-employer">
                      <p>Aportes</p>
                      <Parrafos results={results} content1="proyecciones" content2="aportesEmpleador" />
                    </div>
                    <div className="box-employer">
                      <p>Pago neto</p>
                      <Parrafos results={results} content1="proyecciones" content2="pagoNetoTrabajador" />
                    </div>
                    <div className="box-employer">
                      <p>Total a pagar</p>
                      <Parrafos results={results} content1="proyecciones" content2="totalPagar" />
                    </div>
                    <div className="box-employer">
                      <p>Costo total</p>
                      <Parrafos results={results} content1="proyecciones" content2="costoTotalEmpleador" />
                    </div>
                  </div>
                  <div className="title2">
                    <h3>Trabajador</h3>
                  </div>
                  <div className="employee-proyecctions">
                    <div className="box-employee">
                      <p>Total Ingresos</p>
                      <Parrafos results={results} content1="calculations" content2="totalIngresos" />
                    </div>
                    <div className="box-employee">
                      <p>Aportes</p>
                      <Parrafos results={results} content1="proyecciones" content2="aportesTrabajador" />
                    </div>
                    <div className="box-employee">
                      <p>ReteFuente</p>
                      <Parrafos results={results} />
                    </div>
                    <div className="box-employee">
                      <p>Deducciones</p>
                      <Parrafos results={results} content1="proyecciones" content2="deducciones" />
                    </div>
                    <div className="box-employee">
                      <p>Pago Neto</p>
                      <Parrafos results={results} content1="proyecciones" content2="pagoNetoTrabajador" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="gomezV">
                <img src={gomez} alt="icono" />
              </div>
            </div>
        </div>

        <div className="content-graphic">
          <h2>Resumen Comparativo</h2>
          <div className="box-diferent">
            <div className="card-graphic">
              <h3>Costo Total Empleador</h3>
              <Parrafos results={selectedActual} content1="proyecciones" content2="costoTotalEmpleador" />
              <p>{calcularVariacion("proyecciones", "costoTotalEmpleador")}</p>
            </div>
            <div className="card-graphic2">
              <h3>Pago Neto Trabajador</h3>
              <Parrafos results={selectProyections} content1="proyecciones" content2="pagoNetoTrabajador" />
              <p>{calcularVariacion("proyecciones", "pagoNetoTrabajador")}</p>
            </div>
          </div>
          <div className="">
            <ComparativeGraph selectedActual={selectedActual} selectProyections={selectProyections} />
          </div>

            {/* <div className="gomezV">
              <img src={gomez} alt="icono" />
            </div> */}

        </div>

      </div>
    </div>
  );
};

export default Comparar;
