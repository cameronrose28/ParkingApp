const mongoose = require('mongoose')

const SiteConfigSchema = new mongoose.Schema({
    companyname: {
        type: String,
        required: true
    },
    reserveamount: {
        type: Number,
        required: true
    },
    reservecooldown: {
        type: Number,
        required: true
    },
    responseemail: {
        type: String,
        required: true
    }
})

const SiteConfig = mongoose.model("SiteConfig", SiteConfigSchema)

module.exports=SiteConfig