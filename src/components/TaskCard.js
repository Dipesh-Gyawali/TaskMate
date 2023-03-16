import "./TaskCard.css"; 

export const TaskCard = ({task, handleDelete, info}) => {
  return (
    <div className="taskcard">
        <li key={task.id} className={`${task.completed ? "completed" : "incomplete"}`}>      {/* ternary operator : */}
            <span>{task.id}-{task.name}- {info}</span>
            <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
        </li>
    </div>
  )
}
