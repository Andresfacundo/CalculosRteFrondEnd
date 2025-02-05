import React from "react";
import { useState } from "react";
import gomez from "../../../assets/Group 17.png";
import "../../../components/SalaryCalculator.css";
import Calculadora from "../../../assets/calculator-line.png";
import { calcularNomina } from "../../../services/services.js";
import Navbar from "../../UI/Navbar/Navbar.jsx";
import ok from"../../../assets/ok.png"
const Formulario = () => {
  const [formData, setFormData] = useState({
    tipoSalario: "ordinario",
    salario: "",
    otrosPagosSalariales: "",
    otrosPagosNoSalariales: "",
    auxilioTransporte: "",
    auxilioAlimentacion: "",
    pensionado: "No",
  });
  const[showAlert, setShowAlert] = useState(false);

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
      const data = await calcularNomina({
        ...formData,
        salario: parseFloat(formData.salario) || 0,
        otrosPagosSalariales: parseFloat(formData.otrosPagosSalariales) || 0,
        otrosPagosNoSalariales:
          parseFloat(formData.otrosPagosNoSalariales) || 0,
        auxilioTransporte: parseFloat(formData.auxilioTransporte) || 0,
        deducciones: parseFloat(formData.deducciones) || 0,
        retencionFuente: parseFloat(formData.retencionFuente) || 0,
      });
      localStorage.setItem("Resultados", JSON.stringify(data));
      setShowAlert(true);
      setTimeout(() => setShowAlert(false),4000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="calculator-container">
      <h1>Calculadora Laboral</h1>
      {showAlert && (
        <div className='alert'>
          <img src={ok} alt="icono" /> ¡Cálculo de Nómina realizado con éxito!
        </div>
      )}
      <div className="calculator-card">
        <form onSubmit={handleSubmit}>
            <div className="container-button">
              <Navbar />
            </div>
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
                placeholder="$"
              />
            </div>
            <div className="form-group">
              <label>Otros Pagos Salariales</label>
              <input
                id="otrosPagosSalariales"
                name="otrosPagosSalariales"
                value={formData.otrosPagosSalariales}
                onChange={handleInputChange}
                placeholder="$"
              />
            </div>

            <div className="form-group">
              <label>OtrosPagos No salariales</label>
              <input
                id="otrosPagosNoSalariales"
                name="otrosPagosNoSalariales"
                value={formData.otrosPagosNoSalariales}
                onChange={handleInputChange}
                placeholder="$"
              />
            </div>
            <div className="form-group">
              <label>Retencion En La fuente</label>
              <input
                id="retencionFuente"
                name="retencionFuente"
                value={formData.retencionFuente}
                onChange={handleInputChange}
                placeholder="$"
              />
            </div>
            <div className="form-group">
              <label>Deducciones</label>
              <input
                id="deducciones"
                name="deducciones"
                value={formData.deducciones}
                onChange={handleInputChange}
                placeholder="$"
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
          <div className="nomina">
            <button type="submit">
              <img src={Calculadora} alt="icono" />
              Calcular Nómina
            </button>

              <img className='gomez' src={gomez} alt="icono" />

          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
