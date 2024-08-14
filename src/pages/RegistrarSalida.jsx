import React, { useState } from 'react';
import { registrarSalida } from '../server/Api';

const RegistrarSalida = () => {
  const [numFactura, setNumFactura] = useState('');
  const [fecha, setFecha] = useState('');
  const [codigo, setCodigo] = useState('');
  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registrarSalida({ numFactura, fecha, codigo, producto, cantidad });
      alert('Salida registrada correctamente');
    } catch (error) {
      console.error(error);
      alert('Error al registrar la salida');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={numFactura} onChange={(e) => setNumFactura(e.target.value)} placeholder="Número de Factura" required />
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} placeholder="Fecha" required />
      <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} placeholder="Código" required />
      <input type="text" value={producto} onChange={(e) => setProducto(e.target.value)} placeholder="Producto" required />
      <input type="number" value={cantidad} onChange={(e) => setCantidad(e.target.value)} placeholder="Cantidad" required />
      <button type="submit">Registrar Salida</button>
    </form>
  );
};

export default RegistrarSalida;