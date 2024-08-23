import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Tasks from "./Tasks";

const TaskList = ({ onTaskCompletion }) => {
  const { tasks } = useContext(TaskListContext);

  const pendingTasks = tasks.filter(task => !task.isCompleted);

  return (
    <div>
      <h2 className="pending-title">Pending Tasks</h2>
      {pendingTasks.length > 0 ? (
        <ul className="list">
          {pendingTasks.map((task) => (
            <Tasks
              key={task.id}
              task={task}
              onTaskCompletion={onTaskCompletion}
            />
          ))}
        </ul>
      ) : (
        <div className="no-tasks">No pending tasks available! Please add a task☝️</div>
      )}
    </div>
  );
};

export default TaskList;
