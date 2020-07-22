const express = require('express');

const clientesRouter = express.Router();

clientesRouter.get('/', async(req, res) => {
    res.send("router de clientes funcionando");
});

module.exports = clientesRouter;