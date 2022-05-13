const express = require('express');
const app = express();
const port = 3000;

app.get('/status', (req, res) => res.send({status: "Estoy vivo XDXD!"}));

app.listen(port, () => console.log(`Ejemplo de applicación escuchando en el puerto ${port}!`));