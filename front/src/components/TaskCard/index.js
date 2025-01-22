import React, { useState } from "react";
import { BsPen, BsCheck, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateTask } from "../../service/api";
import "./style.css";

function TaskCard({ id, title, description, status, onDelete, onUpdate }) {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false); 
  const [actionType, setActionType] = useState(null);

  const openConfirm = (action) => {
    setActionType(action); 
    setIsConfirmOpen(true); 
  };

  const closeConfirm = () => {
    setIsConfirmOpen(false);  
    setActionType(null);
  };

  const handleDelete = async () => {
    if (actionType === "delete") {
      try {
        await onDelete(id);
        toast.success("Tarefa excluída com sucesso!");
        closeConfirm();
      } catch (error) {
        toast.error("Erro ao excluir tarefa.");
        closeConfirm();
      }
    }
  };

  const handleConcluir = async () => {
    if (actionType === "conclude") {
      try {
        await updateTask(id, { status: "concluído" });
        toast.success("Tarefa concluída com sucesso!");
        onUpdate();
        closeConfirm();
      } catch (error) {
        toast.error("Erro ao concluir tarefa.");
        closeConfirm();
      }
    }
  };

  return (
    <div className="task-card">
      <h5>ID: {id}</h5>
      <h4>{title}</h4>
      <span>{description}</span>
      <div className="task-card-actions">
        <button onClick={() => openConfirm("conclude")}>
          <BsCheck />
          Concluir
        </button>
        <Link to={`/EditTask/${id}`}>
          <BsPen />
          Editar
        </Link>
        <button onClick={() => openConfirm("delete")}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>

      {isConfirmOpen && (
        <div className="confirm-modal">
          <div className="confirm-modal-content">
            <h3>
              {actionType === "delete"
                ? "Tem certeza que deseja excluir esta tarefa?"
                : "Tem certeza que deseja concluir esta tarefa?"}
            </h3>
            <div className="confirm-modal-actions">
              <button onClick={actionType === "delete" ? handleDelete : handleConcluir} className="confirm-button">
                Sim
              </button>
              <button onClick={closeConfirm} className="cancel-button">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskCard;
