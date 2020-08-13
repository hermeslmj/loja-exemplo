const pedidosService = require('../../services/pedidos/services');
const logManager = require('../../services/logs/services');

const create = async (req, res) => {
    try {
        const newPedido = pedidosService.create(req.body);
        logManager.logger.info(`POST /pedido - ${JSON.stringify({ "sucesso": true, "mensagem": "Pedido cadastrado com sucesso", "dados": newPedido })}`);
        res.send({ "sucesso": true, "mensagem": "Pedido cadastrado com sucesso", "dados": newPedido });
    } catch (error) {
        logManager.logger.error(`POST /pedido - ${error}`);
        res.status(500).send(error);
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedPedido = await pedidosService.update(id, req.body);
        if (updatedPedido) {
            logManager.logger.info(`PUT /pedido - ${JSON.stringify({ "sucesso": true, "mensagem": "Pedido atualizado com sucesso", "dados": updatedPedido })}`);
            res.send({ "sucesso": true, "mensagem": "Pedido atualizado com sucesso", "dados": updatedPedido });
        }
        else {
            logManager.logger.error(`PUT /pedido - ${JSON.stringify({ "sucesso": false, "mensagem": `Pedido não encontrado com id ${id} para atualização.` })}`);
            res.status(404).send({ "sucesso": false, "mensagem": `Pedido não encontrado com id ${id} para atualização.` });
        }

    } catch (error) {
        logManager.logger.error(`PUT /pedido - ${JSON.stringify({ "sucesso": false, "mensagem": `Não foi possível atualizar o Pedido ${id}, verifique os dados e tente novamente.` })}`);
        res.status(500).send({ "sucesso": false, "mensagem": `Não foi possível atualizar o Pedido ${id}, verifique os dados e tente novamente.` });
    }
}

const getAll = async (req, res) => {
    try {
        const listaPedidos = await pedidosService.getAll();
        logManager.logger.info(`GET /pedido`);
        res.send(listaPedidos);
    } catch (error) {
        logManager.logger.error(`GET /pedido - ${JSON.stringify(error)}`);
        res.status(500).send(error);
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const pedido = await pedidosService.getById(id);
        if (pedido) {
            logManager.logger.info(`GET /pedido/${id} - ${JSON.stringify(pedido)}`);
            res.send(pedido);
        }
        else {
            logManager.logger.error(`GET /pedido/${id} - ${JSON.stringify({ "sucesso": false, "mensagem": `Não foi possível localizar Pedido com o ${id}` })}`);
            res.status(404).send({ "sucesso": false, "mensagem": `Não foi possível localizar Pedido com o ${id}` });
        }

    } catch (error) {
        logManager.logger.error(`GET /pedido/${id} - ${JSON.stringify(error)}`);
        res.status(500).send(error);
    }
}

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        const pedidoApagado = await pedidosService.deleteById(id);
        if (pedidoApagado) {
            logManager.logger.error(`DELETE /pedido/${id} - ${JSON.stringify({ "sucesso": true, "mensagem": "Pedido apagado com sucesso" })}`);
            res.send({ "sucesso": true, "mensagem": "Pedido apagado com sucesso" });
        }
        else {
            logManager.logger.error(`DELETE /pedido/${id} - ${JSON.stringify({ "sucesso": false, "mensagem": `Não possível apagar o clienet id ${id}` })}`);
            res.status(404).send({ "sucesso": false, "mensagem": `Não possível apagar o pedido id ${id}` });
        }
    } catch (error) {
        logManager.logger.error(`DELETE /pedido/${id} - ${JSON.stringify(error)}`);
        res.status(500).send(error);
    }
}

module.exports = { create, getAll, getById, deleteById, update }