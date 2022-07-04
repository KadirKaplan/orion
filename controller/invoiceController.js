
const Invoice = require('../model/Invoice');
const User = require('../model/User');
const invoiceType = require('../model/InvoiceType');
const Customers = require('../model/Customers');
const Products = require('../model/Product');

exports.createInvoice = async (req, res) => {
    try {
        const invoice = await Invoice.create(req.body);
     
        await Invoice.InvoiceProduct.push({_id: req.body._id});

        req.flash("success","Kayıt işlemi başarılı!")
        res.redirect('/invoices');

    } catch (error) {
        console.log(error);
        req.flash("error","Kayıt işlemi başarısız!")
        res.redirect('/invoices');

    }
}

exports.getAllInvoices = async (req, res) => {
    try {
        const user = await User.findOne({_id:req.session.userID});
        const invoices = await Invoice.find().populate('InvoiceType').populate('InvoiceCustomer').populate('InvoiceProduct');
        const invoiceTypes = await invoiceType.find();
        const customers = await Customers.find();
        const products = await Products.find();
    
       
        res.status(200).render('invoices', {
            status: 'succes',
            invoices,
            customers, 
            user,
            products,
            invoiceTypes
        })

    } catch (error) {


    }


    
}

exports.getOneInvoiceNumber = async (req,res) => {
    try {
     const data = await Invoice.findOne().sort('-InvoiceNo').limit(1);
   
     res.json(data);
     
    } catch(error) {
     
     
    }
}