import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';
import "./TaskList.css";

export const TaskList = ({info}) => {
    const [tasks,setTasks] = useState([
        {id:5271, name:"Record React", completed: true},
        {id:7825, name:"Edit React", completed: false},
        {id:8391, name:"Watch Lectures", completed: false},

    ]);
    const [show, setShow] = useState(true);                    /* show and hide */

    const styles = {
        color: show ? "#3D8361" : "#be3434",
        border: "2px solid",
        borderColor: show ? "3D8361" : "be3434",
        padding: "20px",
        borderRadius: "5px",
        fontSize: "28px"
    }    

    function handleDelete(id){                                 /* delete task */
        setTasks(tasks.filter(task => task.id !== id));
    }
  
    return (
     <section className='tasklist'>
            <h1 style={styles}>Task List</h1>
            <ul>
                <button className='trigger' onClick={() => setShow(!show)}>{ show ? "Hide" : "Show"}</button>
                { show &&  tasks.map((task) => (
                    <TaskCard key={task.id} info={info} task={task} handleDelete={handleDelete} />
                )) }
            </ul>

            <BoxCard result="success">
                <p className="title">Lorem ipsum dolor sit amet.</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, voluptate!</p>
            </BoxCard>

            <BoxCard result="warning">
                <p className="title">Lorem ipsum dolor sit amet.</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, voluptate!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, saepe!</p>
            </BoxCard>
     </section>
  )
}
