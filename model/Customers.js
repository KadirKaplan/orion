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
const Customers  = mongoose.model('Customer', CustomerSchema);

module.exports = Customers;