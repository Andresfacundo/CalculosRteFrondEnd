import React from 'react'


const Parrafos = ({content,results,content1,content2}) => {
    const formatCurrency = (value) => {
        return new Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0,
        }).format(value);
      };

      const value = results?.[results.length -1]?.[content1]?.[content2]; 
  return (
    <p>{content}<span>{ formatCurrency(value)}</span></p>
     
  )
}

export default Parrafos