import React, { useState } from 'react'
import "./AddTask.css";


export const AddTask = () => {
    const [taskValue, setTaskValue] = useState("");

    const handleChange = (event) => {
        setTaskValue(event.target.value);
    }

    const handleReset = () => {
        setTaskValue("");
    }

  return (
        <section className="addtask">
            <form>
                <input onChange={handleChange} value={taskValue} type="text" name="task" id="task" placeholder="Task Name" autoComplete="off"/>
                <span onClick={handleReset} className="reset">Reset</span>
                <button type="submit">Add Task</button>
            </form>
            <p>{taskValue}</p>
        </section>
    )
}
