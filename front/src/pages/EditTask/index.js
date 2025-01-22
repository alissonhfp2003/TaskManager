import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllTasks, updateTask } from '../../service/api'; 
import './style.css';



function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    async function fetchTask() {
      try {
        const tasks = await getAllTasks();
        const task = tasks.find((task) => task.id === parseInt(id));

        if (task) {
          setTitle(task.title);
          setDescription(task.description);
        } else {
          alert('Tarefa não encontrada.');
          navigate('/'); 
        }
      } catch (error) {
        console.error('Erro ao carregar tarefa:', error);
      } 
      
    }

    fetchTask();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTask(id, { title, description }); 
      alert('Tarefa atualizada com sucesso!');
      navigate('/'); 
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
      alert('Erro ao atualizar a tarefa.');
    }
  };


  return (
    <div id="edit-task">
      <aside>
        <strong>Editar Tarefa</strong>
        <form onSubmit={handleSubmit}>
          <div className="bloco-id">
            <label>ID</label>
            <input type="text" id="Id" name="Id" readOnly value={id} />
          </div>
          <div className="bloco-input">
            <label htmlFor="Title">Título da tarefa</label>
            <br />
            <input
              type="text"
              id="Title"
              name="Title"
              placeholder="Digite o título"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="bloco-input">
            <label htmlFor="Descricao">Descrição da tarefa</label>
            <br />
            <textarea
              id="Descricao"
              name="Descricao"
              placeholder="Digite a descrição"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="salvar" type="submit">
            Salvar
          </button>
          <button
            className="cancelar"
            type="button"
            onClick={() => navigate('/')}
          >
            Cancelar
          </button>
        </form>
      </aside>
    </div>
  );
}

export default EditTask;