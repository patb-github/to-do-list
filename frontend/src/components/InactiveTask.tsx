import { useState } from 'react';
import Task from '../types/Task';
import { markTaskById } from '../api/tasksAPI';
import trash from '../assets/trash.svg';

type Props = {
    task: Task,
    setInactiveTasks: React.Dispatch<React.SetStateAction<Task[]>>,
}

function InactiveTask({task}: Props) {

  
  return (
    <div style={{borderTop: "1px solid lightgrey", paddingTop: "10px", paddingBottom: "10px", display: 'flex', alignItems: 'center'}}>
      <img src={trash} alt="trash" style={{width: "20px", height: "20px", marginRight: "10px"}} />
      <p style={{fontSize: "14px", margin: 0, textDecoration: "line-through"}}>{task.description}</p>
    </div>
  )
}

export default InactiveTask