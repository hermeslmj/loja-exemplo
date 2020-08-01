const clientesModel = require('../../models/cliente');
const clientesService = require('../../services/clientes/service');

const create = async (req, res) => {
    try {
        const newCliente = await clientesService.create(req.body);
        res.send({ "sucesso": true, "mensagem": "Cliente cadastrado com sucesso", "dados": newCliente });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedCliente = await clientesService.update(id, req.body);
        if (updatedCliente) {
            res.send({ "sucesso": true, "mensagem": "Cliente atualizado com sucesso", "dados": updatedCliente });
        }
        else {
            res.status(404).send({ "sucesso": false, "mensagem": `Cliente não encontrado com id ${id} para atualização.` });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({ "sucesso": false, "mensagem": `Não foi possível atualizar o cliente ${id}, verifique os dados e tente novamente.` });
    }
}

const getAll = async (req, res) => {
    try {
        const listaClientes = await clientesService.getAll();
        res.send(listaClientes);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const cliente = await clientesService.getById(id);
        if (cliente) {
            res.send(cliente);
        }
        else {
            res.status(404).send({ "sucesso": false, "mensagem": `Não foi possível localizar cliente com o ${id}` });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        const clienteApagado = await clientesService.deleteById(id);
        if(clienteApagado) {
            res.send({ "sucesso": true, "mensagem": "Cliente apagado com sucesso" });
        }
        else{ 
            res.status(404).send({ "sucesso": false, "mensagem": `Não possível apagar o clienet id ${id}` });
        }
        

    } catch (error) {
        console.log({ "sucesso": false, "mensagem": `Não possível apagar o clienet id ${id}` });
        res.status(500).send(error);
    }
}

module.exports = { create, getAll, getById, deleteById, update }