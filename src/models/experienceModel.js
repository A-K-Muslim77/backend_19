const mongoose  = require('mongoose')

const DataSchema = new mongoose.Schema({
    title:{
        type: "String",
        require: true,
    },
    company:{
        type: "String",
        require: true,
    },
    description:{
        type: "String",
        require: true,
    },
    time:{
        type: "String",
        require: true,
    }
},{
    timestamps: true,
    versionKey: false,
})

const experienceModel = mongoose.model('experiences',DataSchema)

module.exports = experienceModel;