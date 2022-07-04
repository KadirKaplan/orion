const mongoose = require('mongoose');
const mongooseDateFormat = require('mongoose-date-format');
const Schema = mongoose.Schema;
var moment = require('moment');
var now = moment();

const InvoiceSchema = new Schema({
    InvoiceNo: {
        type: String,
        unique: true,
        required: true
    },
    InvoiceType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'invoicetype'
    },
    InvoiceDate: {
        type: String,
         default: now.locale('tr').format("L")
    },
    InvoiceCustomer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    },
    InvoiceProduct: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    }],
   
    InvoiceAmount: {
        type: Number,

    }

});

const Invoice = mongoose.model('invoice', InvoiceSchema);

module.exports = Invoice;