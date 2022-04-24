const Category = require('../model/Category');
const User = require('../model/User');




exports.createCategory = async (req, res) => {
    try {
        const categeory = await Category.findOne({ categoryCode: req.body.categoryCode });
        if (categeory) {
            req.flash("error", "Aynı kodlu bir kayıt zaten var, farklı bir kod ile tekrar deneyin");
            res.status(400).redirect('/categories');
        }
        else {
            const category = await Category.create(req.body);
            req.flash("success", "Kayıt işlemi başarılı!");
            res.status(201).redirect('/categories');
        }
    } catch (error) {
        req.flash("error", "Kayıt işlemi başarısız oldu!");
        console.log(error);
        res.status(400).redirect('/categories');
    }
}


exports.getAllCategory = async (req, res) => {
    try {
        const categories = await Category.find();
        const user = await User.findOne({ _id: req.session.userID });
        res.status(201).render('categories', {
            categories,
            user

        });
    } catch (error) {
        req.flash("error", "Bir hata oluştu!")
    }
}

exports.updatecategory = async (req, res) => {
    try {
        const category = await Category.findOne({_id:req.params._id});
        category.categoryCode = req.body.categoryCode;
        category.categoryName = req.body.categoryName;
        category.save();
        req.flash("succes", "Güncelleme işlemi başarılı");
        res.status(200).redirect('/categories');


    } catch(error) {
        req.flash("error", "Bir hata oluştu");
      
        res.status(401).redirect('/categories');
    }
}

exports.deleteCategory = async(req,res) => {
    try {
        const category = await Category.findByIdAndDelete({_id: req.params._id});
        req.flash("succes", "Silme işlemi başarılı");
        res.status(200).redirect('/categories');

    } catch(error) {

        req.flash("error", "Bir hata oluştu");
       
        res.status(401).redirect('/categories');
    }
}