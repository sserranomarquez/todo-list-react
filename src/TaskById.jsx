import React, { useContext, useEffect, useState } from 'react'
import TasksContext from './context/TasksContext';
// import { useNavigate, useParams } from 'react-router-dom';

const TaskById = () => {
    const { tasks } = useContext(TasksContext);
    const [task, setTask] = useState(null);

    // Obtener del parametro el id de la tarea

    // Verificar en el contexto si la tarea existe y guardarla en el estado task o si no redireccionar al usuario a una página de error.

    return (
        <div>
            {task && 
                <>
                    <h1>Task</h1>
                    <p>ID: {task.id}</p>
                    <p>Description: {task.text}</p>
                    <p>Is Completed? {task.completed ? 'Completed': 'Pending'}</p>
                </>
            }
        </div>
    )
}

export default TaskById