const mongoose = require('mongoose');

const EmprendimientosSchema = mongoose.Schema ({

    nombre: {
        type: String,
        required: true,
        trim: true
    },
    CedJuridica: {
        type: String,
        required: true,
        trim: true
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Emprendimiento'
    },
    telCelular: {
        type: String,
        required: true,
        trim: true
    },
    distrito: {
        type: String,
        required: true,
        trim: true
    },
    direccion: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true
    },
    archivosMultimedia: {
        type: String
    },
    fechaRegistro: {
        type: Date,
        default: Date.now()
    }
    
});

module.exports = mongoose.model('Emprendimiento', EmprendimientosSchema);