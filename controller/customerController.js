const Customer = require('../model/Customers');
const User = require('../model/User');



exports.createCustomer = async (req, res) => {
    try {

        const comCode = await Customer.findOne({ companyCode: req.body.companyCode });
        if (comCode) {

            req.flash("error", "Aynı kodlu bir kayıt zaten var! Farklı bir kod ile deneyin!");
            res.redirect('/customers');
        }
        else {

            const customer = await Customer.create({
                companyCode: req.body.companyCode,
                companyName: req.body.companyName,
                copanyTaxID: req.body.copanyTaxID,
                authorizedPerson: req.body.authorizedPerson,
                email: req.body.email,
                companyAdress: req.body.companyAdress,
                companyTelephone: req.body.companyTelephone,
                companyCity: req.body.companyCity,
                companyDebit:req.body.companyDebit,
                companyCredit:req.body.companyCredit,
            
            });

            req.flash("success", `${customer.companyName}  başarılı bir şekilde oluşturuldu!`);
            res.redirect('/customers');

        }
    } catch (error) {
        console.log(error);
    }
}

exports.getAllCustomers = async (req, res) => {
    try {

        const customers = await Customer.find().sort('-companyCode');
        const user = await User.findOne({_id:req.session.userID});
        res.status(200).render('customers', {
            status: 'succes',
            customers, 
            user
        })



    } catch (error) {
        res.status(404).render('customers', {
            status: 'failed',
            error
        })
    }
}

exports.deleteCustomer = async (req, res) => {
    try {

        const custom = await Customer.findOneAndRemove({ slug: req.params.slug });
        req.flash("success", `${custom.companyName} Silme İşlemi Başarılı!`);
        res.status(200).redirect('/customers');


    } catch (error) {
        req.flash("error", "Bit hata oluştu ! Silme işlemi başarısız !");
        req.status(401).redirect('/customers');

    }
}

exports.updateCustomer = async (req, res) => {
    try {
            const customers = await Customer.findOne({ slug: req.params.slug });
            customers.companyCode = req.body.companyCode;
            customers.companyName = req.body.companyName;
            customers.copanyTaxID = req.body.copanyTaxID;
            customers.authorizedPerson = req.body.authorizedPerson;
            customers.email = req.body.email;
            customers.companyAdress = req.body.companyAdress;
            customers.companyTelephone = req.body.companyTelephone;
            customers.companyCity = req.body.companyCity;
            customers.save();

            req.flash("succes", "Güncelleme işlemi başarılı");
            res.status(200).redirect('/customers');
    } catch (error) {

        req.flash("error", "Bir hata oluştu");

        res.status(401).redirect('/customers');
    }
}