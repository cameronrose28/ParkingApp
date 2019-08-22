const SiteConfig = require ('../models/SiteConfig')


exports.PostSiteConfig = (req, res) => {


    SiteConfig.find({}, (error, SiteDetails) => {

        SiteConfig.findOneAndUpdate({_id: SiteDetails[0]._id}, {$set: {CompanyName: req.body.CompanyName, ConcurrentReserve: req.body.ConcurrentReserve, ResponseEmail: req.body.ResponseEmail}})
            .then(console.log("Updated Successfully"))
            .catch(error => console.log(error))
})

}

<<<<<<< HEAD
=======
//    const siteconfig = new SiteConfig ({
//        CompanyName: "Test Company", 
//        ConcurrentReserve: 2,
//        ResponseEmail: "Test@test.com.au"
/* test */


>>>>>>> 9cab239538a35cdf0f9e8080b60eb857fe94b969

exports.GetSiteEmail = (req, res) => {
    SiteConfig.find({}, (error, SiteDetails) => {
        res.render("home", {SiteDetails});
    })
}