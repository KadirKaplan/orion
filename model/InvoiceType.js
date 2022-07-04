const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InvoiceTypeSchema = new Schema ({
    InvoiceTypeCode:{
        type: Number,
        required:true,
        unique: true
    },
    InvoiceTypeName : {
        type:String,
        required: true,
        unique:true
    },
});

const InvoiceType = mongoose.model('invoicetype',InvoiceTypeSchema);

module.exports = InvoiceType;