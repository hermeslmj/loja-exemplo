const clientesService = require('../../services/clientes/service');
const logManager = require('../../services/logs/services');

const create = async (req, res) => {
    try {
        const newCliente = await clientesService.create(req.body);
        logManager.logger.info(`POST /cliente - ${JSON.stringify({ "sucesso": true, "mensagem": "Cliente cadastrado com sucesso", "dados": newCliente })}`);
        res.send({ "sucesso": true, "mensagem": "Cliente cadastrado com sucesso", "dados": newCliente });
    } catch (error) {
        logManager.logger.info(`POST /cliente - ${JSON.stringify(error)}`);
        res.status(500).send(error);
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedCliente = await clientesService.update(id, req.body);
        if (updatedCliente) {
            logManager.logger.info(`PUT /cliente - ${JSON.stringify({ "sucesso": true, "mensagem": "Cliente atualizado com sucesso", "dados": updatedCliente })}`);
            res.send({ "sucesso": true, "mensagem": "Cliente atualizado com sucesso", "dados": updatedCliente });
        }
        else {
            logManager.logger.error(`PUT /cliente - ${JSON.stringify({ "sucesso": false, "mensagem": `Cliente não encontrado com id ${id} para atualização.` })}`);
            res.status(404).send({ "sucesso": false, "mensagem": `Cliente não encontrado com id ${id} para atualização.` });
        }

    } catch (error) {
        logManager.logger.error(`PUT /cliente - ${JSON.stringify({ "sucesso": false, "mensagem": `Não foi possível atualizar o cliente ${id}, verifique os dados e tente novamente.` })}`);
        res.status(500).send({ "sucesso": false, "mensagem": `Não foi possível atualizar o cliente ${id}, verifique os dados e tente novamente.` });
    }
}

const getAll = async (req, res) => {
    try {
        const listaClientes = await clientesService.getAll();
        logManager.logger.info(`GET /cliente`);
        res.send(listaClientes);
    } catch (error) {
        logManager.logger.error(`GET /cliente - ${JSON.stringify(error)}`);
        res.status(500).send(error);
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const cliente = await clientesService.getById(id);
        if (cliente) {
            logManager.logger.info(`GET /cliente/${id} - ${JSON.stringify(cliente)}`);
            res.send(cliente);
        }
        else {
            logManager.logger.error(`GET /cliente/${id} - ${{ "sucesso": false, "mensagem": `Não foi possível localizar cliente com o ${id}` }}`);
            res.status(404).send({ "sucesso": false, "mensagem": `Não foi possível localizar cliente com o ${id}` });
        }

    } catch (error) {
        logManager.logger.error(`GET /cliente/${id} - ${error}`);
        res.status(500).send(error);
    }
}

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        const clienteApagado = await clientesService.deleteById(id);
        if(clienteApagado) {
            logManager.logger.info(`DELETE /cliente/${id} - ${JSON.stringify({ "sucesso": true, "mensagem": "Cliente apagado com sucesso" })}`);
            res.send({ "sucesso": true, "mensagem": "Cliente apagado com sucesso" });
        }
        else{ 
            logManager.logger.error(`DELETE /cliente/${id} - ${JSON.stringify({ "sucesso": false, "mensagem": `Não possível apagar o clienet id ${id}` })}`);
            res.status(404).send({ "sucesso": false, "mensagem": `Não possível apagar o clienet id ${id}` });
        }
        

    } catch (error) {
        logManager.logger.error(`DELETE /cliente/${id} - ${JSON.stringify({ "sucesso": false, "mensagem": `Não possível apagar o clienet id ${id}` })}`);
        res.status(500).send(error);
    }
}

module.exports = { create, getAll, getById, deleteById, update }