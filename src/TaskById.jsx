import React, { useContext, useEffect, useState } from 'react'
import TasksContext from './context/TasksContext';
import { useNavigate, useParams } from 'react-router-dom';

const TaskById = () => {
    const { tasks } = useContext(TasksContext);
    const [task, setTask] = useState(null);
    let { taskId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const taskObject = tasks.find(task => task.id == taskId);
        if (taskObject != null) {
            setTask(taskObject)
        } else {
            navigate('/404');
        }
    }, [])

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