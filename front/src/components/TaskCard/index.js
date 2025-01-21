import React from "react";
import {BsPen, BsCheck  , BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom";
import './style.css';

function TaskCard({ id, title, description, status, onDelete }) {

    
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

    return (
        <div className="task-card">
            <h5>ID: {id}</h5>
            <h4>{title}</h4>
            <span>{description}</span>
            <div className="task-card-actions">
                <button>
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

