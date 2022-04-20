const User = require('../model/User');

module.exports = (req, res, next) => {
    User.findOne({ _id: req.session.userID }, (err, user) => {
        if (err || !user) return res.redirect('/login');
        next();
    });

}