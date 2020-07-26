const express = require('express');
const controller = require('../../controllers/pedidos/controller');

const PedidosRouter = express.Router();

PedidosRouter.get('/', controller.getAll);
PedidosRouter.get('/:id', controller.getById);
PedidosRouter.post('/', controller.create);
PedidosRouter.put('/:id', controller.update);
PedidosRouter.delete('/:id', controller.deleteById);

module.exports = PedidosRouter;