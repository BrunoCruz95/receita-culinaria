module.exports = {
    yes_admin: function(req, res, next){
        if(req.isAuthenticated() && req.user.yes_admin == 1){
            return next();
        }
        req.flash("error_msg", "Você precisar ser um Administrador");
        res.redirect('/user/inicio');
    }
}