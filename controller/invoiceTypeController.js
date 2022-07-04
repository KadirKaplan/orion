const InvoiceType = require('../model/InvoiceType');

exports.createInvoiceType = async (req, res) => {
    try {
        const invoiceType = await InvoiceType.create(req.body);


    } catch (error) {
        console.log(error);

    }
}

exports.getAllInvoiceType = async (req, res) => {
    try {
        const InvoiceTypes = await InvoiceType.find();
        res.send(InvoiceTypes);

    } catch (error) {

        console.log(error);
    }
}