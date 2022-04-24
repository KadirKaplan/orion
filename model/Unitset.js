const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UnitsetSchema = new Schema ({
    unitCode : {
        type:String,
        unique: true,
        required : true
    },
    unitName : {
        type : String,
        required : true
    },
    unitDesc : {
        type:String
    }
});

const Unitset = mongoose.model('unitset',UnitsetSchema);

module.exports = Unitset;