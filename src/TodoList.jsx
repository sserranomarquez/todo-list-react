import React from 'react';

const TodoList = () => {
    // Estado con todas las tareas
    // Estado para almacenar el valor actual del input

    // Funcion para añadir tarea al estado
    // Estructura de una tarea { id: Date.now(), text: '', completed: false }
    const addTask = () => {
    };

    // Funcion para eliminar tarea del estado
    const handleDeleteTask = (taskId) => {
    };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={}
        onChange={}
        placeholder="Nueva tarea"
      />
      <button onClick={addTask}>Agregar tarea</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => {
                // Actualizar el estado de la tarea como completada o no completada
              }}
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