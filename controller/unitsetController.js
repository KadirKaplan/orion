const Unitset = require('../model/Unitset');
const User = require('../model/User');

exports.createUnitset = async (req, res) => {
    try {


        const unitset = await Unitset.create(req.body);
        req.flash("success", "Kayıt İşlemi Başarılı");
        res.status(201).redirect('/unitset');


    } catch (error) {
        req.flash("error", "Birim seti kaydı yapılırken bir hata oluştu");
        res.status(400).redirect('/unitset')
    }



}

exports.updateUnitset = async (req, res) => {

    try {

        const unitset = await Unitset.findOne({ _id: req.params._id });
        unitset.unitCode = req.body.unitCode;
        unitset.unitName = req.body.unitName;
        unitset.unitDesc = req.body.unitDesc;
        unitset.save();
        req.flash("success", "Güncelleme İşlemi Başarılı!")
        res.status(201).redirect('/unitset');


    } catch (error) {
        req.flash("error", "Güncelleme İşlemi Başarısız!");
        res.status(400).redirect('/unitset');
    }
}


exports.deleteUnitset = async (req, res) => {
    try {
        const unitset = await Unitset.findByIdAndRemove({ _id: req.params._id });
        req.flash("success", "Silme işlemi başarılı");
        res.status(201).redirect('/unitset');
    } catch (error) {
        req.flash("error", "Silme işlemi başarısız");
        res.status(400).redirect('/unitset');
    }
}
exports.getAllUnitset = async (req, res) => {

    try {
        const unitset = await Unitset.find();
        const user = await User.findOne({ _id: req.session.userID });
        res.status(201).render('unitset', {
            unitset,
            user
        })
    } catch (error) {

        res.redirect('/unitset');
    }


}