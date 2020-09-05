const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A task must have a title"]
    },
    description: {
        type: String,
        required: [true, "A task must have description"]
    },
    completed: {
        type: Boolean,
        require: [true, "You need this"],
        default: false
    }
}, {timestamps: true});

mongoose.model("Task", TaskSchema);