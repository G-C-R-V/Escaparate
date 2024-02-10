// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Gc4420g2132.',
    database: 'consultas' // Nombre de tu base de datos
});

db.connect();

app.post('/guardar', (req, res) => {
    const { fname, fmail, ftel, fingr, fsali, fcons } = req.body;
    const sql = `INSERT INTO reserva (fname, fmail, ftel, fingr, fsali, fcons) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(sql, [fname, fmail, ftel, fingr, fsali, fcons], (err, result) => {
        if (err) throw err;
        console.log('Datos insertados correctamente');
        res.send('Datos insertados correctamente');
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
