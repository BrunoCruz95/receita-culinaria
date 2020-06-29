const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const Receita  = new Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    assunto: {
        type: String,
        required: true
    },
    material1: {
        type: String
    },
    material2: {
        type: String
    },
    material3: {
        type: String
    },
    material4: {
        type: String
    },
    material5: {
        type: String
    },
    passo1: {
        type: String
    },
    passo2: {
        type: String
    },
    passo3: {
        type: String
    },
    passo4: {
        type: String
    },
    passo5: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model('receitas', Receita);