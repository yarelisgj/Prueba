const mongoose = require("mongoose");

const CategoriasSchema = mongoose.Schema ({ 
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    fechaRegistro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Categoria', CategoriasSchema);