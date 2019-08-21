const mongoose = require('mongoose')

const SiteConfigSchema = new mongoose.Schema({
    CompanyName: {
        type: String,
        required: true
    },
    ConcurrentReserve: {
        type: Number,
        required: true
    },
    ResponseEmail: {
        type: String,
        required: true
    }
})

const SiteConfig = mongoose.model("SiteConfig", SiteConfigSchema)

module.exports=SiteConfig