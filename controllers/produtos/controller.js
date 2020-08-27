const produtosService = require('../../services/produtos/services');
const logManager = require('../../services/logs/services');


const create = async (req, res) => {
    try {
        const newProduto = await produtosService.create(req.body);
        if (newProduto) {
            logManager.logger.info(`POST - /produto - ${JSON.stringify({ "sucesso": true, "mensagem": "Produto criado com sucesso", "dados": newProduto })}`)
            res.send({ "sucesso": true, "mensagem": "Produto criado com sucesso", "dados": newProduto });
        }
        else {
            res.status(500).send({ "sucesso": false, "mensagem": "Não foi possível criar o produto", "dados": newProduto });
            logManager.logger.error(`POST - /produto - ${JSON.stringify(req.body)} `);
        }

    } catch (error) {
        res.status(500).send({ "sucesso": false, "mensagem": "Não foi possível criar o produto", "dados": error });
        logManager.logger.error(`POST - /produto - ${JSON.stringify(error)} `);
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedProduct = await produtosService.update(id, req.body);
        if (updatedProduct) {
            logManager.logger.info(`PUT - /produto - ${JSON.stringify({ "sucesso": true, "mensagem": "Produto atualizado com sucesso", "dados": updatedProduct })}`)
            res.send({ "sucesso": true, "mensagem": "Produto atualizado com sucesso", "dados": updatedProduct });
        }
        else {
            logger.logger.error(`PUT - /produto - ${JSON.stringify({ "sucesso": false, "mensagem": `Não foi possível atualizar o produto ${id}`, "dados": updatedProduct })} `);
            res.status(404).send({ "sucesso": false, "mensagem": `Não foi possível atualizar o produto ${id}`, "dados": updatedProduct });
        }

    } catch (error) {
        logManager.logger.error(`PUT - /produto - ${JSON.stringify({ "sucesso": false, "mensagem": `Não foi possível atualizar o produto ${id}, verifique os dados e tente novamente.` })} `);
        res.status(500).send({ "sucesso": false, "mensagem": `Não foi possível atualizar o produto ${id}, verifique os dados e tente novamente.` });
        
    }
}

const getAll = async (_, res) => {
    try {
        const listaProdutos = await produtosService.getAll();
        logManager.logger.info(`GET - /produto`);
        res.send(listaProdutos);
    } catch (error) {
        logManager.logger.error(`GET - /produto - ${JSON.stringify(error)} `);
        res.status(500).send(error);
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const produto = await produtosService.getById(id);
        if (produto) {
            logManager.logger.info(`GET - /produto/${id} - ${JSON.stringify(produto)}`);
            res.send(produto);
        }
        else {
            logManager.logger.error(`GET - /produto/${id} - ${JSON.stringify({ "sucesso": false, "mensagem": `Não foi possível localizar produto com o ${id}` })} `);
            res.status(404).send({ "sucesso": false, "mensagem": `Não foi possível localizar produto com o ${id}` });
        }

    } catch (error) {
        console.log(error);
        logManager.logger.error(`GET - /produto/${id} - ${JSON.stringify(error)} `);
        res.status(500).send(error);
    }
}

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        
        const result = await produtosService.deleteById(id);
        if (result) {
            logManager.logger.info(`GET - /produto/${id} - ${JSON.stringify({ "sucesso": true, "mensagem": "Produto apagado com sucesso" })}`);
            res.send({ "sucesso": true, "mensagem": "Produto apagado com sucesso" });
        }
        else {
            logManager.logger.error(`DELETE - /produto/${id} - ${JSON.stringify({ "sucesso": false, "mensagem": `Não possível apagar o produto id ${id}` })} `);
            res.status(404).send({ "sucesso": false, "mensagem": `Não possível apagar o produto id ${id}` });
        }


    } catch (error) {
        console.log({ "sucesso": false, "mensagem": `Não possível apagar o produto id ${id}` });
        logManager.logger.error(`DELETE - /produto/${id} - ${JSON.stringify(error)} `);
        res.status(500).send(error);
    }
}

module.exports = { create, getAll, getById, deleteById, update }