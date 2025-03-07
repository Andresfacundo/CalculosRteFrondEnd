import axios from "axios";

const API_URL = "https://calculosconrte.onrender.com/api/calcular";


export const calcularNomina = async (formData) => {
    try{
        const response = await axios.post(`${API_URL}/calcular`, formData);
        // console.log(response.data);
        return response.data
        
    }catch(error){
        console.error('Error al calcular la nomina:', error);
        throw error;
    }
}
