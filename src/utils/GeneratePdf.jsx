import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const formatCurrency = (value) => {
  return value !== undefined ? `$ ${new Intl.NumberFormat("es-CO").format(value)}` : 'N/A';
};

const generatePDF = (selectedResult) => {
  if (!selectedResult) {
    alert("No se ha seleccionado un resultado para generar PDF");
    return;
  }

  const doc = new jsPDF('p', 'mm', 'a4');
  doc.setFont("helvetica", "bold");

  // **Título principal**
  doc.setFontSize(18);
  doc.text('Resumen de Resultados', 14, 22);

  // **Resumen de Datos**
  doc.setFontSize(14);
  doc.text('Resumen de Datos', 14, 35);

  const resumenDatosData = [
    ['Tipo de Salario', selectedResult.calculations?.tipoSalario || 'N/A'],
    ['Salario', formatCurrency(selectedResult.calculations?.salario)],
    ['Otros Pagos Salariales', formatCurrency(selectedResult.calculations?.otrosPagosSalariales)],
    ['Otros Pagos No Salariales', formatCurrency(selectedResult.calculations?.otrosPagosNoSalariales)],
    ['Retención en la Fuente', formatCurrency(selectedResult.calculations?.retencionFuente)],
    ['Deducciones', formatCurrency(selectedResult.calculations?.deducciones)],
    ['Pensionado', selectedResult.calculations?.pensionado || 'N/A'],
    ['Exonerado', selectedResult.calculations?.exonerado || 'N/A']
  ];

  autoTable(doc, {
    startY: 45,
    head: [['Concepto', 'Valor']],
    body: resumenDatosData,
    theme: 'grid'
  });

  // **Proyecciones**
  doc.text('Proyecciones', 14, doc.lastAutoTable.finalY + 15);

  const proyeccionesData = [
    ['Provisiones', formatCurrency(selectedResult.proyecciones?.provisionesPrestacionesSociales)],
    ['Aportes Empleador', formatCurrency(selectedResult.proyecciones?.aportesEmpleador)],
    ['Pago Neto Trabajador', formatCurrency(selectedResult.proyecciones?.pagoNetoTrabajador)],
    ['Total a Pagar', formatCurrency(selectedResult.proyecciones?.totalPagar)],
    ['Costo Total Empleador', formatCurrency(selectedResult.proyecciones?.costoTotalEmpleador)]
  ];

  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 15,
    head: [['Proyecciones', 'Valor']],
    body: proyeccionesData,
    theme: 'grid'
  });

  // **Seguridad Social y Parafiscales**
  doc.text('Seguridad Social y Parafiscales', 14, doc.lastAutoTable.finalY + 15);

  const seguridadSocialData = [
    ['Concepto', 'Empleador', 'Trabajador'],
    ['Salud', formatCurrency(selectedResult.seguridadSocial?.saludEmpleador), formatCurrency(selectedResult.seguridadSocial?.saludTrabajador)],
    ['Pensión', formatCurrency(selectedResult.seguridadSocial?.pensionEmpleador), formatCurrency(selectedResult.seguridadSocial?.pensionTrabajador)],
    ['FSP', formatCurrency(selectedResult.seguridadSocial?.FSP), '-'],
    ['Riesgos', formatCurrency(selectedResult.seguridadSocial?.riesgosLaborales), '-'],
    ['CCF', formatCurrency(selectedResult.seguridadSocial?.cajaCompensacion), '-'],
    ['SENA', formatCurrency(selectedResult.seguridadSocial?.sena), '-'],
    ['ICBF', formatCurrency(selectedResult.seguridadSocial?.icbf), '-'],
    ['Total', formatCurrency(selectedResult.seguridadSocial?.totalEmpleador), formatCurrency(selectedResult.seguridadSocial?.totalTrabajador)]
  ];

  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 15,
    head: null,
    body: seguridadSocialData,
    theme: 'grid'
  });

  // **Prestaciones Sociales y Vacaciones**
  doc.text('Prestaciones Sociales y Vacaciones', 14, doc.lastAutoTable.finalY + 15);

  const prestacionesSocialesData = [
    ['Prima de Servicios', formatCurrency(selectedResult.prestacionesSociales?.primaServicios)],
    ['Cesantías', formatCurrency(selectedResult.prestacionesSociales?.cesantias)],
    ['Intereses Cesantías', formatCurrency(selectedResult.prestacionesSociales?.interesesCesantias)],
    ['Vacaciones', formatCurrency(selectedResult.prestacionesSociales?.vacaciones)]
  ];

  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 15,
    head: [['Concepto', 'Valor']],
    body: prestacionesSocialesData,
    theme: 'grid'
  });

  // **Guardar PDF**
  doc.save('Resultado_Calculadora.pdf');
};

export default generatePDF;
