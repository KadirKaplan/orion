const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VatSchema = new Schema({
    vatCode: {
        type: String,
        unique: true,
        required: true
    },
    vatName: {
        type: String,
        required: true
    },
    vatrate: {
        type: Number,
        required: true
    }
});

const Vatrates  = mongoose.model('vatrates',VatSchema);

module.exports = Vatrates;

