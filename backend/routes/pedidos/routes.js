const express = require('express');

const pedidosRouter = express.Router();

pedidosRouter.get('/', async(req, res) => {
    res.send("router de pedidos funcionando");
});

module.exports = pedidosRouter;