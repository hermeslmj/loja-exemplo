const express = require('express');
const controller = require('../../controllers/produtos/controller');

const produtosRouter = express.Router();

/**
 * @typedef produto
 * @property {string} Imagem.required
 * @property {number} Preco.required
 * @property {number} Estoque.required
 * @property {boolean} Habilitado.required
 * @property {string} Nome.required
 * @property {string} Descricao.required
 */

/**
 * Função que retorna todos os produtos cadastrados na base de dados
 * @route GET /api/produto
 * @group Produtos - Endpoints para manipulação de produto
 * @returns {object} 200 - Um array de produtos
 * @returns {Error}  default - Unexpected error
 */

produtosRouter.get('/', controller.getAll);

/**
 * Retorna um produto pesquisando pelo ID dele
 * @route GET /api/produto/{id}
 * @group Produtos - Endpoints para manipulação de produto
 * @param {string} id.path.required
 * @returns {object} 200 - Um registro de produto
 * @returns {Error}  default - Unexpected error
 */

produtosRouter.get('/:id', controller.getById);

/**
 * Retorna um produto pesquisando pelo ID dele
 * @route POST /api/produto
 * @group Produtos - Endpoints para manipulação de produto
 * @param {produto.model} produto.body.required
 * @returns {object} 200 - Um registro de produto
 * @returns {Error}  default - Unexpected error
 * @produces application/json
 * @consumes application/json
 */


produtosRouter.post('/', controller.create);

/**
 * Retorna um produto atualizado pelo ID dele
 * @route PUT /api/produto/{id}
 * @group Produtos - Endpoints para manipulação de produto
 * @param {string} id.path.required
 * @param {produto.model} produto.body.required
 * @returns {object} 200 - Um registro de produto
 * @returns {Error}  default - Unexpected error
 * @produces application/json
 * @consumes application/json
 */

produtosRouter.put('/:id', controller.update);

/**
 * Retorna um produto pesquisando pelo ID dele
 * @route DELETE /api/produto/{id}
 * @group Produtos - Endpoints para manipulação de produto
 * @param {string} id.path.required
 * @returns {object} 200 - Um registro de produto
 * @returns {Error}  default - Unexpected error
 * @produces application/json
 * @consumes application/json
 */


produtosRouter.delete('/:id', controller.deleteById);

module.exports = produtosRouter;