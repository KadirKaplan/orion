const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BankAcoountSchema = new Schema({
    accountCode: {
        type:String,
        unique:true,
        required: true
    }, 
    accountName : {
        type:String,
        required:true
    },
    accountNo : {
        type: String
    },
    IBAN : {
        type:String
    },
    batchNo: {
        type:String
    },
    bank: {
        type: mongoose.Schema.Types.ObjectId,
        ref :'bank'
    }
});

const bankAccounts = mongoose.model('bankaccounts',BankAcoountSchema);

module.exports = bankAccounts;