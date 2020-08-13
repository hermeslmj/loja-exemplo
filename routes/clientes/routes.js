const express = require('express');
const controller = require('../../controllers/clientes/controller');

const clientesRouter = express.Router();

/**
 * @typedef cliente
 * @property {string} Nome.required
 * @property {string} Telefone.required
 * @property {string} Email.required
 * @property {string} Senha.required
 * @property {string} Cep.required
 * @property {string} Rua.required
 * @property {string} Numero.required
 * @property {string} Complemento.required
 * @property {string} Cidade.required
 * @property {string} Estado.required
 */


/**
 * Função que retorna todos os clientes cadastrados na base de dados
 * @route GET /api/cliente
 * @group Clientes - Endpoints para manipulação de cliente
 * @returns {object} 200 - Um array de clientes
 * @returns {Error}  default - Unexpected error
 */

clientesRouter.get('/', controller.getAll);

/**
 * Retorna um cliente pesquisando pelo ID dele
 * @route GET /api/cliente/{id}
 * @group Clientes - Endpoints para manipulação de cliente
 * @param {string} id.path.required
 * @returns {object} 200 - Um registro de cliente
 * @returns {Error}  default - Unexpected error
 */
clientesRouter.get('/:id', controller.getById);



/**
 * Retorna um cliente pesquisando pelo ID dele
 * @route POST /api/cliente
 * @group Clientes - Endpoints para manipulação de cliente
 * @param {cliente.model} cliente.body.required
 * @returns {object} 200 - Um registro de cliente
 * @returns {Error}  default - Unexpected error
 * @produces application/json
 * @consumes application/json
 */

clientesRouter.post('/', controller.create);

/**
 * Retorna um cliente atualizado pelo ID dele
 * @route PUT /api/cliente/{id}
 * @group Clientes - Endpoints para manipulação de cliente
 * @param {string} id.path.required
 * @param {cliente.model} cliente.body.required
 * @returns {object} 200 - Um registro de cliente
 * @returns {Error}  default - Unexpected error
 * @produces application/json
 * @consumes application/json
 */

clientesRouter.put('/:id', controller.update);

/**
 * Retorna um cliente pesquisando pelo ID dele
 * @route DELETE /api/cliente/{id}
 * @group Clientes - Endpoints para manipulação de cliente
 * @param {string} id.path.required
 * @returns {object} 200 - Um registro de cliente
 * @returns {Error}  default - Unexpected error
 * @produces application/json
 * @consumes application/json
 */


clientesRouter.delete('/:id', controller.deleteById);

module.exports = clientesRouter;