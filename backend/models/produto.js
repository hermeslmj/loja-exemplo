const mongoose = require('mongoose');

let schema = mongoose.Schema({
    Nome: {
        type: String,
        required: [true, "Produto deve conter um Nome"]
    },
    Imagem: {
        type: String,
        default: "assest/imagens/default.jpg"
    },
    Descricao: {
        type: String,
        required: [true, "Produto deve conter Descrição"]
    },
    Preco: {
        type: Number,
        required: [true, "Produto não pode ser cadastrado sem preço"],
        default: 0,
        min: [0, "Produto não pode ter preço negativo"]
    },
    Estoque: {
        type: Number,
        required: true,
        default: 0,
        min: [0, "Produto não pode ter estoque negativo"]
    },
    Habilitado: {
        type: Boolean,
        required: true,
        default: true
    }
});

const produtoModel = mongoose.model('produto', schema);

module.exports = produtoModel;