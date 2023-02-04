const express = require("express");
const routers = express.Router();
const controller = require("../controllers/mainController");


routers.get("/",controller.main)
routers.get("/about",controller.about)



module.exports = routers;