const express = require('express');
const { body } = require('express-validator');
const {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
} = require('../controllers/taskController');

const router = express.Router();