const {Schema, model} = require('mongoose')

const pruebaSchema = new Schema({
    
    string:{
        type: String
    },
    number:{
        type: Number
    },
    boolean:{
        type: Boolean
    }
});

const Prueba = model('Prueba', pruebaSchema);
module.exports = Prueba;

