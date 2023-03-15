import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';

export const TaskList = ({info}) => {
    const [tasks,setTasks] = useState([
        {id:5271, name:"Record React", completed: true},
        {id:7825, name:"Edit React", completed: false},
        {id:8391, name:"Watch Lectures", completed: false},

    ]);
    const [show, setShow] = useState(true);                    {/* show and hide */}
  
    function handleDelete(id){                                 {/* delete task */}
        setTasks(tasks.filter(task => task.id !== id));
    }
  
    return (
    <>
        <h1>Task List</h1>
        <ul>
            <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
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
    </>
  )
}
