import React, { useState, useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Modal from './Modal';

const Tasks = ({ task, onTaskCompletion }) => {
  const { removeTask, findItem, toggleCompletion } = useContext(TaskListContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    removeTask(task.id);
    onTaskCompletion("Task deleted successfully!"); // Notification on delete
    setIsModalOpen(false);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };

  const handleCompletion = () => {
    toggleCompletion(task.id);
    if (!task.isCompleted) {
      onTaskCompletion("Task completed successfully!"); // Notification on completion
    } else {
      onTaskCompletion("Task reopened!"); // Notification on reopening
    }
  };

  return (
    <>
      <li className="list-item">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={handleCompletion}
          className="task-checkbox"
        />
        <span className={task.isCompleted ? 'completed' : ''}>
          {task.title}
        </span>
        <div>
          {task.isCompleted ? (
            <button
              className="btn-reopen task-btn"
              onClick={() => handleCompletion()}
            >
              Reopen
            </button>
          ) : (
            <>
              <button className="btn-delete task-btn" onClick={handleDelete}>
                <i className="fas fa-trash-alt"></i>
              </button>
              <button
                className="btn-edit task-btn"
                onClick={() => findItem(task.id)}
              >
                <i className="fas fa-pen"></i>
              </button>
            </>
          )}
        </div>
      </li>
      <Modal
        isOpen={isModalOpen}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
      />
    </>
  );
};

export default Tasks;
