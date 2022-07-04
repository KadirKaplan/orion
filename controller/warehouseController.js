const Warehouse = require('../model/Warehouse');
const User = require('../model/User');

exports.createWarehouse = async (req,res) => {
    try {
     const warehouse = await Warehouse.create(req.body);
     req.flash("success","Kayıt işlemi başarılı!");
     res.status(201).redirect('/warehouses');
     
    } catch(error) {
        req.flash("error","Kayıt işlemi başarısız!");
        res.status(201).redirect('/warehouses');
     
    }
}

exports.getAllWarehouses = async ( req,res) => {
    try {
     const warehouses = await Warehouse.find();
     const user = await User.findOne({_id:req.session.userID});
     res.status(201).render('warehouses', {
         warehouses,
         user
     })
     
    } catch(error) {
     
     
    }
}

exports.updateWarehouse = async(req,res) => {
    try {
     const warehouse = await Warehouse.findOne({_id:req.params._id});
     warehouse.houseCode = req.body.houseCode;
     warehouse.houseRoomNumber = req.body.houseRoomNumber;
     warehouse.houseCapacity = req.body.houseCapacity;
     warehouse.save();
     req.flash("success","Güncelleme işlemi başarılı!");
     res.status(201).redirect('/warehouses');

    } catch(error) {
        req.flash("error","Güncelleme işlemi başarısız!");
        res.status(201).redirect('/warehouses');
     
    }
}


exports.deleteWarehouse = async (req,res) => {
    try {
     const warehouse = await Warehouse.findByIdAndRemove({_id:req.params._id});
     req.flash("success","Silme işlemi başarılı!");
     res.status(201).redirect('/warehouses');
     
    } catch(error) {
        req.flash("error","Silme işlemi başarısız!");
        res.status(201).redirect('/warehouses');
     
    }
}