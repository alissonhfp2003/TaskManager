const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

router.post('/api/task', taskController.createTask)
router.get('/api/task', taskController.getAllTasks)
router.get('/api/task/:id', taskController.getTaskById)
router.put('/api/task/:id', taskController.updateTask)
router.delete('/api/task/:id', taskController.deleteTask)

module.exports = router;