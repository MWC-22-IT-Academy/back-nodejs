const { Schema, model } = require('mongoose');

const animalSchema = new Schema({
    Concepte: {
        type: String,
        require: true,
        ENUM: ['Gossos Recollits', 'Gossos Rescatats', 'Gossos Adoptats', 'Gats Recollits', 'Gats Rescatats', 'Gats Adoptats']
    },
    Gener: Number,
    Febrer: Number,
    Març: Number,
    Abril: Number,
    Maig: Number,
    Juny: Number,
    Juliol: Number,
    Agost: Number,
    Setembre: Number,
    Octubre: Number,
    Novembre: Number,
    Desembre: Number
},
    {
        versionKey: false
    });

module.exports = model('animals', animalSchema);