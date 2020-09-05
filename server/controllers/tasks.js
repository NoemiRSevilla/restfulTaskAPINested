require("../models/task");

const mongoose = require("mongoose"),
    Task = mongoose.model("Task");


module.exports = {
    index: (req,res) => {
        Task.find()
            .then(tasks =>{
                res.json({results: tasks});
            })
            .catch(err => {
                res.json({errors: err.errors});
            })
    },
    create: (req, res) => {
        Task.create(req.body)
            .then(task => {
                res.json({ results: task});
            })
            .catch(err => {
                res.json({errors:err.errors});
            })
    },
    show: (req, res) => {
        Task.findOne({_id: req.params.id})
            .then(task => {
                res.json({results: task});
            })
    },
    update: (req, res) => {
        Task.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true})
            .then(updateUser => {
                res.json({results: updateUser});
            })
            .catch(err => {
                res.json({err: err.errors});
            })
    },
    destroy: (req, res) => {
        Task.remove({_id: req.params.id})
            .then(removeUser => {
                res.json({results: removeUser});
            })
            .catch(err => {
                res.json({err: err.errors});
            })
    }
}