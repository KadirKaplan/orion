const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TillSchema = new Schema({
    tillCode: {
        type: String,
        unique: true,
        required: true
    },
    tillName : {
        type:String,
        required: true
    },
    tillDesc : {
        type: String,
        
    }
});

const Till = mongoose.model('till',TillSchema);

module.exports = Till;

