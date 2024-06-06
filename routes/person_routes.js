const express = require("express");
const bodyParser = require("body-parser");
const personRouter = express.Router();
const { PersonController } = require('../controllers/index_controller');

//router middleware
personRouter.use(bodyParser.json());

//routes
personRouter.get("/", PersonController.list);
personRouter.put("/edit/:id", PersonController.edit);
personRouter.post("/add", PersonController.create);

module.exports = personRouter;