const produtosModel = require('../../models/produto');

const create = async (dados) => {
    try {
        const newProduto = new produtosModel(dados);
        await newProduto.save();
        return newProduto;
    }
    catch (error) {
        throw error;
    }

}

const update = async (id, dados) => {
    try {
        const updatedProduto = await produtosModel.findByIdAndUpdate(id, dados, { new: true });
        return updatedProduto;
    }
    catch(error) {
        throw error;
    }
}

const getAll = async () => {
    try {
        const listaProdutos = await produtosModel.find();
        return listaProdutos;
    } catch (error) {
        throw error;
    }
}

const getById = async (id) => {
    try {
        const produto = await produtosModel.findById(id);
        if (produto) {
            return produto
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
        const produtoApagado = await produtosModel.findByIdAndRemove(id);
        if(produtoApagado){
            return true;
        }
        else 
        {
            return false;
        }


    } catch (error) {
        throw error;
    }
}

module.exports = { create, update, getAll, getById, deleteById }