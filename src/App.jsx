import './App.css';
import ErrorPage from './ErrorPage';
import ErrorTask from './ErrorTask';
import TaskById from './TaskById';
import TodoList from './TodoList';
import TasksContext from './context/TasksContext';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={{tasks, setTasks}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/:taskId" element={<TaskById />} />
          <Route path="/404" element={<ErrorTask />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </TasksContext.Provider>
  )
}

export default App;
