import { deleteTaskById } from '../api/tasksAPI';
import trash from '../assets/trash.svg';
import Task from '../types/Task';

type Props = {
    task: Task,
    setInactiveTasks: React.Dispatch<React.SetStateAction<Task[]>>,
}

function InactiveTask({task, setInactiveTasks}: Props) {
  
  async function deleteTask(): Promise<void> {
    try {
      deleteTaskById(task.id);
      setInactiveTasks(prev => prev.filter(t => t.id !== task.id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }
  return (
    <div style={{borderTop: "1px solid lightgrey", paddingTop: "10px", paddingBottom: "10px", display: 'flex', alignItems: 'center'}}>
      <img 
        src={trash} 
        alt="trash"
        style={{width: "20px", height: "20px", marginRight: "10px"}} 
        onClick={deleteTask}
      />
      <p style={{fontSize: "14px", margin: 0, textDecoration: "line-through"}}>{task.description}</p>
    </div>
  )
}

export default InactiveTask