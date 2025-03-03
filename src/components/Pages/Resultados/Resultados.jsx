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
            <div key={index} >  
            <h2>Resultado{results.length - index}</h2>
            <div className="results-grid">
              <div className="result-card">
                  <div className="delete-button">
                    <button onClick={() => handleDeleteResult(index)}><img src={deleteIcon}/></button>
                  </div>
                <h2>Resumen de Datos</h2>
                <div className="result">
                  <div className="childre">
                    <p>Tipo de Salario</p>
                    <p>Salario</p>
                    <p>Otros Pagos Salariales</p>
                    <p>Otros Pagos No Salariales</p>
                    <p>Retención en la Fuente</p>
                    <p>Deducciones</p>
                    <p>Pensionado</p>
                    <p>Exonerado</p>
                  </div>
                  <div className="">
                  <Parrafos  results={result} content1="calculations" content2="tipoSalario"/>
                  <Parrafos  results={result} content1="calculations" content2="salario"/>
                  <Parrafos  results={result} content1="calculations" content2="otrosPagosSalariales"/>
                  <Parrafos  results={result} content1="calculations" content2="otrosPagosNoSalariales"/>
                  <Parrafos  results={result} content1="calculations" content2="retencionFuente"/>
                  <Parrafos  results={result} content1="calculations" content2="deducciones"/>
                  <Parrafos  results={result} content1="calculations" content2="pensionado"/>
                  <Parrafos  results={result} content1="calculations" content2="exonerado"/>
                  </div>
                </div>
                <div className="gomezV">
                    <img src={gomez} alt="icono" />
                </div>
              </div>

              <div className="result-card">
                <h2>Proyecciones</h2>
                <div className="title">
                  <h3>Empleador</h3>
                  <h3>Trabajador</h3>
                </div>
                <div className="result">
                  <div className="children">
                    <p>Provisiones</p>
                    <p>Aportes</p>
                    <p>Pago neto</p>
                    <p>Total a pagar</p>
                    <p>Costo total</p>

                  </div>
                  <div className="children2">
                    <Parrafos results={result}content1="proyecciones" content2="provisionesPrestacionesSociales" />
                    <Parrafos results={result}content1="proyecciones" content2="aportesEmpleador" />
                    <Parrafos results={result}content1="proyecciones" content2="pagoNeto" />
                    <Parrafos results={result}content1="proyecciones" content2="totalPagar" />
                    <Parrafos results={result}content1="proyecciones" content2="costoTotalEmpleador" />

                  </div>
                  <div className="children">
                    <p>Total Ingresos</p>
                    <p>Aportes</p>
                    <p>ReteFuente</p>
                    <p>Deducciones</p>
                    <p>Pago Neto</p>
                  </div>
                <div className="children2">
                    <Parrafos results={result}content1="calculations" content2="totalIngresos" />
                    <Parrafos results={result}content1="proyecciones" content2="aportesTrabajador" />
                    <Parrafos results={result} />
                    <Parrafos results={result}content1="proyecciones" content2="deducciones" />
                    <Parrafos results={result}content1="proyecciones" content2="pagoNetoTrabajador" />
                  </div>
                </div>
                <div className="gomezV">
                    <img src={gomez} alt="icono" />
                </div>

              </div>

              <div className="result-parafiscales">
              <h2>Seguridad Social y Parafiscales</h2>
              <div className="box-parafiscales">
                <div className="result-ibc">
                  <div className="content-ibc">
                    <Parrafos content="IBC ="results={result}content1="seguridadSocial"content2="ibc"/>
                  </div>
                  <div className="box-ibc">
                    <div className="item-ibc">
                      <p>Salario</p>
                      <span className="operator">+</span>
                      <p>Otros Pagos Salariales</p>
                      <span className="operator">+</span>
                      <p>Excedente</p>
                    </div>
                    <div className="resultados">
                      <Parrafos results={result}content1="calculations" content2="salario"/>
                      <span>+</span>
                      <Parrafos results={result} content1="calculations" content2="otrosPagosSalariales"/>
                      <span>+</span>
                      <Parrafos results={result} content1="calculations" content2="excedente" />
                    </div>
                  </div>
                </div>
              <div className="box-concepto">
                  <div className="title">
                    <h3>Concepto</h3>
                    <h3>Empleador</h3>
                    <h3>Trabajador</h3>
                  </div>
                  <div className="result">
                  <div className="">
                    <p>Salud</p>
                    <p>Pension</p>
                    <p>FSP</p>
                    <p>Riesgos</p>
                    <p>CCF</p>
                    <p>SENA</p>
                    <p>ICBF</p>
                    <p><b>Total</b></p>
                  </div>
                  <div>
                    <Parrafos  results={result} content1="seguridadSocial" content2="saludEmpleador"/>
                    <Parrafos  results={result} content1="seguridadSocial" content2="pensionEmpleador"/>
                    <Parrafos  results={result} content1="seguridadSocial" content2="FSP"/>
                    <Parrafos  results={result} content1="seguridadSocial" content2="riesgosLaborales"/>
                    <Parrafos  results={result} content1="seguridadSocial" content2="cajaCompensacion"/>
                    <Parrafos  results={result} content1="seguridadSocial" content2="sena"/>
                    <Parrafos  results={result} content1="seguridadSocial" content2="icbf"/>
                    <Parrafos  results={result} content1="seguridadSocial" content2="totalEmpleador"/>
                  </div>
                  <div>
                    <Parrafos  results={result} content1="seguridadSocial" content2="saludTrabajador"/>
                    <Parrafos  results={result} content1="seguridadSocial" content2="pensionTrabajador"/>
                    <Parrafos  results={result} />
                    <Parrafos  results={result} />
                    <Parrafos  results={result} />
                    <Parrafos  results={result} />
                    <Parrafos  results={result} />
                    <Parrafos  results={result} content1="seguridadSocial" content2="totalTrabajador"/>

                  </div>
                  </div>
                  <div className="gomezV">
                      <img src={gomez} alt="icono" />
                  </div>

                </div>
              </div>
              </div>

                <div className="result-card">
                  <h2>Prestaciones Sociales y Vacaciones</h2>
                  <div className="result">
                    <div className="children">
                      <p>Prima de Servicios:</p>
                      <p>Cesantías:</p>
                      <p>Intereses Cesantias:</p>
                      <p>Vacaciones:</p>
                    </div>
                    <div className="children2">
                      <Parrafos  results={result} content1="prestacionesSociales" content2="primaServicios"/>
                      <Parrafos  results={result} content1="prestacionesSociales" content2="cesantias"/>
                      <Parrafos  results={result} content1="prestacionesSociales" content2="interesesCesantias"/>
                      <Parrafos  results={result} content1="prestacionesSociales"content2="vacaciones"/>

                    </div>
                  </div>
                  <div className="gomezV">
                    <img src={gomez} alt="icono" />
                  </div>
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
