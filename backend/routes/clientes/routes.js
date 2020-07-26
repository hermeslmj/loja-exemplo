const express = require('express');
const controller = require('../../controllers/clientes/controller');

const clientesRouter = express.Router();

clientesRouter.get('/', controller.getAll);
clientesRouter.get('/:id', controller.getById);
clientesRouter.post('/', controller.create);
clientesRouter.put('/:id', controller.update);
clientesRouter.delete('/:id', controller.deleteById);

module.exports = clientesRouter;