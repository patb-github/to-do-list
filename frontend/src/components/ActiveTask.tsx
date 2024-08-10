import { Checkbox } from '@mantine/core';
import { useState } from 'react';
import Task from '../types/Task';
import { markTaskById } from '../api/tasksAPI';

type Props = {
    task: Task,
    setActiveTasks: React.Dispatch<React.SetStateAction<Task[]>>,
    setInactiveTasks: React.Dispatch<React.SetStateAction<Task[]>>,
}

function ActiveTask({task, setActiveTasks, setInactiveTasks}: Props) {

  const [checked, setChecked] = useState(false);

  async function markTaskAsCompleted(): Promise<void> {
    try {
      const updatedTask: Task = await markTaskById(task.id);
  
      setActiveTasks(prev => prev.filter(t => t.id !== updatedTask.id));
      setInactiveTasks(prev => [updatedTask, ...prev]);
    } catch (error) {
      console.error('Error marking task as completed:', error);
    }
  }

  return (
    <Checkbox
      checked={checked}
      label={task.description}
      onChange={(event) => {setChecked(event.currentTarget.checked); markTaskAsCompleted()}}
      style={{borderTop: "1px solid lightgrey", paddingTop: "10px", paddingBottom: "10px"}}
    />
  )
}

export default ActiveTask