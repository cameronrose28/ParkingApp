const SiteConfig = require ('../models/SiteConfig')


exports.PostSiteConfig = (req, res) => {


    SiteConfig.find({}, (error, SiteDetails) => {

        SiteConfig.findOneAndUpdate({_id: SiteDetails[0]._id}, {$set: {CompanyName: req.body.CompanyName, ConcurrentReserve: req.body.ConcurrentReserve, ResponseEmail: req.body.ResponseEmail}})
            .then(res.render("siteconfig", SiteConfig.GetSiteConfig))
            .catch(error => console.log(error))
})

}

exports.GetSiteEmail = (req, res) => {
    SiteConfig.find({}, (error, SiteDetails) => {
        res.render("home", {SiteDetails});
    })
}

exports.GetSiteConfig = (req, res) => {
    SiteConfig.findOne({}, (error, SiteDetails) => {
        res.render("siteconfig", {SiteDetails});
})
}