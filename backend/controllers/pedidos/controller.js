const pedidosModel = require('../../models/pedido');
const pedidosService = require('../../services/pedidos/services');

const create = async (req, res) => {
    try {
        const newPedido = pedidosService.create(req.body);
        res.send({ "sucesso": true, "mensagem": "Pedido cadastrado com sucesso", "dados": newPedido });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedPedido = await pedidosService.update(id, req.body);
        if (updatedPedido) {
            res.send({ "sucesso": true, "mensagem": "Pedido atualizado com sucesso", "dados": updatedPedido });
        }
        else {
            res.status(404).send({ "sucesso": false, "mensagem": `Pedido não encontrado com id ${id} para atualização.` });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({ "sucesso": false, "mensagem": `Não foi possível atualizar o Pedido ${id}, verifique os dados e tente novamente.` });
    }
}

const getAll = async (req, res) => {
    try {
        const listaPedidos = await pedidosModel.find();
        res.send(listaPedidos);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const pedido = await pedidosService.getById(id);
        if (pedido) {
            res.send(pedido);
        }
        else {
            res.status(404).send({ "sucesso": false, "mensagem": `Não foi possível localizar Pedido com o ${id}` });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        const pedidoApagado = await pedidosService.deleteById(id);
        if(pedidoApagado) {
            res.send({ "sucesso": true, "mensagem": "Pedido apagado com sucesso" });
        }
        else {
            res.status(404).send({ "sucesso": false, "mensagem": `Não possível apagar o clienet id ${id}` });
        }
    } catch (error) {
        console.log({ "sucesso": false, "mensagem": `Não possível apagar o clienet id ${id}` });
        res.status(500).send(error);
    }
}

module.exports = { create, getAll, getById, deleteById, update }