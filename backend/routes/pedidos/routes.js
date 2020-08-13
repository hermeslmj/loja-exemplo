const express = require('express');
const controller = require('../../controllers/pedidos/controller');

const PedidosRouter = express.Router();

/**
 * @typedef pedido
 * @property {number} ValorTotal.required
 * @property {number} ValorFrete.required
 * @property {string} Status.required
 * @property {itemPedido[]} Produtos.required
 */

 /**
 * @typedef itemPedido
 * @property {string} IdProduto.required
 * @property {string} Nome.required
 * @property {number} QtdComprada.required
 * @property {number} ValorUnitario.required
 * @property {number} ValorTotal.required
 */



/**
 * Função que retorna todos os pedidos cadastrados na base de dados
 * @route GET /api/pedido
 * @group Pedidos - Endpoints para manipulação de pedido
 * @returns {object} 200 - Um array de pedidos
 * @returns {Error}  default - Unexpected error
 */

PedidosRouter.get('/', controller.getAll);

/**
 * Retorna um pedido pesquisando pelo ID dele
 * @route GET /api/pedido/{id}
 * @group Pedidos - Endpoints para manipulação de pedido
 * @param {string} id.path.required
 * @returns {object} 200 - Um registro de pedido
 * @returns {Error}  default - Unexpected error
 */

PedidosRouter.get('/:id', controller.getById);

/**
 * Retorna um pedido pesquisando pelo ID dele
 * @route POST /api/pedido
 * @group Pedidos - Endpoints para manipulação de pedido
 * @param {pedido.model} pedido.body.required
 * @returns {object} 200 - Um registro de pedido
 * @returns {Error}  default - Unexpected error
 * @produces application/json
 * @consumes application/json
 */

PedidosRouter.post('/', controller.create);

/**
 * Retorna um pedido atualizado pelo ID dele
 * @route PUT /api/pedido/{id}
 * @group Pedidos - Endpoints para manipulação de pedido
 * @param {string} id.path.required
 * @param {pedido.model} pedido.body.required
 * @returns {object} 200 - Um registro de pedido
 * @returns {Error}  default - Unexpected error
 * @produces application/json
 * @consumes application/json
 */

PedidosRouter.put('/:id', controller.update);

/**
 * Retorna um pedido pesquisando pelo ID dele
 * @route DELETE /api/pedido/{id}
 * @group Pedidos - Endpoints para manipulação de pedido
 * @param {string} id.path.required
 * @returns {object} 200 - Um registro de pedido
 * @returns {Error}  default - Unexpected error
 * @produces application/json
 * @consumes application/json
 */


PedidosRouter.delete('/:id', controller.deleteById);

module.exports = PedidosRouter;