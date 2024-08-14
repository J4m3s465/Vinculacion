import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const registrarEntrada = (entrada) => {
  return axios.post(`${API_URL}/entradas`, entrada);
};

export const registrarSalida = (salida) => {
  return axios.post(`${API_URL}/salidas`, salida);
};