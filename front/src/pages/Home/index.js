// src/pages/Home/index.js
import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { getAllTasks, deleteTask, updateTask} from '../../service/api';
import TaskCard from '../../components/TaskCard';

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function buscarTasks() {
      try {
        const tasksData = await getAllTasks();
        const pendingTasks = tasksData.filter((task) => task.status === 'pendente');
        setTasks(pendingTasks);
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
      }
    }

    buscarTasks(); 
  }, []);

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id); 
      setTasks(tasks.filter((task) => task.id !== id)); 
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error);
    }
  };

  const handleUpdateTask = async () => {
    try {
        const tasksData = await getAllTasks(); 
        const pendingTasks = tasksData.filter((task) => task.status === 'pendente');
        setTasks(pendingTasks); 
    } catch (error) {
        console.error('Erro ao atualizar tarefas:', error);
    }
};

  return (
    <div className="home-container">
      <div className="tasks-header">
        <h1>Minhas Tarefas</h1>
        <Link to="/NewTask" className="new-task-button">Nova</Link>
      </div>
      <div className="tasks-content">
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task) => (
              <TaskCard
              id={task.id}
              title={task.title}
              description={task.description}
              onDelete={handleDeleteTask}
              onUpdate={handleUpdateTask}
            />
            ))}
          </ul>
        ) : (
          <p>Não há tarefas cadastradas.</p>
        )}
      </div>
    </div>
  );
}

export default Home;