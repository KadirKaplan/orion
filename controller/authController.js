const User = require('../model/User');
const bcrypt = require('bcrypt');


exports.createUser = async (req, res) => {

  try {

    const user = await User.create(req.body);
    req.flash("success", "Kayıt işlemi  başarılı");
    res.redirect('/login');
  } catch (err) {
    req.flash("error", "E-mail adresi zaten mevcut, farklı bir mail adresi deneyin!");
    res.redirect('/signup');
  }

}


exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    User.findOne({ email }, (err, user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, same) => {

          if (same) {
            // USER SESSION
            req.session.userID = user._id;

           res.status(200).render('index',{
             user
           });
            
          
            
          } else {
            req.flash("error", "Şifreniz kontrol ediniz!");
            res.status(400).redirect('/login');
          }
        });

      }
      else {
        req.flash("error", "Kullanıcı bulunamadı!");
        res.status(400).redirect('/login');
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};



exports.logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};

exports.getUserInfo = async (req,res) => {
  const user  = await User.findOne({_id:req.params._id})
   res.status(200).render('users-profile', {
     user

   });
}