const clientesModel = require('../../models/cliente');

const create = async (dados) => {
    try {
        const newCliente = new clientesModel(dados);
        await newCliente.save();
        return newCliente;
    } catch (error) {
        throw error;
    }
}

const update = async (id, dados) => {
    try {
        const updatedCliente = await clientesModel.findByIdAndUpdate(id, dados, { new: true });
        if (updatedCliente) {
            return updatedCliente;
        }
        else {
            return null;
        }

    } catch (error) {
        throw error;
    }
}

const getAll = async () => {
    try {
        const listaClientes = await clientesModel.find();
        return listaClientes;
    } catch (error) {
        throw error;
    }
}

const getById = async (id) => {
    try {
        const cliente = await clientesModel.findById(id);
        if (cliente) {
            return cliente;
        }
        else {
            return null;
        }

    } catch (error) {
        throw error;
    }
}

const deleteById = async (id) => {
    try {
        const clienteApagado = await clientesModel.findByIdAndRemove(id);
        if(clienteApagado) {
            return true;
        }
        else{
            return null;
        }

    } catch (error) {
        console.log({ "sucesso": false, "mensagem": `Não possível apagar o clienet id ${id}` });
        res.status(500).send(error);
    }
}

module.exports = { create, update, getAll, getById, deleteById }