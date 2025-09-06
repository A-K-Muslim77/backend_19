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
    percent:{
        type: Number,
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

const advantageModel = mongoose.model('advantages',DataSchema)

module.exports = advantageModel;