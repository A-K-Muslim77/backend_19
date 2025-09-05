
const experienceModel = require("../models/experienceModel");



//Experience Create
exports.createExperience = async (req,res) =>{
    try {

        let {title , company , description , time} = req.body;
        
        let data = await experienceModel.create({title , company , description , time})
        
        res.status(200).json({
            success: true,
            message: "Experience Create Successfully",
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


//Get all Experience
exports.allExperience = async (req,res) =>{
    try {
        let data = await experienceModel.find()

        res.status(200).json({
            success: true,
            message: "Get All Experience  Successfully",
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

//Get Single Experience
exports.singleExperience = async (req,res) =>{
    try {
        let { id } = req.params;

        let data = await experienceModel.findById(id)

        res.status(200).json({
            success: true,
            message: "Get Single Experience  Successfully",
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

//Update Single Experience
exports.updateExperience = async (req,res) =>{
    try {
        let { id } = req.params;
        let {title , company , description , time} = req.body;

        let data = await experienceModel.findByIdAndUpdate(id,{title , company , description , time},{new:true})

        res.status(200).json({
            success: true,
            message: "Update Single Experience  Successfully",
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

//Delete Single Experience
exports.deleteExperience = async (req,res) =>{
    try {
        let { id } = req.params;

        let data = await experienceModel.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: "Delete Single Experience  Successfully",
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