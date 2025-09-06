const mongoose  = require('mongoose')

const DataSchema = new mongoose.Schema({
    clientName:{
        type: String,
        require: true,
    },
    address:{
        type: String,
        require: true,
    },
    img:{
        type: String,
        require: true,
    },
    feedback:{
        type: String,
    }
},{
    timestamps: true,
    versionKey: false,
})

const testimonialModel = mongoose.model('testimonials',DataSchema)

module.exports = testimonialModel;