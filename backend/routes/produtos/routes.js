const express = require('express');

const produtosRouter = express.Router();

produtosRouter.get('/', async(req, res) => {
    res.send("router de produto funcionando");
});

module.exports = produtosRouter;