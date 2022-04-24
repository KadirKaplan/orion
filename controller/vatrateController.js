const Vatrate = require('../model/Vatrates');
const User = require('../model/User');

exports.createVat = async (req, res) => {
    try {
        const vatrate = await Vatrate.create(req.body);
        req.flash("success", "Kayıt işlemi başarılı!");
        res.status(201).redirect('/vatrates');

    } catch (error) {

        req.flash("error", "Bir hata oluştu!",error);
   
        res.status(201).redirect('/vatrates');
    }
}

exports.getAllVatrates = async (req, res) => {
    try {
        const vatrates = await Vatrate.find();
        const user = await User.findOne({ _id: req.session.userID });
        res.status(201).render('vatrates', {
            vatrates,
            user
        });
    } catch (error) {
        res.redirect('/vatrates');
    }

}

exports.updateVatrate = async (req, res) => {
    try {
        const vatrate = await Vatrate.findById({ _id: req.params._id });
        vatrate.vatCode = req.body.vatCode;
        vatrate.vatName = req.body.vatName;
        vatrate.vatrate = req.body.vatrate;
        vatrate.save();

        req.flash("success", "Güncelleme işlemi başarılı!");
        res.redirect('/vatrates');
    } catch (error) {
        req.flash("error", "Güncelleme işlemi başarısız!");
        res.redirect('/vatrates');
    }
}

exports.deleteVatrate = async (req, res) => {
    try {
        const vatrate = await Vatrate.findOneAndRemove({ _id: req.params._id });
        req.flash("success", "Silme işlemi başarılı!");
        res.status(201).redirect('/vatrates');
    } catch (error) {
        req.flash("error", "Silme işlemi başarısız!");
        res.status(201).redirect('/vatrates');

    }
}
