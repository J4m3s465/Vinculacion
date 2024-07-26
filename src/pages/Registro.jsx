import React, { useState } from 'react';
import '../styles/General.css';

const Registro = () => {
  const [form, setForm] = useState({
    id: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado', form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">ID:</label>
        <input 
          type="text" 
          id="id" 
          name="id" 
          value={form.id} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label htmlFor="username">Nombre de usuario:</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={form.username} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label htmlFor="email">Correo electrónico:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={form.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={form.password} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Registro;
