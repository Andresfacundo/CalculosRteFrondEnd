import React, { useState } from "react";
import './components/SalaryCalculator.css'

const PayrollCalculator = () => {
  const [formData, setFormData] = useState({
    tipoSalario: "ordinario",
    salario: "",
    otrosPagosSalariales: "",
    otrosPagosNoSalariales: "",
    auxilioTransporte: "",
    auxilioAlimentacion: "",
    pensionado: "No",
  });

  const [results, setResults] = useState(null);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await fetch("http://localhost:3000/calcular", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          salario: parseFloat(formData.salario) || 0,
          otrosPagosSalariales: parseFloat(formData.otrosPagosSalariales) || 0,
          otrosPagosNoSalariales:
            parseFloat(formData.otrosPagosNoSalariales) || 0,
          auxilioTransporte: parseFloat(formData.auxilioTransporte) || 0,
          auxilioAlimentacion: parseFloat(formData.auxilioAlimentacion) || 0,
        }),
      });
      const data = await response.json();
      setResults(data);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
    
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <h1>Calculadora</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Tipo de salario</label>
              <select
                id="tipoSalario"
                name="tipoSalario"
                value={formData.tipoSalario}
                onChange={handleInputChange}
              >
                <option value="ordinario">Ordinario</option>
                <option value="integral">Integral</option>
                <option value="medio tiempo">Medio Tiempo</option>
              </select>
            </div>

            <div className="form-group">
              <label>Salario</label>
              <input
                id="salario"
                name="salario"
                value={formData.salario}
                onChange={handleInputChange}
                required
                placeholder="ingrese el salario base"
              />
            </div>
            <div className="form-group">
              <label>Otros Pagos Salariales</label>
              <input
                id="otrosPagosSalariales"
                name="otrosPagosSalariales"
                value={formData.otrosPagosSalariales}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>OtrosPagos No salariales</label>
              <input
                id="otrosPagosNoSalariales"
                name="otrosPagosNoSalariales"
                value={formData.otrosPagosNoSalariales}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Auxilio de transporte</label>
              <input
                id="auxilioTransporte"
                name="auxilioTransporte"
                value={formData.auxilioTransporte}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Auxilio de Alimentación</label>
              <input
                id="auxilioAlimentacion"
                name="auxilioAlimentacion"
                value={formData.auxilioAlimentacion}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Pensionado</label>
              <select
                id="pensionado"
                name="pensionado"
                value={formData.pensionado}
                onChange={handleInputChange}
              >
                <option value="No">No</option>
                <option value="Si">Sí</option>
              </select>
            </div>
          </div>

          <button type="submit">Calcular</button>
        </form>

        {results && (
          <div className="results-container">
            <div className="results-grid">
              <div className="result-card">
                <h3>Información Basica</h3>
                <p>
                  Remuneración Total:{" "}
                  {formatCurrency(results.totalRemuneracion)}
                </p>
                <p>IBC: {formatCurrency(results.ibc)}</p>
                <p>
                  40% de la Remuneración:{" "}
                  {formatCurrency(results.cuarentaPorciento)}
                </p>
                <p>Excedente: {formatCurrency(results.excedente)}</p>
              </div>

              <div className="result-card">
                <h3>Seguridad Social</h3>
                <div className="result-content">
                  <p>
                    Salud Trabajador:{" "}
                    {formatCurrency(results.seguridadSocial.saludTrabajador)}
                  </p>
                  <p>
                    Salud Empleador:{" "}
                    {formatCurrency(results.seguridadSocial.saludEmpleador)}
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
                <h3>Prestaciones Sociales</h3>
                <div className="result-content">
                  <p>
                    Prima de Servicios:{" "}
                    {formatCurrency(
                      results.prestacionesSociales.primaServicios
                    )}
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

              <div className="result-card">
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
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PayrollCalculator;
