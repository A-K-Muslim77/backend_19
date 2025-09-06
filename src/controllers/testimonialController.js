
const testimonialModel = require("../models/testimonialModel");



//Testimonial Create
exports.createTestimonial = async (req,res) =>{
    try {

        let {clientName , feedback, address , img} = req.body;
        
        let data = await testimonialModel.create({clientName , feedback, address , img})
        
        res.status(200).json({
            success: true,
            message: "Testimonial Create Successfully",
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


//Get all Testimonial
exports.allTestimonial = async (req,res) =>{
    try {
        let data = await testimonialModel.find()

        res.status(200).json({
            success: true,
            message: "Get All Testimonial  Successfully",
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

//Get Single Testimonial
exports.singleTestimonial = async (req,res) =>{
    try {
        let { id } = req.params;

        let data = await testimonialModel.findById(id)

        res.status(200).json({
            success: true,
            message: "Get Single Testimonial  Successfully",
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

//Update Single Testimonial
exports.updateTestimonial = async (req,res) =>{
    try {
        let { id } = req.params;
        let {clientName , feedback, address , img} = req.body;

        let data = await testimonialModel.findByIdAndUpdate(id,{clientName , feedback, address , img},{new:true})

        res.status(200).json({
            success: true,
            message: "Update Single Testimonial  Successfully",
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

//Delete Single Testimonial
exports.deleteTestimonial = async (req,res) =>{
    try {
        let { id } = req.params;

        let data = await testimonialModel.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: "Delete Single Testimonial  Successfully",
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