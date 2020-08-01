const produtosModel = require('../../models/produto');
const produtosService = require('../../services/produtos/services');
const services = require('../../services/produtos/services');

const create = async (req, res) => {
    try {
        const newProduto = await produtosService.create(req.body);
        if (newProduto) {
            res.send({ "sucesso": true, "mensagem": "Produto criado com sucesso", "dados": newProduto });
        }
        else {
            res.status(500).send({ "sucesso": false, "mensagem": "Não foi possível criar o produto", "dados": newProduto });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({ "sucesso": false, "mensagem": "Não foi possível criar o produto", "dados": error });
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedProduct = await produtosService.update(id, req.body);
        if (updatedProduct) {
            res.send({ "sucesso": true, "mensagem": "Produto atualizado com sucesso", "dados": updatedProduct });
        }
        else {
            res.status(404).send({ "sucesso": false, "mensagem": `Não foi possível atualizar o produto ${id}`, "dados": updatedProduct });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({ "sucesso": false, "mensagem": `Não foi possível atualizar o produto ${id}, verifique os dados e tente novamente.` });
    }
}

const getAll = async (req, res) => {
    try {
        const listaProdutos = await produtosService.getAll();
        res.send(listaProdutos);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const produto = await produtosService.getById(id);
        if (produto) {
            res.send(produto);
        }
        else {
            res.status(404).send({ "sucesso": false, "mensagem": `Não foi possível localizar produto com o ${id}` });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await produtosModel.findByIdAndRemove(id);
        if(result) {
            res.send({ "sucesso": true, "mensagem": "Produto apagado com sucesso" });
        }
        else{
            res.status(404).send({ "sucesso": false, "mensagem": `Não possível apagar o produto id ${id}` });    
        }


    } catch (error) {
        console.log({ "sucesso": false, "mensagem": `Não possível apagar o produto id ${id}` });
        res.status(500).send(error);
    }
}

module.exports = { create, getAll, getById, deleteById, update }