import React, { useState } from 'react'
import "./AddTask.css";


export const AddTask = ({tasks, setTasks}) => {
    const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState(false);

    const handleChange = (event) => {
        setTaskValue(event.target.value);
    }

    const handleReset = () => {
        setTaskValue("");
        setProgress(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskValue,
            completed: Boolean(progress)
        }
        setTasks([...tasks, task]);
        handleReset();
    }

  return (
        <section className="addtask">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={taskValue} type="text" name="task" id="task" placeholder="Task Name" autoComplete="off"/>
                <select onChange={(event) => setProgress(event.target.value)} value={progress}>
                    <option value="false">Pending</option>
                    <option value="true">Completed</option>
                </select>
                <span onClick={handleReset} className="reset">Reset</span>
                <button type="submit">Add Task</button>
            </form>
            <p>{taskValue}</p>
        </section>
    )
}
