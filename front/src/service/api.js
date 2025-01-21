import axios from "axios";


const api = axios.create({
baseURL: process.env.REACT_APP_BASE_URL
})

export const getAllTasks = async () => {
    try {
      const response = await api.get('/api/task'); 
      return response.data; 
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
      throw error; 
    }
  };

  export const createTask = async (taskData) => {
    try {
      const response = await api.post('/api/task', taskData);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
      throw error;
    }
  };

  export const deleteTask = async (id) => {
    try {
      const response = await api.delete(`/api/task/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error);
      throw error;
    }
  };

  export const updateTask = async (id, taskData) => {
    try {
      const response = await api.put(`/api/task/${id}`, taskData);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
      throw error;
    }
  };

export default api;