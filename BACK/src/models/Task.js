const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String,required: true }
});

module.exports = mongoose.model("Task", TaskSchema); 