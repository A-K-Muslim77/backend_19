
const advantageModel = require("../models/advantageModel");



//Advantage Create
exports.createAdvantage = async (req,res) =>{
    try {

        let {title , category , percent , time} = req.body;
        
        let data = await advantageModel.create({title , category , percent , time})
        
        res.status(200).json({
            success: true,
            message: "Advantage Create Successfully",
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


//Get all Advantage
exports.allAdvantage = async (req,res) =>{
    try {
        let data = await advantageModel.find()

        res.status(200).json({
            success: true,
            message: "Get All Advantage  Successfully",
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

//Get Single Advantage
exports.singleAdvantage = async (req,res) =>{
    try {
        let { id } = req.params;

        let data = await advantageModel.findById(id)

        res.status(200).json({
            success: true,
            message: "Get Single Advantage  Successfully",
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

//Update Single Advantage
exports.updateAdvantage = async (req,res) =>{
    try {
        let { id } = req.params;
        let {title , category , percent , time} = req.body;

        let data = await advantageModel.findByIdAndUpdate(id,{title , category , percent , time},{new:true})

        res.status(200).json({
            success: true,
            message: "Update Single Advantage  Successfully",
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

//Delete Single Advantage
exports.deleteAdvantage = async (req,res) =>{
    try {
        let { id } = req.params;

        let data = await advantageModel.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: "Delete Single Advantage  Successfully",
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