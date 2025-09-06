const mongoose  = require('mongoose')

const DataSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    institute:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    time:{
        type: String,
        require: true,
    }
},{
    timestamps: true,
    versionKey: false,
})

const educationModel = mongoose.model('educations',DataSchema)

module.exports = educationModel;