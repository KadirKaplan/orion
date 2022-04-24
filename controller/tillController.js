const Till = require('../model/Till');
const User = require('../model/User');
exports.createTill = async (req, res) => {
    try {
        const till = await Till.create(req.body);
        req.flash("success", "Kayıt işlemi başarılı");
        res.status(201).redirect('/tills');
    } catch (error) {
        req.flash("error", "Kayıt işlemi başarılı");
        res.status(201).redirect('/tills');

    }
}


exports.getAllTills = async (req, res) => {
    try {
        const tills = await Till.find();
        const user = await User.findOne({ _id: req.session.userID });
        res.status(201).render('tills', {
        tills,
        user
        });
    } catch (error) {
        req.flash("error", "Bir hata alındı!");
        res.status(201).redirect('/tills');
    }
}

exports.updateTill = async (req,res) => {
    try {
     const till = await Till.findOne({_id:req.params._id});
     till.tillCode  = req.body.tillCode;
     till.tillName = req.body.tillName;
     till.tillDesc = req.body.tillDesc;
     till.save();
     req.flash("success","Güncelleme işlemi başarılı");
     res.status(201).redirect('/tills');
     
    } catch(error) {
        req.flash("error","Güncelleme işlemi başarısız");
        res.status(201).redirect('/tills');
     
    }
}

exports.deleteTill = async (req,res) => {
    try {
     const till = await Till.findByIdAndDelete({_id:req.params._id});
     req.flash("success","Silme işlemi başarılı");
     res.status(201).redirect('/tills');
     
    } catch(error) {
        req.flash("error","Silme işlemi başarısız");
        res.status(201).redirect('/tills');
     
    }
}