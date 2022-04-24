const Brand = require('../model/Brand');
const User = require('../model/User');

exports.createBrand = async (req, res) => {

    try {
        const brand = await Brand.create(req.body);
        req.flash("success", "Kayıt işlemi başarılı!");
        res.status(200).redirect('/brands');


    } catch (error) {
        req.flash("error", "Bir hata alındı!");
        res.redirect('/brands');

    }

}

exports.getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.find();
        const user = await User.findOne({ _id: req.session.userID });
        res.status(201).render('brands', {
            brands,
            user
        })

    } catch (error) {


    }
}

exports.updateBrand = async (req, res) => {
    try {
        const brand = await Brand.findOne({ _id: req.params._id });
        brand.brandCode = req.body.brandCode;
        brand.brandName = req.body.brandName;
        brand.save();
        req.flash("success", "Güncelleme işlemi başarılı!");
        res.status(201).redirect('/brands');

    } catch (error) {
        req.flash("error", "Bir hata oluştu!");
        res.status(401).redirect('/brands');

    }
}

exports.deleteBrand = async (req, res) => {
    try {
        const brand = await Brand.findByIdAndDelete({ _id: req.params._id });
        req.flash("success", "Silme işlemi başarılı!");
        res.status(201).redirect('/brands');

    } catch (error) {
        req.flash("error", "Bir hata oluştu!");
        res.status(401).redirect('/brands');

    }
}