import React, { useState } from 'react';
import './style.css';
import { createTask } from '../../service/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function NewTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await createTask({
        title,
        description,
        status: 'pendente',
      });

      toast.success('Tarefa salva com sucesso!');
      navigate('/');
    } catch (error) {
      console.error('Erro ao salvar a tarefa:', error);
      toast.error('Ocorreu um erro ao salvar a tarefa. Tente novamente.');
    }
  }

  async function handleCancel() {
    const confirmCancel = window.confirm('Tem certeza de que deseja cancelar? As alterações não serão salvas.');
    if (confirmCancel) {
      navigate('/');
    }
  }


  return (
    <div id="app">
      <aside>
        <strong>Nova Tarefa</strong>
        <form onSubmit={handleSubmit}>
          <div className='bloco-input'>
            <label htmlFor='Title'>Título da tarefa</label>
            <br />
            <input type='text' id='Title' name='Title' placeholder='Digite o título' 
            required
            value={title}
            onChange={e => setTitle(e.target.value)}/>
          </div>
          <div className='bloco-input'>
            <label htmlFor='Descricao'>Descrição da tarefa</label>
            <br />
            <textarea id='Descricao' name='Descricao' placeholder='Digite a descrição' 
            required
            value={description}
            onChange={e => setDescription(e.target.value)}/>
           </div>
          <button className='salvar' type='submit'>Salvar</button>
          <button className='cancelar' type='button' onClick={handleCancel} >Cancelar</button>
        </form>
      </aside>
    </div>  
  );
}

export default NewTask;