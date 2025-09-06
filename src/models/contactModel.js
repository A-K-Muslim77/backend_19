const mongoose  = require('mongoose')

const DataSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    website:{
        type: String,
        
    },
    message:{
        type: String,
        require: true,
    }
},{
    timestamps: true,
    versionKey: false,
})

const contactModel = mongoose.model('contacts',DataSchema)

module.exports = contactModel;