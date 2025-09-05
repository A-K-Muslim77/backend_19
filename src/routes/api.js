const express = require("express");
const userController = require("../controllers/userController.js");
const experienceController = require("../controllers/experienceController.js")
const middlewares = require("../middlewares/authVerification.js");
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



module.exports = router;
