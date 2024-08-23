import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Tasks from "./Tasks";

const CompletedTasks = ({ onTaskCompletion }) => {
  const { tasks } = useContext(TaskListContext);

  const completedTasks = tasks.filter(task => task.isCompleted);

  return (
    <div>
      <h2 className="completed-title">Completed Tasks</h2>
      {completedTasks.length > 0 ? (
        <ul className="list">
          {completedTasks.map((task) => (
            <Tasks key={task.id} task={task} onTaskCompletion={onTaskCompletion} />
          ))}
        </ul>
      ) : (
        <div className="no-tasks">No completed tasks available.</div>
      )}
    </div>
  );
};

export default CompletedTasks;
