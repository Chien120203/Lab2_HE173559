const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const httpErrors = require("http-errors");
const db = require("./models/index_model");
const { PersonRouter, StoryRouter } = require("./routes/index_routes");

require("dotenv");

//init web server 
const app = express();

//add middleware
app.use(bodyParser.json());
app.use(morgan("dev"));

//routes
app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Welcome web REST API - NodeJS",
    })
});

app.use("/api/person", PersonRouter);
app.use("/api/story", StoryRouter);

app.use(async (req, res, next) => {
    next(httpErrors.NotFound())
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        "status": err.status || 500,
        "message": err.message
    })
})

const port = process.env.PORT || 9999;

//tiep nhan cac request toi express web server
app.listen(port, async () => {
    db.connectDB();
    console.log(`Server is running on: http://localhost:${port}`);
})