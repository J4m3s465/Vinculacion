const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());  // Para parsear JSON en los cuerpos de las solicitudes

// Configuración de la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // Reemplaza con tu usuario de MySQL
  password: '', // Reemplaza con tu contraseña de MySQL
  database: 'sygumus_react'  // Reemplaza con el nombre de tu base de datos
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos');
});

//Endpoint para registrar una entrada
app.post('/entradas', (req, res) => {
  const { numFactura, fecha, codigo, producto, cantidad } = req.body;

  const entradaQuery = 'INSERT INTO ENTRADAS (NUM_FACTURA, FECHA, CODIGO, PRODUCTO, CANTIDAD) VALUES (?, ?, ?, ?, ?)';
  const updateInventarioQuery = 'UPDATE INVENTARIO SET ENTRADAS = ENTRADAS + ? WHERE CODIGO = ?';

  db.beginTransaction((err) => {
    if (err) throw err;

    db.query(entradaQuery, [numFactura, fecha, codigo, producto, cantidad], (err, results) => {
      if (err) {
        return db.rollback(() => {
          throw err;
        });
      }

      db.query(updateInventarioQuery, [cantidad, codigo], (err, results) => {
        if (err) {
          return db.rollback(() => {
            throw err;
          });
        }

        db.commit((err) => {
          if (err) {
            return db.rollback(() => {
              throw err;
            });
          }
          res.send('Entrada registrada y inventario actualizado');
        });
      });
    });
  });
});

// Endpoint para registrar una salida
app.post('/salidas', (req, res) => {
  const { numFactura, fecha, codigo, producto, cantidad } = req.body;

  const salidaQuery = 'INSERT INTO SALIDAS (NUM_FACTURA, FECHA, CODIGO, PRODUCTO, CANTIDAD) VALUES (?, ?, ?, ?, ?)';
  const updateInventarioQuery = 'UPDATE INVENTARIO SET SALIDAS = SALIDAS + ? WHERE CODIGO = ?';

  db.beginTransaction((err) => {
    if (err) throw err;

    db.query(salidaQuery, [numFactura, fecha, codigo, producto, cantidad], (err, results) => {
      if (err) {
        return db.rollback(() => {
          throw err;
        });
      }

      db.query(updateInventarioQuery, [cantidad, codigo], (err, results) => {
        if (err) {
          return db.rollback(() => {
            throw err;
          });
        }

        db.commit((err) => {
          if (err) {
            return db.rollback(() => {
              throw err;
            });
          }
          res.send('Salida registrada y inventario actualizado');
        });
      });
    });
  });
});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
