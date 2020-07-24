const mongoose = require('mongoose');

let schema = mongoose.Schema({
    ValorTotal: {
        type: Number,
        required: true
    },
    ValorFrete: {
        type: Number,
        required: true
    },
    Status: {
        type: String
    },
    Produtos: [{
        Nome: {
            type: String,
            required: true
        },
        QtdComprada: {
            type: Number,
            required: true
        },
        ValorUnitario: {
            type: Number,
            required: true
        },
        ValorTotal: {
            type: Number,
            required: true
        }
    }]
    
});

const pedidoModel = mongoose.model('pedido', schema);

module.exports = pedidoModel;