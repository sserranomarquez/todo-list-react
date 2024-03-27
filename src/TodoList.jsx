import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addItem, deleteItem, completedItem } from './store/actions/actions';
import { addItem, deleteItem, completeItem } from './features/tasks/tasksSlice';


const TodoList = () => {
  const items = useSelector(state => state.tasks.items);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addItem({ id: Date.now(), text: newTask, completed: false }));
      setNewTask('');
    }
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteItem(taskId))
  };

  const handleToggleTask = (taskId) => {
    dispatch(completeItem(taskId))
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={addTask}>Agregar tarea</button>
      <ul>
        {items.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;