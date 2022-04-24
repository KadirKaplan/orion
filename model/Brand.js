const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BrandSchema = new Schema({
    brandCode: {
        type:String,
        unique:true,
        required:true
    },
    brandName : {
        type:String,
        required:true
    }
});

const Brand = mongoose.model('brand',BrandSchema);

module.exports = Brand;