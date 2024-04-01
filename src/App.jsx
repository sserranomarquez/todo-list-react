import './App.css';
import ErrorPage from './ErrorPage';
import ErrorTask from './ErrorTask';
import TaskById from './TaskById';
import TodoList from './TodoList';
import TasksContext from './context/TasksContext';
import { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={{tasks, setTasks}}>
      {/* <BrowserRouter>
        ....
        Rutas:
        Ruta / debera de redireccionar a todas las tareas como lo estabamos haciendo
        Ruta que permitira obtener el id de la tarea a través de parametros
        Ruta en caso de error

      </BrowserRouter> */}
    </TasksContext.Provider>
  )
}

export default App;
