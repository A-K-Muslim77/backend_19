
const portfolioModel = require("../models/portfolioModel");



//Portfolio Create
exports.createPortfolio = async (req,res) =>{
    try {

        let {title , category , img , link} = req.body;
        
        let data = await portfolioModel.create({title , category , img , link})
        
        res.status(200).json({
            success: true,
            message: "Portfolio Create Successfully",
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


//Get all Portfolio
exports.allPortfolio = async (req,res) =>{
    try {
        let data = await portfolioModel.find()

        res.status(200).json({
            success: true,
            message: "Get All Portfolio  Successfully",
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

//Get Single Portfolio
exports.singlePortfolio = async (req,res) =>{
    try {
        let { id } = req.params;

        let data = await portfolioModel.findById(id)

        res.status(200).json({
            success: true,
            message: "Get Single Portfolio  Successfully",
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

//Update Single Portfolio
exports.updatePortfolio = async (req,res) =>{
    try {
        let { id } = req.params;
        let {title , category , img , link} = req.body;

        let data = await portfolioModel.findByIdAndUpdate(id,{title , category , img , link},{new:true})

        res.status(200).json({
            success: true,
            message: "Update Single Portfolio  Successfully",
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

//Delete Single Portfolio
exports.deletePortfolio = async (req,res) =>{
    try {
        let { id } = req.params;

        let data = await portfolioModel.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: "Delete Single Portfolio  Successfully",
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