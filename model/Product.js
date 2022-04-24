const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    productCode: {
        type: String,
        unique: true,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String
    },
    productUnitset: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'unitset'
    },
    productCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    productBrand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brand'
    },
    productVatrate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vatrates'
    },
    productPurcPrice: {
        type: Number
    },
    productSalePrice: {
        type: Number
    },
    productAmount: {
        type: Number,

    }
    



});
const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
