const express = require('express');
const Product = require('../model/Product');
const User = require('../model/User');
const Unitset = require('../model/Unitset');
const Category = require('../model/Category');
const Brand = require('../model/Brand');
const Vatrate = require('../model/Vatrates');


exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        req.flash("success", "Kayıt işlemi başarılı");
        res.redirect('/products');
    }catch (error) {
            req.flash("error", "Kayıt işlemi başarısız!");
            res.redirect('/products');
            console.log(error);
    }
}


exports.getAllProducts = async (req, res) => {
    const product = await Product.find().populate('productBrand').populate('productUnitset').populate('productCategory').populate('productVatrate');
    const user = await User.findOne({ _id: req.session.userID });
    const unitsets = await Unitset.find();
    const categories = await Category.find();
    const brands = await Brand.find();
    const vatrates = await Vatrate.find();
    res.status(200).render('products', {
        product,
        user,
        unitsets,
        categories,
        brands,
        vatrates
     
    })
}

exports.getProduct = async (req,res) => {
    try {
     
  const data = await Product.findOne({_id: req.params._id}).populate('productVatrate').populate('productUnitset');
  
res.json(data);
  
    } catch(error) {
     console.log(error);
     
    }
}