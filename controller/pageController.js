const User = require('../model/User');



exports.getLoginPage = (req, res) => {
   
    res.render('login');
    

};
exports.getRegisterPage = (req, res) => {


    res.render('register');
};
exports.getIndexPage =  async (req, res) => {
    

    const user =  await User.findOne({_id:req.session.userID});
    
    res.render('index', {
       user

    });
    
};

exports.getCustomersPage = (req, res) => {


    res.render('customers');
};


