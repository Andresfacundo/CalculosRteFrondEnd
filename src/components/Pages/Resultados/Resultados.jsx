import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../UI/Navbar/Navbar";

const Resultados = () => {
  const [results, setResults] = useState(null); //Estado que almacena los resultados

  useEffect(() => {
    const storedResults = localStorage.getItem("Resultados");
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    }
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <>
      {results && (
        <div className="results-container">
          <div className="results-grid">
            <h1>Resultados</h1>
            <div className="result-card">
            <div className="container-button">
                <Navbar />
              </div>
              <h3>Proyecciones</h3>
              <div className="result-content">
                <p>
                  Provisiones Prestaciones:{" "}
                  {formatCurrency(
                    results.proyecciones.provisionesPrestacionesSociales
                  )}
                </p>
                <p>
                  Aportes Empleador:{" "}
                  {formatCurrency(results.proyecciones.aportesEmpleador)}
                </p>
                <p>
                  Aportes Trabajador:{" "}
                  {formatCurrency(results.proyecciones.aportesTrabajador)}
                </p>
                <p>
                  Retención en la Fuente:{" "}
                  {formatCurrency(results.proyecciones.retencionFuente)}
                </p>
                <p>
                  Pago Neto Trabajador:{" "}
                  {formatCurrency(results.proyecciones.pagoNetoTrabajador)}
                </p>
                <p>
                  Costo Total Empleador:{" "}
                  {formatCurrency(results.proyecciones.costoTotalEmpleador)}
                </p>
                <p>
                  Total a Pagar:{" "}
                  {formatCurrency(results.proyecciones.totalPagar)}
                </p>
                <p>
                  Deducciones:{" "}
                  {formatCurrency(results.proyecciones.deducciones)}
                </p>
                <p>
                  Auxilio De Transporte:{" "}
                  {formatCurrency(results.proyecciones.auxilioTransporte)}
                </p>
              </div>
            </div>
            <div className="result-card">
              <h3>Seguridad Social y Parafiscales</h3>
              <div className="result-content">
                <p>
                  Salud Trabajador:{" "}
                  {formatCurrency(results.seguridadSocial.saludTrabajador)}
                </p>
                <p>
                  Salud Empleador:{" "}
                  {formatCurrency(results.seguridadSocial.saludEmpleador)}
                </p>
                <p>IBC: {formatCurrency(results.seguridadSocial.ibc)}</p>
                <p>
                  Excedente: {formatCurrency(results.seguridadSocial.excedente)}
                </p>
                <p>
                  Pensión Trabajador:{" "}
                  {formatCurrency(results.seguridadSocial.pensionTrabajador)}
                </p>
                <p>
                  Pensión Empleador:{" "}
                  {formatCurrency(results.seguridadSocial.pensionEmpleador)}
                </p>
                <p>FSP: {formatCurrency(results.seguridadSocial.FSP)}</p>
                <p>
                  Riesgos Laborales:{" "}
                  {formatCurrency(results.seguridadSocial.riesgosLaborales)}
                </p>
                <p>SENA: {formatCurrency(results.seguridadSocial.sena)}</p>
                <p>ICBF: {formatCurrency(results.seguridadSocial.icbf)}</p>
                <p>
                  Caja Compensación:{" "}
                  {formatCurrency(results.seguridadSocial.cajaCompensacion)}
                </p>
              </div>
            </div>

            <div className="result-card">
              <h3>Prestaciones Sociales y Vacaciones</h3>
              <div className="result-content">
                <p>
                  Prima de Servicios:{" "}
                  {formatCurrency(results.prestacionesSociales.primaServicios)}
                </p>
                <p>
                  Cesantías:{" "}
                  {formatCurrency(results.prestacionesSociales.cesantias)}
                </p>
                <p>
                  Intereses Cesantías:{" "}
                  {formatCurrency(
                    results.prestacionesSociales.interesesCesantias
                  )}
                </p>
                <p>
                  Vacaciones:{" "}
                  {formatCurrency(results.prestacionesSociales.vacaciones)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Resultados;
