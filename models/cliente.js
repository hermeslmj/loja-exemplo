const mongoose = require('mongoose');

let schema = mongoose.Schema({
    Nome: {
        type: String,
        required: true
    },
    Telefone: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Senha: {
        type: String,
        required: true
    },
    Cep: {
        type: String,
        required: true
    },
    Rua: {
        type: String,
        required: true
    },
    Numero: {
        type: String,
        required: true
    },
    Complemento: {
        type: String,
        required: true
    },
    Cidade: {
        type: String,
        required: true
    },
    Estado: {
        type: String,
        required: true
    }

});

const clienteModel = mongoose.model('cliente', schema);

module.exports = clienteModel;