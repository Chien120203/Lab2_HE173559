const express = require("express");
const bodyParser = require("body-parser");
const storyRouter = express.Router();
const { StoryController } = require("../controllers/index_controller");

//router middleware
storyRouter.use(bodyParser.json());

//routes
storyRouter.put("/edit/:id", StoryController.edit);
storyRouter.post("/add", StoryController.create);

module.exports = storyRouter;