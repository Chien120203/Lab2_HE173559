const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storySchema = new Schema({
    "title": {
        type: String,
        required: true
    },
    "fans": {
        type: Schema.Types.ObjectId,
        ref: "person"
    },
},
    {
        timestamps: true
    }
);

const Story = mongoose.model("story", storySchema);

module.exports = Story;

