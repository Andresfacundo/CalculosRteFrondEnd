import React from 'react'
import  formatCurrency  from '../../../utils/formatUtils';


const Parrafos = ({content,results,content1,content2}) => {
      const value = Array.isArray(results)
      ? results?.[results.length -1]?.[content1]?.[content2] || 0 
      : results?.[content1]?.[content2] || 0; 

  return (
    <p>{content}<span>{ formatCurrency(value)}</span></p>
     
  )
}

export default Parrafos;