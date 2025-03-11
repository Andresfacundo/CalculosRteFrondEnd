import React from 'react';
import Parrafos from '../../UI/Parrafos/Parrafos';
import formatCurrency from '../../../utils/formatUtils';
import './ResultDiference.css'


const ResultDiference = ({ selectedActual, selectProyections }) => {
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

          <p>Provisiones</p>
          <p>Aportes</p>
          <p>Pago Neto</p>
          <p>Total a pagar</p>
          <p>Costo total</p>
        </div>
        <div className='content-actual'>
          <Parrafos results={selectedActual} content1="proyecciones" content2="provisionesPrestacionesSociales" />
          <Parrafos results={selectedActual} content1="proyecciones" content2="aportesEmpleador" />
          <Parrafos results={selectedActual} content1="proyecciones" content2="pagoNetoTrabajador" />
          <Parrafos results={selectedActual} content1="proyecciones" content2="totalPagar" />
          <Parrafos results={selectedActual} content1="proyecciones" content2="costoTotalEmpleador" />
        </div>
        <div className='content-proyectado'>
          <Parrafos results={selectProyections} content1="proyecciones" content2="provisionesPrestacionesSociales" />
          <Parrafos results={selectProyections} content1="proyecciones" content2="aportesEmpleador" />
          <Parrafos results={selectProyections} content1="proyecciones" content2="pagoNetoTrabajador" />
          <Parrafos results={selectProyections} content1="proyecciones" content2="totalPagar" />
          <Parrafos results={selectProyections} content1="proyecciones" content2="costoTotalEmpleador" />
        </div>
        <div className='diferencia'>
          <Parrafos results={calcularDiferencia("proyecciones", "provisionesPrestacionesSociales")} />
          <Parrafos results={calcularDiferencia("proyecciones", "aportesEmpleador")} />
          <Parrafos results={calcularDiferencia("proyecciones", "pagoNetoTrabajador")} />
          <Parrafos results={calcularDiferencia("proyecciones", "totalPagar")} />
          <Parrafos results={calcularDiferencia("proyecciones", "costoTotalEmpleador")} />
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
          <p>Ingresos</p>
          <p>Aportes</p>
          <p>ReteFuente</p>
          <p>Deducciones</p>
          <p>Pago neto</p>
        </div>
        <div className='content-actual'>
          <Parrafos results={selectedActual} content1="calculations" content2="totalIngresos" />
          <Parrafos results={selectedActual} content1="proyecciones" content2="aportesTrabajador" />
          <Parrafos results={selectedActual} content1="proyecciones" content2="reteFuente" />
          <Parrafos results={selectedActual} content1="proyecciones" content2="deducciones" />
          <Parrafos results={selectedActual} content1="proyecciones" content2="pagoNetoTrabajador" />
        </div>
        <div className='content-proyectado'>
          <Parrafos results={selectProyections} content1="calculations" content2="totalIngresos" />
          <Parrafos results={selectProyections} content1="proyecciones" content2="aportesTrabajador" />
          <Parrafos results={selectProyections} content1="proyecciones" content2="reteFuente" />
          <Parrafos results={selectProyections} content1="proyecciones" content2="deducciones" />
          <Parrafos results={selectProyections} content1="proyecciones" content2="pagoNetoTrabajador" />
        </div>
        <div className='diferencia'>
          <Parrafos results={calcularDiferencia("calculations", "totalIngresos")} />
          <Parrafos results={calcularDiferencia("proyecciones", "aportesTrabajador")} />
          <Parrafos results={calcularDiferencia("proyecciones", "reteFuente")} />
          <Parrafos results={calcularDiferencia("proyecciones", "deducciones")} />
          <Parrafos results={calcularDiferencia("proyecciones", "pagoNetoTrabajador")} />          
        </div>
      </div>
      
    </div>
  );
};

export default ResultDiference;