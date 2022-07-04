const BankAccount = require('../model/BankAccount');
const Bank = require('../model/Bank');
const User = require('../model/User');
exports.createBankAccount = async (req, res) => {
    try {
        const bankaccount = await BankAccount.create(req.body);
        req.flash("success", "Kayıt işlemi başarılı!");
        res.status(201).redirect('/bankaccounts');

    } catch (error) {
        req.flash("error", "Kayıt işlemi başarısız!");
        res.status(201).redirect('/bankaccounts');

    }
}

exports.getAllBankAccount = async (req, res) => {
    try {

        const bankaccounts = await BankAccount.find().populate('bank');
        const user = await User.findOne({ _id: req.session.userID });
        const banks = await Bank.find();
        res.status(201).render('bankaccounts', {
            bankaccounts,
            user,
            banks
        })

    } catch (error) {


    }
}

exports.updateBankAccount = async (req, res) => {
    try {
        const bankaccounts = await BankAccount.findOne({ _id: req.params._id });
        bankaccounts.accountCode = req.body.accountCode;
        bankaccounts.accountName = req.body.accountName;
        bankaccounts.accountNo = req.body.accountNo;
        bankaccounts.IBAN = req.body.IBAN;
        bankaccounts.batchNo = req.body.batchNo;
        bankaccounts.bank = req.body.bank;
        bankaccounts.save();
        req.flash("success", "Güncelle işlemi başarılı!");
        res.status(201).redirect('/bankaccounts');
    } catch (error) {
        req.flash("error", "Güncelle işlemi başarısız!");
        res.status(201).redirect('/bankaccounts');

    }
}

exports.deleteBankAccount = async (req, res) => {
    try {
        const banks = await BankAccount.findByIdAndRemove({ _id: req.params._id });
        req.flash("success", "Silme işlemi başarılı!");
        res.status(201).redirect('/bankaccounts');

    } catch (error) {
        req.flash("error", "Silme işlemi başarısız!");
        res.status(201).redirect('/bankaccounts');

    }
}