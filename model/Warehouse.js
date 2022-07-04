const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WarehouseSchema = new Schema ({
    houseCode: {
        type:String,
        unique:true,
        required:true
    },
    houseRoomNumber : {
        type:Number,
        unique:true,
        required:true
    },
    houseCapacity : {
        type: String,
        required:true
    },
    houseBoxAccount :{
        type:Number,
        
    }
});

const Warehouse = mongoose.model('warehouse',WarehouseSchema);

module.exports = Warehouse;