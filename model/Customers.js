const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');

const CustomerSchema = new Schema({
    companyCode: {
        type: String,
        required: true,
        unique: true
    },
    companyName: {
        type: String,
        required: true
    },
    copanyTaxID: {
        type: String
    },
    authorizedPerson: {
        type: String

    },
    email : {
        type : String
    },
    companyAdress: {
        type: String
    },
    companyTelephone: {
        type: String,
    },
    companyCity: {
        type: String
    },
    companyDebit : {
        type: Number,

    },
    companyCredit : {
        type:Number
    },
    companyBalance : {
        type: Number
    },
    slug: {
        type: String,
        unique: true
    }

});
CustomerSchema.pre('validate', function (next) {
    this.slug = slugify(this.companyName, {
        lower: true,
        strict : true
    })
    next();
})

CustomerSchema.pre('validate', function (next) {
    this.companyBalance = (this.companyDebit)-(this.companyCredit);
    next();
})
const Customers  = mongoose.model('customer', CustomerSchema);

module.exports = Customers;