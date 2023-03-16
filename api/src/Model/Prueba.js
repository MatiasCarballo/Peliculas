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
}, { toJSON: { transform: (doc, ret) => { ret.id = ret._id.toString(); delete ret._id; delete ret.__v; } } });

const Prueba = model('Prueba', pruebaSchema);
module.exports = Prueba;