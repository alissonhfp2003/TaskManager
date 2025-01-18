//imports
const dotenv = require("dotenv")
const express = require("express");
const mongoose = require('mongoose');

dotenv.config()

const app = express();
app.use(express.json());

//connect to database
mongoose.connect(procces.env.URL_BD);

//Constador do ID
const Counter = mongoose.model('Counter', {
    _id: { type: String, required: true },
    sequenceValue: { type: Number, default: 0 }
});

//Funçao para calcular proximo contador
async function getNextSequenceValue(sequenceName) {
    const sequenceDocument = await Counter.findOneAndUpdate(
        { _id: sequenceName }, 
        { $inc: { sequenceValue: 1 } },
        { new: true, upsert: true }
    );
    return sequenceDocument.sequenceValue;
}

//Tabela
const Task = mongoose.model('Task', {
    id: { type: Number, unique: true },
    title: String,
    description: String,
    status: String
});

//POST
app.post("/", async (req, res) => {
    const nextId = await getNextSequenceValue('taskId');
    const task = new Task({
        id: nextId,
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    });
    await task.save();
    return res.send(task);
});

// GET todas as tarefas
app.get("/", async (req, res) => {
    const tasks = await Task.find();
    return res.send(tasks);
});

// GET tarefa específica pelo id
app.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id); 
    const task = await Task.findOne({ id: id }); 
    return res.send(task);
});

//DELL
app.delete("/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const task = await Task.findOneAndDelete({id: id});
    return res.send(task);
});

//PUT
app.put("/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const task = await Task.findOneAndUpdate({id: id},{
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    },{
        new: true
    });
    return res.send(task);
});

//Retorno ao fazer iniciar server
app.listen(port, () => {
    console.log(`Servidor rodando na porta process.env.porta`)
});