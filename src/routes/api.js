const express = require("express");
const userController = require("../controllers/userController.js");
const middlewares = require("../middlewares/authVerification.js");
const router = express.Router();

//! Register a new user
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/user", middlewares, userController.user);
router.get("/logout", middlewares, userController.logout);
router.put("/update", middlewares, userController.update);

module.exports = router;
