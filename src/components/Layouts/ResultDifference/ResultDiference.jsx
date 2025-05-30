import React from 'react';
import Parrafos from '../../UI/Parrafos/Parrafos';
import formatCurrency from '../../../utils/formatUtils';
import './ResultDiference.css'


const ResultDiference = ({ selectedActual, selectProyections }) => {
  const calcularDiferencia = (content1, key) => {
    if (selectedActual && selectProyections) {
      const diferencia =
      (selectProyections?.[content1]?.[key] || 0)-
        (selectedActual?.[content1]?.[key] || 0) ;

      return diferencia >= 0
        ? `+ ${formatCurrency(diferencia)}`
        : `- ${formatCurrency(Math.abs(diferencia))}`;
    }
    return "+$0";
  };

  return (
    <div className=''>
      <h2>Empleador</h2>
      <div className='content-tittle'>
        <h3>Concepto</h3>
        <h3>Actual</h3>
        <h3>Proyectado</h3>
        <h3>Diferencia</h3>
      </div>
      <div className='content-difference'>
        <div className='concept'>
          <div className='result-concept'>
            <p>Provisiones</p>
            <Parrafos results={selectedActual} content1="proyecciones" content2="provisionesPrestacionesSociales" />
            <Parrafos results={selectProyections} content1="proyecciones" content2="provisionesPrestacionesSociales" />
            <Parrafos results={calcularDiferencia("proyecciones", "provisionesPrestacionesSociales")} />
          </div>
          <div className='result-concept'>
            <p>Aportes</p>
            <Parrafos results={selectedActual} content1="proyecciones" content2="aportesEmpleador" />
            <Parrafos results={selectProyections} content1="proyecciones" content2="aportesEmpleador" />
            <Parrafos results={calcularDiferencia("proyecciones", "aportesEmpleador")} />
          </div>
          <div className='result-concept'>
            <p>Pago Neto</p>
            <Parrafos results={selectedActual} content1="proyecciones" content2="pagoNetoTrabajador" />
            <Parrafos results={selectProyections} content1="proyecciones" content2="pagoNetoTrabajador" />
            <Parrafos results={calcularDiferencia("proyecciones", "pagoNetoTrabajador")} />
          </div>
          <div className='result-concept'>
            <p>Total a pagar</p>
            <Parrafos results={selectedActual} content1="proyecciones" content2="totalPagar" />
            <Parrafos results={selectProyections} content1="proyecciones" content2="totalPagar" />
            <Parrafos results={calcularDiferencia("proyecciones", "totalPagar")} />
          </div>
          <div className='result-concept'>
            <p>Costo total</p>
            <Parrafos results={selectedActual} content1="proyecciones" content2="costoTotalEmpleador" />
            <Parrafos results={selectProyections} content1="proyecciones" content2="costoTotalEmpleador" />
            <Parrafos results={calcularDiferencia("proyecciones", "costoTotalEmpleador")} />
          </div>
        </div>
      </div>
      <h2>Trabajador</h2>
      <div className='content-tittle'>
        <h3>Concepto</h3>
        <h3>Actual</h3>
        <h3>Proyectado</h3>
        <h3>Diferencia</h3>
      </div>
      <div className='content-difference'>
        <div className='concept'>
          <div className='result-concept'>
            <p>Ingresos</p>
            <Parrafos results={selectedActual} content1="calculations" content2="totalIngresos" />
            <Parrafos results={selectProyections} content1="calculations" content2="totalIngresos" />
            <Parrafos results={calcularDiferencia("calculations", "totalIngresos")} />
          </div>
          <div className='result-concept'>
            <p>Aportes</p>
            <Parrafos results={selectedActual} content1="proyecciones" content2="aportesTrabajador" />
            <Parrafos results={selectProyections} content1="proyecciones" content2="aportesTrabajador" />
            <Parrafos results={calcularDiferencia("proyecciones", "aportesTrabajador")} />
          </div>
          <div className='result-concept'>
            <p>ReteFuente</p>
            <Parrafos results={selectedActual} content1="calculations" content2="retencionFuente" />
            <Parrafos results={selectProyections} content1="calculations" content2="retencionFuente" />
            <Parrafos results={calcularDiferencia("calculations", "retencionFuente")} />
          </div>
          <div className='result-concept'>
            <p>Deducciones</p>
            <Parrafos results={selectedActual} content1="proyecciones" content2="deducciones" />
            <Parrafos results={selectProyections} content1="proyecciones" content2="deducciones" />
            <Parrafos results={calcularDiferencia("proyecciones", "deducciones")} />
          </div>
          <div className='result-concept'>
            <p>Pago neto</p>
            <Parrafos results={selectedActual} content1="proyecciones" content2="pagoNetoTrabajador" />
            <Parrafos results={selectProyections} content1="proyecciones" content2="pagoNetoTrabajador" />
            <Parrafos results={calcularDiferencia("proyecciones", "pagoNetoTrabajador")} />

          </div>
      
        </div>
      </div>

    </div>
  );
};

export default ResultDiference;