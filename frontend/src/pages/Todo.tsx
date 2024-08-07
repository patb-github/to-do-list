import { Container } from '@mantine/core';
import { useState } from 'react';
import AddTask from '../components/AddTask';
import ActiveTask from '../components/ActiveTask';

type Props = {}

function Todo({}: Props) {
    const [newTask, setNewTask] = useState<string>("");

  return (
    <Container fluid>
      <h2>To Do List</h2>
      <AddTask newTask={newTask} setNewTask={setNewTask}/>
      
      {/* To Do Tasks */}
      <ActiveTask checked={false} setChecked={() => {}} task="Task 1"/>
      
      <h2>Completed</h2>
      <div>

      </div>
    </Container>
  )
}

export default Todo