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


module.exports = { create, update }