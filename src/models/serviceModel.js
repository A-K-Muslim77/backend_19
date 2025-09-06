const mongoose  = require('mongoose')

const DataSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    img:{
        type: String,
    }
},{
    timestamps: true,
    versionKey: false,
})

const serviceModel = mongoose.model('services',DataSchema)

module.exports = serviceModel;