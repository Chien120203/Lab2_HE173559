const db = require('../models/index_model');
const Stoty = db.Stoty;

//create
const create = async (req, res, next) => {
    try {
        const newStory = new Stoty({
            title: req.body.title
        })

        await newStory.save()
        then(newDoc => res.status(201).json(newDoc))
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}

//edit
const edit = async (req, res, next) => {
    try {
        const id = req.params.id;
        const editStory = {
            title: req.body.title,
            fans: req.body.fans
        };

        const result = await Story.findByIdAndUpdate(id, editStory, { new: true });

        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    create,
    edit
}