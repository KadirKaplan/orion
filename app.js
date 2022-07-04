const express = require('express');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const session = require('express-session')
const flash = require('connect-flash');
const methodOverride = require('method-override');
const customersRoute = require('./route/customersRoute');
const pageRoute = require('./route/pageRoute')
const userRoute = require('./route/userRoute');
const productRoute = require('./route/productRoute');
const unitsetRoute = require('./route/unitsetRoute');
const categoryRoute = require('./route/categoryRoute');
const brandRoute = require('./route/brandRoute');
const vatrateRoute = require('./route/vatrateRoute');
const tillRoute = require('./route/tillRoute');
const bankRoute = require('./route/bankRoute');
const bankaccountRoute = require('./route/bankAccountRoute');
const warehouseRoute = require('./route/warehouseRoute');
const invoiceTypeRoute = require('./route/invoiceTypeRoute');
const invoiceRoute = require('./route/invoiceRoute');
const getInvoiceNumberRoute = require('./route/getinvoicenumberRoute');
const app = express();

//Connect Mongo
mongoose.connect('mongodb://localhost:27017/Orion', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB CONNECTED!")
});
//Template Engine
app.set('view engine', 'ejs');
global.userIN = null;

//Middlewares

app.use(express.static("public"));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/Orion' })

}));
app.use(flash());
app.use((req, res, next) => {
    res.locals.flashMessages = req.flash();
    next();
});
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}));



//Routes

app.use('*', (req, res, next) => {
    userIN = req.session.userID;
    next();
});

app.use('/', pageRoute);
app.use('/users', userRoute);
app.use('/index', pageRoute);
app.use('/customers', customersRoute);
app.use('/products', productRoute);
app.use('/unitset', unitsetRoute);
app.use('/categories', categoryRoute);
app.use('/brands', brandRoute);
app.use('/vatrates', vatrateRoute);
app.use('/tills', tillRoute);
app.use('/banks', bankRoute);
app.use('/bankaccounts', bankaccountRoute);
app.use('/warehouses', warehouseRoute);
app.use('/invoicetypes', invoiceTypeRoute);
app.use('/invoices', invoiceRoute);
app.use('/getInvoiceNumber', getInvoiceNumberRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`app start ${PORT}`);
});
// express-session
