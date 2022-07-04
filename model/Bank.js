const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BankSchema = new Schema({
    bankCode: {
        type: String,
        unique: true,
        required: true
    },
    bankName : {
        type: String,
        required: true
    },
    bankBranch :{
        type: String
       
    },
    bankBranchNo : {
        type: String
    }
});

const Banks = mongoose.model('bank',BankSchema);

module.exports = Banks;