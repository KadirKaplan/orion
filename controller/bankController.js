const Bank = require('../model/Bank');
const User = require('../model/User');
exports.createBank = async (req, res) => {
    try {
        const bank = await Bank.create(req.body);
        req.flash("success", "Kayıt işlemi başarılı!");
        res.status(201).redirect('/banks');

    } catch (error) {
        req.flash("error", "Kayıt işlemi başarısız!");
        res.status(201).redirect('/banks');

    }
}

exports.getAllBank = async (req,res) => {
    try {
     const banks = await Bank.find();
     const user = await User.findOne({_id:req.session.userID});
     res.status(201).render('banks', {
         banks,
         user
     })
     
    } catch(error) {
     
     
    }
}

exports.updateBank = async (req,res) => {
    try {
     const bank = await Bank.findOne({_id:req.params._id});
     bank.bankCode = req.body.bankCode;
     bank.bankName = req.body.bankName;
     bank.bankBranch = req.body.bankBranch;   
     bank.bankBranchNo  = req.body.bankBranchNo;
     bank.save();
     req.flash("success","Güncelle işlemi başarılı!");
     res.status(201).redirect('/banks');
    } catch(error) {
        req.flash("error","Güncelle işlemi başarısız!");
        res.status(201).redirect('/banks');
     
    }
}

exports.deleteBank = async (req,res) => {
    try {
     const banks = await Bank.findByIdAndRemove({_id: req.params._id});
     req.flash("success","Silme işlemi başarılı!");
     res.status(201).redirect('/banks');
     
    } catch(error) {
        req.flash("error","Silme işlemi başarısız!");
        res.status(201).redirect('/banks');
     
    }
}