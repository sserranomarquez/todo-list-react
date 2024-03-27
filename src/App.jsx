import './App.css';
import TodoList from './TodoList';
import TasksContext from './context/TasksContext';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <TasksContext.Provider value={{tasks, setTasks}}>
      <TodoList />
    </TasksContext.Provider>
  )
}

export default App;
