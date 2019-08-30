
//Checks user is logged in, and redirects to login page if not
exports.ensureAuthenticated = (req, res, next) => {
    if(req.url == '/validatelogin') {
        console.log('validatelogin route')
        next();
    } else if(req.isAuthenticated()){
        next();
    }else {
        req.flash('error_msg', 'Please login to view page')
        res.status(401).render("login");
    }
}

//Checks user if not logged in and redirects to dashboard
exports.ensureNotAuthenticated = (req,res,next) => {
    if(!req.isAuthenticated()){
        next();
    }else {
        res.status(200).render("index")
    }
}