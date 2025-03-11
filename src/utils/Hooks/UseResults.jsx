import { useState, useEffect } from 'react';

const useResults = () => {
  const [results, setResults] = useState([]);
  const [selectedActual, setSelectedActual] = useState(null);
  const [selectProyections, setSelectProyecctions] = useState(null);

  useEffect(() => {
    const storedResults = localStorage.getItem("Resultados");
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    }
  }, []);

  const handleSelectChange = (event, type) => {
    const selectIndex = parseInt(event.target.value, 10);
    if (selectIndex >= 0) {
      const selectResult = results[selectIndex];
      if (type === "actual") {
        setSelectedActual(selectResult);
      } else {
        setSelectProyecctions(selectResult);
      }
    } else {
      if (type === "actual") setSelectedActual(null);
      if (type === "anterior") setSelectProyecctions(null);
    }
  };

  return {
    results,
    selectedActual,
    selectProyections,
    handleSelectChange,
  };
};

export default useResults;