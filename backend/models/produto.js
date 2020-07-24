const mongoose = require('mongoose');

let schema = mongoose.Schema({
    Nome: {
        type: String,
        required: true
    },
    Imagem: {
        type: String,
        default: "assest/imagens/default.jpg"
    },
    Description: {
        type: String,
        required: true
    },
    Preco: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    Estoque: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    Habilitado: {
        type: Boolean,
        required: true,
        default: true
    }
});

const produtoModel = mongoose.model('produto', schema);

module.exports = produtoModel;