const SiteConfig = require ('../models/SiteConfig')


exports.PostSiteConfig = (req, res) => {


    SiteConfig.find({}, (error, SiteDetails) => {

        SiteConfig.findOneAndUpdate({_id: SiteDetails[0]._id}, {$set: {
            companyname: req.body.CompanyName, 
            reserveamount: req.body.ReserveAmount,
            reservecooldown: req.body.ReserveCooldown,
            responseemail: req.body.ResponseEmail}})
            .then(res.render("siteconfig", SiteConfig.GetSiteConfig))
            .catch(error => console.log(error))
})

}

exports.GetSiteEmail = () => {
    SiteEmail.findOne({responseemail: 1}, (error, SiteDetails) => {
        console.log(SiteEmail.responseemail)
        return SiteEmail.responseemail
    })
}

exports.GetSiteConfig = (req, res) => {
    SiteConfig.findOne({}, (error, SiteDetails) => {
        res.render("siteconfig", {SiteDetails});
})
}