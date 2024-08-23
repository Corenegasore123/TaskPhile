import React, { useState, useContext, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = ({ onTaskCompletion }) => {
  const { addTask, clearList, editItem, editTasks } = useContext(TaskListContext);
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editItem === null) {
      addTask(title);
      onTaskCompletion("Task added successfully!");
      setTitle("");
    } else {
      editTasks(title, editItem.id);
      onTaskCompletion("Task updated successfully!");
    }
  };

  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        onChange={handleChange}
        value={title}
        className="task-input"
        placeholder="Add-task..."
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? "Edit Task" : "Add Task"}
        </button>
        <button
          type="button"
          className="btn clear-btn"
          onClick={clearList}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
