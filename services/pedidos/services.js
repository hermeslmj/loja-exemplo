const pedidosModel = require('../../models/pedido');

const create = async (dados) => {
    try {
        const newPedido = new pedidosModel(dados);
        await newPedido.save();
        return newPedido;
    } catch (error) {
        throw error;
    }
}

const update = async (id, dados) => {
    try {
        const updatedPedido = await pedidosModel.findByIdAndUpdate(id, dados, { new: true });
        if (updatedPedido) {
            return updatedPedido;
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
        const listaPedidos = await pedidosModel.find();
        return listaPedidos;
    } catch (error) {
        throw error;
    }
}

const getById = async (id) => {
    try {
        const pedido = await pedidosModel.findById(id);
        if (pedido) {
            return pedido
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
        const pedidoApagado = await pedidosModel.findByIdAndRemove(id);
        if(pedidoApagado) {
            return true;
        }
        else{
            return false;
        }

    } catch (error) {
        throw error;
    }
}

module.exports = { create, update, getAll, getById, deleteById }