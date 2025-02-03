import React, { useEffect, useState } from "react";
import Navbar from "../../UI/Navbar/Navbar";
import Parrafos from "../../UI/Parrafos/Parrafos";
import gomez from '../../../assets/Group 17.png'

const Resultados = () => {
  const [results, setResults] = useState(null); //Estado que almacena los resultados

  useEffect(() => {
    const storedResults = localStorage.getItem("Resultados");
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    }
  }, []);
  return (
    <>
      {results && (
        <div className="results-container">
            <h1>Resultados</h1>
          <div className="results-grid">
            <div className="result-card">
            <div className="container-button">
                <Navbar />
              </div>
              <h3>Proyecciones</h3>
              <div className="result-content">
              <Parrafos content="Provisiones Prestaciones"results={results}content1="proyecciones" content2="provisionesPrestacionesSociales"/>
              <Parrafos content="Aportes Empleador"results={results}content1="proyecciones" content2="aportesEmpleador"/>
              <Parrafos content="Aportes Trabajador"results={results}content1="proyecciones" content2="aportesTrabajador"/>
              <Parrafos content="Retención en la fuente:"results={results}content1="proyecciones" content2="retencionFuente"/>
              <Parrafos content="Pago Neto Trabajador:"results={results}content1="proyecciones" content2="pagoNetoTrabajador"/>
              <Parrafos content="Costo Total Empleador:"results={results}content1="proyecciones" content2="costoTotalEmpleador"/>
              <Parrafos content="Total a Pagar:"results={results}content1="proyecciones" content2="totalPagar"/>
              <Parrafos content="Deducciones:"results={results}content1="proyecciones" content2="deducciones"/>
              <Parrafos content="Auxilio de Transporte:"results={results}content1="proyecciones" content2="auxilioTransporte"/>
              </div>
              <div className="gomezV">
              <img src={gomez} alt="icono" />

              </div>
            </div>
            <div className="result-card">
              <h3>Seguridad Social y Parafiscales</h3>
              <div className="result-content">
              <Parrafos content="Salud Trabajador:"results={results}content1="seguridadSocial" content2="saludTrabajador"/>
              <Parrafos content="Salud Empleador:"results={results}content1="seguridadSocial" content2="saludEmpleador"/>
              <Parrafos content="IBC:"results={results}content1="seguridadSocial" content2="ibc"/>
              <Parrafos content="Excedente:"results={results}content1="seguridadSocial" content2="excedente"/>
              <Parrafos content="Pension Trabajador:"results={results}content1="seguridadSocial" content2="pensionTrabajador"/>
              <Parrafos content="Pension Empleador:"results={results}content1="seguridadSocial" content2="pensionEmpleador"/>
              <Parrafos content="FSP:"results={results}content1="seguridadSocial" content2="FSP"/>
              <Parrafos content="Riesgos Laborales:"results={results}content1="seguridadSocial" content2="riesgosLaborales"/>
              <Parrafos content="SENA:"results={results}content1="seguridadSocial" content2="sena"/>
              <Parrafos content="ICBF:"results={results}content1="seguridadSocial" content2="icbf"/>
              <Parrafos content="Caja Compensación:"results={results}content1="seguridadSocial" content2="cajaCompensacion"/>
              </div>
              <div className="gomezV">

              <img src={gomez} alt="icono" />
              </div>
            </div>

            <div className="result-card">
              <h3>Prestaciones Sociales y Vacaciones</h3>
              <div className="result-content">
              <Parrafos content="Prima de Servicios:" results={results} content1="prestacionesSociales" content2="primaServicios"/>
              <Parrafos content="Cesantías:" results={results} content1="prestacionesSociales" content2="cesantias"/>
              <Parrafos content="Intereses Cesantias:" results={results} content1="prestacionesSociales" content2="interesesCesantias"/>
              <Parrafos content="Vacaciones:" results={results} content1="prestacionesSociales" content2="vacaciones"/>
              </div>
              <div className="gomezV">
              <img src={gomez} alt="icono" />
              </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Resultados;
