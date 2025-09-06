const express = require("express");
const userController = require("../controllers/userController.js");
const middlewares = require("../middlewares/authVerification.js");
const experienceController = require("../controllers/experienceController.js")
const educationController = require("../controllers/educationController.js")
const advantageController = require("../controllers/advantageController.js")
const portfolioController = require("../controllers/portfolioController.js")
const serviceController = require("../controllers/serviceController.js")
const testimonialController = require("../controllers/testimonialController.js")
const contactController = require("../controllers/contactController.js")

const router = express.Router();

//! User
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/user", middlewares, userController.user);
router.get("/logout", middlewares, userController.logout);
router.put("/update", middlewares, userController.update);


//! Experience
router.post("/create-experience", experienceController.createExperience);
router.get("/all-experience", experienceController.allExperience);
router.get("/single-experience/:id", experienceController.singleExperience);
router.put("/update-experience/:id", experienceController.updateExperience);
router.delete("/delete-experience/:id", experienceController.deleteExperience);


//! Education
router.post("/create-education", educationController.createEducation);
router.get("/all-education", educationController.allEducation);
router.get("/single-education/:id", educationController.singleEducation);
router.put("/update-education/:id", educationController.updateEducation);
router.delete("/delete-education/:id", educationController.deleteEducation);



//! Advantage
router.post("/create-advantage", advantageController.createAdvantage);
router.get("/all-advantage", advantageController.allAdvantage);
router.get("/single-advantage/:id", advantageController.singleAdvantage);
router.put("/update-advantage/:id", advantageController.updateAdvantage);
router.delete("/delete-advantage/:id", advantageController.deleteAdvantage);


//! Portfolio
router.post("/create-portfolio", portfolioController.createPortfolio);
router.get("/all-portfolio", portfolioController.allPortfolio);
router.get("/single-portfolio/:id", portfolioController.singlePortfolio);
router.put("/update-portfolio/:id", portfolioController.updatePortfolio);
router.delete("/delete-portfolio/:id", portfolioController.deletePortfolio);


//! Service
router.post("/create-service", serviceController.createService);
router.get("/all-service", serviceController.allService);
router.get("/single-service/:id", serviceController.singleService);
router.put("/update-service/:id", serviceController.updateService);
router.delete("/delete-service/:id", serviceController.deleteService);

//! Testimonial
router.post("/create-testimonial", testimonialController.createTestimonial);
router.get("/all-testimonial", testimonialController.allTestimonial);
router.get("/single-testimonial/:id", testimonialController.singleTestimonial);
router.put("/update-testimonial/:id", testimonialController.updateTestimonial);
router.delete("/delete-testimonial/:id", testimonialController.deleteTestimonial);


//! Contact
router.post("/create-contact", contactController.createContact);
router.get("/all-contact", contactController.allContact);
router.get("/single-contact/:id", contactController.singleContact);
router.put("/update-contact/:id", contactController.updateContact);
router.delete("/delete-contact/:id", contactController.deleteContact);


module.exports = router;
