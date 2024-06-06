const db = require('../models/index_model');
const Person = db.Person;

//create
const create = async (req, res, next) => {
    try {
        const newPerson = new Person({
            name: req.body.name,
            age: req.body.age
        })

        await newPerson.save()
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
        const editPerson = {
            name: req.body.name,
            age: req.body.age,
            stories: req.body.stories
        };

        const result = await Person.findByIdAndUpdate(id, editPerson, { new: true });

        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

//list 
const list = async (req, res, next) => {
    try {
        const result = await Person.find().populate('stories').exec();

        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    create,
    edit,
    list
}