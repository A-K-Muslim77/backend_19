const mongoose  = require('mongoose')

const DataSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    category:{
        type: String,
        require: true,
    },
    img:{
        type: String,
        require: true,
    },
    link:{
        type: String,
    }
},{
    timestamps: true,
    versionKey: false,
})

const portfolioModel = mongoose.model('portfolios',DataSchema)

module.exports = portfolioModel;