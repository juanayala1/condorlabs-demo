const express = require('express');
const bodyParser = require('body-parser');
const connect = require("./0. config/connectionMongoDb");
const router = require('./1. network/routes');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.get('/status', (req, res) => res.send({status: "Estoy vivo XDXD1"}));

(async () => {
    await connect();
})()

app.listen(port, () => console.log(`Ejemplo de applicación escuchando en el puerto ${port}!`));

module.exports = app;