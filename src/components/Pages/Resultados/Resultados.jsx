import React, { useEffect, useState } from "react";
import Navbar from "../../UI/Navbar/Navbar";
import Parrafos from "../../UI/Parrafos/Parrafos";
import gomez from "../../../assets/Group 17.png";
import NotAvaible from "../../UI/NotAvaible/NotAvaible";
import deleteIcon from '../../../assets/delete.png'
import ok from'../../../assets/ok.png'


const Resultados = () => {
  const [results, setResults] = useState([]); //Estado que almacena los resultados
  const [showAlert,setShowAlert] = useState(false);

  useEffect(() => {
    const storedResults = localStorage.getItem("Resultados");
    if (storedResults) {
      setResults(JSON.parse(storedResults).reverse());
    }
  }, []);
  const handleDeleteResult = (index) => {
    const updatedResults = results.filter((_, i) => i !== index);
    setResults(updatedResults);
    localStorage.setItem("Resultados", JSON.stringify(updatedResults));
    
    setShowAlert(true);
    setTimeout(() => setShowAlert(false),4000);
  }
  return (
    <>
      {results.length > 0 ? (
        <div className="results-container">
          <div className="container-button">
            <Navbar />
          </div>
          {showAlert && (
            <div className='alert'>
             <img src={ok} alt="icono" /> ¡Borrado con Exito!
            </div>
          )}
          {results.map((result, index) => (
            <div className="results-grid">
              <div className="result-card">
                  <div className="delete-button">
                    <button onClick={() => handleDeleteResult(index)}><img src={deleteIcon}/></button>
                  </div>
                <h3>Resumen de Datos</h3>
                <div className="result-content">
                  <Parrafos content="Tipo de Salario" results={result} content1="calculations" content2="tipoSalario"/>
                  <Parrafos content="Salario" results={result} content1="calculations" content2="salario"/>
                  <Parrafos content="Otros Pagos Salariales" results={result} content1="calculations" content2="otrosPagosSalariales"/>
                  <Parrafos content="Otros Pagos No Salariales" results={result} content1="calculations" content2="otrosPagosNoSalariales"/>
                  <Parrafos content="Retención en la Fuente" results={result} content1="calculations" content2="retencionFuente"/>
                  <Parrafos content="Deducciones" results={result} content1="calculations" content2="deducciones"/>
                  <Parrafos content="Pensionado" results={result} content1="calculations" content2="pensionado"/>
                  <Parrafos content="Exonerado" results={result} content1="calculations" content2="exonerado"/>
                </div>
                <div className="gomezV">
                    <img src={gomez} alt="icono" />
                </div>

              </div>
              <div className="result-card">
                <h3>Seguridad Social y Parafiscales</h3>
                <div className="content-ibc">
                  <Parrafos content="IBC ="results={result}content1="seguridadSocial"content2="ibc"/>
                </div>
                <div className="result-ibc">
                  <Parrafos content="Salario" results={result}content1="calculations" content2="salario"/>
                  <Parrafos content="Otros Pagos Salariales" results={result}content1="calculations" content2="otrosPagosSalariales"/>
                  <Parrafos content="Excedente" results={result}content1="calculations" content2="excedente"/>
                </div>
              </div>
              <div className="result-card">
                <div className="title">
                  <h3>Concepto</h3>
                  <h3>Empleador</h3>
                  <h3>Trabajador</h3>
                </div>
                <div className="result">
                <div >
                  <p>Salud</p>
                  <p>Pension</p>
                  <p>FSP</p>
                  <p>Riesgos</p>
                  <p>CCF</p>
                  <p>SENA</p>
                  <p>ICBF</p>
                  <p><b>Total</b></p>
                </div>
                <div >
                  <Parrafos  results={result} content1="seguridadSocial" content2="saludEmpleador"/>
                  <Parrafos  results={result} content1="seguridadSocial" content2="pensionEmpleador"/>
                  <Parrafos  results={result} content1="seguridadSocial" content2="FSP"/>
                  <Parrafos  results={result} content1="seguridadSocial" content2="riesgosLaborales"/>
                  <Parrafos  results={result} content1="seguridadSocial" content2="cajaCompensacion"/>
                  <Parrafos  results={result} content1="seguridadSocial" content2="sena"/>
                  <Parrafos  results={result} content1="seguridadSocial" content2="icbf"/>
                  <Parrafos  results={result} />
                </div>
                <div >
                  <Parrafos  results={result} content1="seguridadSocial" content2="saludTrabajador"/>
                  <Parrafos  results={result} content1="seguridadSocial" content2="pensionEmpleador"/>
                  <Parrafos  results={result} />
                  <Parrafos  results={result} />
                  <Parrafos  results={result} />
                  <Parrafos  results={result} />
                  <Parrafos  results={result} />
                  <Parrafos  results={result} />

                </div>
                </div>
                <div className="gomezV">
                    <img src={gomez} alt="icono" />
                </div>

              </div>
              
                <div className="result-card">
                  <h3>Proyecciones </h3>
                  <div key={index} className="result-content">
                    <Parrafos content="Provisiones Prestaciones"results={result}content1="proyecciones"content2="provisionesPrestacionesSociales"/>
                    <Parrafos content="Aportes Empleador"results={result}content1="proyecciones"content2="aportesEmpleador"/>
                    <Parrafos content="Aportes Trabajador"results={result}content1="proyecciones"content2="aportesTrabajador"/>
                    <Parrafos content="Retención en la fuente:"results={result}content1="proyecciones"content2="retencionFuente"/>
                    <Parrafos content="Pago Neto Trabajador:"results={result}content1="proyecciones"content2="pagoNetoTrabajador"/>
                    <Parrafos content="Costo Total Empleador:"results={result}content1="proyecciones"content2="costoTotalEmpleador"/>
                    <Parrafos content="Total a Pagar:" results={result}content1="proyecciones"content2="totalPagar"/>
                    <Parrafos content="Deducciones:"results={result}content1="proyecciones"content2="deducciones"
                    />
                    <Parrafos content="Auxilio de Transporte:"results={result}content1="proyecciones"content2="auxilioTransporte"/>
                  </div>
                  <div className="gomezV">
                    <img src={gomez} alt="icono" />
                  </div>
                </div>
                <div className="result-card">
                  <h3>Prestaciones Sociales y Vacaciones</h3>
                  <div className="result-content">
                    <Parrafos content="Prima de Servicios:" results={result} content1="prestacionesSociales" content2="primaServicios"/>
                    <Parrafos content="Cesantías:" results={result} content1="prestacionesSociales" content2="cesantias"/>
                    <Parrafos content="Intereses Cesantias:" results={result} content1="prestacionesSociales" content2="interesesCesantias"/>
                    <Parrafos content="Vacaciones:" results={result} content1="prestacionesSociales"content2="vacaciones"/>
                  </div>
                  <div className="gomezV">
                    <img src={gomez} alt="icono" />
                  </div>
                </div>
             
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <NotAvaible />
        </div>
      )}
    </>
  );
};

export default Resultados;
