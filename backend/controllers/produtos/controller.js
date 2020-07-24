const produtosModel = require('../../models/produto');

const create = async (req, res) => {
    try {
        const newProduto = new produtosModel(req.body);
        await newProduto.save();
        res.send({"sucesso": true, "mensagem": "Produto criado com sucesso", "dados": newProduto});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedProduct = await produtosModel.findByIdAndUpdate(id, req.body, {new: true})
        res.send({"sucesso": true, "mensagem": "Produto atualizado com sucesso", "dados": updatedProduct});
    } catch (error) {
        console.log(error);
        res.status(500).send({"sucesso": false, "mensagem": `Não foi possível atualizar o produto ${id}, verifique os dados e tente novamente.`});
    }
}

const getAll = async (req, res) => {
    try {
        const listaProdutos = await produtosModel.find();
        res.send(listaProdutos);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const produto = await produtosModel.findById(id);
        if(produto) {
            res.send(produto);
        }
        else {
            res.status(404).send({"sucesso":false, "mensagem":`Não foi possível localizar produto com o ${id}`});
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        await produtosModel.findByIdAndRemove(id);
        res.send({"sucesso":true, "mensagem":"Produto apagado com sucesso"});
        
    } catch (error) {
        console.log({"sucesso": false, "mensagem": `Não possível apagar o produto id ${id}`});
        res.status(500).send(error);
    }
}

module.exports = { create, getAll, getById, deleteById, update }