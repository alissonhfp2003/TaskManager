import React from "react";
import {BsPen, BsCheck  , BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom";
import './style.css';
import { updateTask } from "../../service/api";


function TaskCard({ id, title, description, status, onDelete, onUpdate }) {

    
    const handleDelete = async () => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir esta tarefa?');
        if (confirmDelete) {
            try {
                await onDelete(id); 
                alert('Tarefa excluída com sucesso!');
            } catch (error) {
                alert('Erro ao excluir tarefa.');
            }
        }
    };

    const handleConcluir = async() => {
        const confirmConcluir = window.confirm('Tem certeza que deseja concluir esta tarefa');
        if (confirmConcluir) {
            try{
                await updateTask(id, { status: 'concluído' });
                alert('Tarefa concluida!');
                onUpdate();
            }  catch (error) {
                alert('Erro ao excluir tarefa.');
            }
    }
};

    return (
        <div className="task-card">
            <h5>ID: {id}</h5>
            <h4>{title}</h4>
            <span>{description}</span>
            <div className="task-card-actions">
                <button onClick={handleConcluir}>
                    <BsCheck/>Concluir
                </button>
                <Link to={`/EditTask/${id}`}>
                    <BsPen/>Editar
                </Link>
            
                <button onClick={handleDelete}>
                    <BsFillTrashFill/>Ecluir
                </button>
            </div>
        </div>
    );
}

export default TaskCard;

