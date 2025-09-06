
const contactModel = require("../models/contactModel");



//Contact Create
exports.createContact = async (req,res) =>{
    try {

        let {name , email , website , message} = req.body;
        
        let data = await contactModel.create({name , email , website , message})
        
        res.status(200).json({
            success: true,
            message: "Contact Create Successfully",
            data,
        })
        
    } catch (error) {
      res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong!",
    }); 
    }
}


//Get all Contact
exports.allContact = async (req,res) =>{
    try {
        let data = await contactModel.find()

        res.status(200).json({
            success: true,
            message: "Get All Contact  Successfully",
            data,
        })

    } catch (error) {
       res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong!",
    });  
    }
}

//Get Single Contact
exports.singleContact = async (req,res) =>{
    try {
        let { id } = req.params;

        let data = await contactModel.findById(id)

        res.status(200).json({
            success: true,
            message: "Get Single Contact  Successfully",
            data,
        })

    } catch (error) {
       res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong!",
    });  
    }
}

//Update Single Contact
exports.updateContact = async (req,res) =>{
    try {
        let { id } = req.params;
        let {name , email , website , message} = req.body;

        let data = await contactModel.findByIdAndUpdate(id,{name , email , website , message},{new:true})

        res.status(200).json({
            success: true,
            message: "Update Single Contact  Successfully",
            data,
        })

    } catch (error) {
       res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong!",
    });  
    }
}

//Delete Single Contact
exports.deleteContact = async (req,res) =>{
    try {
        let { id } = req.params;

        let data = await contactModel.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: "Delete Single Contact  Successfully",
            data,
        })

    } catch (error) {
       res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong!",
    });  
    }
}