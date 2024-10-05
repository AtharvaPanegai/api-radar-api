const express = require("express");
const router = express.Router();
const { createProject, createProjectApiKey, addOnCallPersonForProject, getCummulitiveProjectReport } = require("../controllers/project.controller");
const { isLoggedIn } = require("../middlewares/auth.middleware");

// router.route("/create").post(createProject);
router.route("/createapikey").post(createProjectApiKey);
router.route("/create").post(createProject)
router.route("/addoncallperson").post(addOnCallPersonForProject);
router.route("/report").post(getCummulitiveProjectReport);

module.exports = router;