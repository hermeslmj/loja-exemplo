const express = require('express');
const controller = require('../../controllers/produtos/controller');

const produtosRouter = express.Router();

produtosRouter.get('/', controller.getAll);
produtosRouter.get('/:id', controller.getById);
produtosRouter.post('/', controller.create);
produtosRouter.put('/:id', controller.update);
produtosRouter.delete('/:id', controller.deleteById);

module.exports = produtosRouter;