import React from 'react';
import '../styles/login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="input-container">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-container">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="login-button">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
