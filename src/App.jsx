import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskListContextProvider from "./context/TaskListContext";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import CompletedTasks from "./components/CompletedTasks";
import Notification from "./components/Notification";

function App() {
  const [notification, setNotification] = useState(null);

  const handleNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 2500);
  };

  return (
    <TaskListContextProvider>
      <Router>
        <div className="container">
          <div className="app-wrapper">
            <Header />
            <div className="main">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <TaskForm onTaskCompletion={handleNotification} />
                      <TaskList onTaskCompletion={handleNotification} />
                    </>
                  }
                />
                <Route
                  path="/completed"
                  element={
                    <CompletedTasks onTaskCompletion={handleNotification} />
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
    </TaskListContextProvider>
  );
}

export default App;
