
const serviceModel = require("../models/serviceModel");



//Service Create
exports.createService = async (req,res) =>{
    try {

        let {title , description , img} = req.body;
        
        let data = await serviceModel.create({title , description , img})
        
        res.status(200).json({
            success: true,
            message: "Service Create Successfully",
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


//Get all Service
exports.allService = async (req,res) =>{
    try {
        let data = await serviceModel.find()

        res.status(200).json({
            success: true,
            message: "Get All Service  Successfully",
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

//Get Single Service
exports.singleService = async (req,res) =>{
    try {
        let { id } = req.params;

        let data = await serviceModel.findById(id)

        res.status(200).json({
            success: true,
            message: "Get Single Service  Successfully",
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

//Update Single Service
exports.updateService = async (req,res) =>{
    try {
        let { id } = req.params;
        let {title , description , img} = req.body;

        let data = await serviceModel.findByIdAndUpdate(id,{title , description , img},{new:true})

        res.status(200).json({
            success: true,
            message: "Update Single Service  Successfully",
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

//Delete Single Service
exports.deleteService = async (req,res) =>{
    try {
        let { id } = req.params;

        let data = await serviceModel.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: "Delete Single Service  Successfully",
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