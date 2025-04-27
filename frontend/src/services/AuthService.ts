import axios from 'axios';

const API_URL = 'http://localhost:9000/api/auth'; // Ajusta el puerto si es necesario

export const registerUser = async (userData: any) => {
  try {
    const payload = {
      documentType: userData.documentType,
      documentNumber: userData.documentNumber,
      fullName: userData.fullName,
      birthDate: userData.birthDate,
      email: userData.email.toLowerCase().trim(),
      phone: userData.phone.trim(),
      password: userData.password
    };

    console.log("Enviando payload:", payload);

    const response = await axios.post(`${API_URL}/signup`, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      validateStatus: (status) => status < 500 // Para capturar errores 400
    });

    console.log("Respuesta del servidor:", response);

    if (response.status >= 400) {
      let errorMessage = 'Error en el registro';
      
      // Manejo mejorado de la respuesta de error
      if (response.data) {
        if (typeof response.data === 'string') {
          errorMessage = response.data;
        } else if (response.data.message) {
          errorMessage = response.data.message;
        } else if (Array.isArray(response.data)) {
          errorMessage = response.data.join(', ');
        }
      }
      
      throw new Error(errorMessage);
    }

    return response.data;
  } catch (error: any) {
    console.error("Error detallado:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    
    throw new Error(error.response?.data?.message || 
                  error.response?.data ||
                  error.message || 
                  'Error en el registro');
  }
};

export const verifyEmail = async (email: string, code: string) => {
  try {
    const response = await axios.post(`${API_URL}/verify-email`, null, {
      params: { email, code }
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Error en la verificación');
    } else {
      throw new Error('Error de conexión con el servidor');
    }
  }
};