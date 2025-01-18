const Task = require('../models/Task');
const Counter = require('../models/Counter');

async function getNextSequenceValue(sequenceName) {
    const sequenceDocument = await Counter.findOneAndUpdate(
        { _id: sequenceName }, 
        { $inc: { sequenceValue: 1 } },
        { new: true, upsert: true }
    );
    return sequenceDocument.sequenceValue;
}

async function createTask(req, res) {
    try {
        const nextId = await getNextSequenceValue('taskId');
        const task = new Task({
            id: nextId,
            title: req.body.title,
            description: req.body.description,
            status: req.body.status
        });
        await task.save();
        return res.status(201).send(task);
    } catch (error) {
        return res.status(500).send({ error: 'Erro ao criar tarefa' });
    }
}

async function getAllTasks(req, res) {
    try {
        const tasks = await Task.find();
        return res.send(tasks);
    } catch (error) {
        return res.status(500).send({ error: 'Erro ao buscar tarefas' });
    }
}

async function getTaskById(req, res) {
    try {
        const task = await Task.findOne({ id: parseInt(req.params.id) });
        if (!task) return res.status(404).send({ error: 'Tarefa não encontrada' });
        return res.send(task);
    } catch (error) {
        return res.status(500).send({ error: 'Erro ao buscar tarefa' });
    }
}

async function updateTask(req, res) {
    try {
        const task = await Task.findOneAndUpdate(
            { id: parseInt(req.params.id) },
            req.body,
            { new: true }
        );
        if (!task) return res.status(404).send({ error: 'Tarefa não encontrada' });
        return res.send(task);
    } catch (error) {
        return res.status(500).send({ error: 'Erro ao atualizar tarefa' });
    }
}

async function deleteTask(req, res) {
    try {
        const task = await Task.findOneAndDelete({ id: parseInt(req.params.id) });
        if (!task) return res.status(404).send({ error: 'Tarefa não encontrada' });
        return res.send(task);
    } catch (error) {
        return res.status(500).send({ error: 'Erro ao deletar tarefa' });
    }
}

module.exports = { createTask, getAllTasks, getTaskById, updateTask, deleteTask };