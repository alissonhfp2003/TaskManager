import React, { useState, useEffect } from 'react';
import './style.css';
import api from '../../service/api';


function App() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(e){
    e.preventDefault();

    const response = await api.post('api/task', {
      title, 
      description, 
      status: 'pendente'});

  }

  return (
    <div id="app">
      <aside>
        <strong>Nova Tarefa</strong>
        <form onSubmit={handleSubmit}>
          <div className="bloco-id">
            <label>ID</label>
            <input type='text' id='Id' name='Id'  readOnly 
            value={id}  />
          </div>
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
          <button className='cancelar' type='submit'>Cancelar</button>
        </form>
      </aside>
    </div>  
  );
}

export default App;
