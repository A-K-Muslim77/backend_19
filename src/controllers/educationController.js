
const educationModel = require("../models/educationModel");



//Education Create
exports.createEducation = async (req,res) =>{
    try {

        let {title , institute , description , time} = req.body;
        
        let data = await educationModel.create({title , institute , description , time})
        
        res.status(200).json({
            success: true,
            message: "Education Create Successfully",
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


//Get all Education
exports.allEducation = async (req,res) =>{
    try {
        let data = await educationModel.find()

        res.status(200).json({
            success: true,
            message: "Get All Education  Successfully",
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

//Get Single Education
exports.singleEducation = async (req,res) =>{
    try {
        let { id } = req.params;

        let data = await educationModel.findById(id)

        res.status(200).json({
            success: true,
            message: "Get Single Education  Successfully",
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

//Update Single Education
exports.updateEducation = async (req,res) =>{
    try {
        let { id } = req.params;
        let {title , institute , description , time} = req.body;

        let data = await educationModel.findByIdAndUpdate(id,{title , institute , description , time},{new:true})

        res.status(200).json({
            success: true,
            message: "Update Single Education  Successfully",
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

//Delete Single Education
exports.deleteEducation = async (req,res) =>{
    try {
        let { id } = req.params;

        let data = await educationModel.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: "Delete Single Education  Successfully",
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