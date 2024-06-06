const mongoose = require('mongoose');
const Person = require('./person_model');
const Story = require('./story_model');

mongoose.Promise = global.Promise;

const db = {};

db.Person = Person;
db.Story = Story;

db.connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: process.env.DB_NAME
    })
        .then(() => console.log("Connect to DB successfully"))
        .catch(error => {
            console.error(error.message);
            process.exit();
        })
};

module.exports = db;