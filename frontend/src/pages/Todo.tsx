import { Paper, Container } from '@mantine/core';
import { useState } from 'react';
import AddTask from '../components/AddTask';
import ActiveTask from '../components/ActiveTask';

type Props = {}

function Todo({}: Props) {
    const [newTask, setNewTask] = useState<string>("");

  return (
    <Paper shadow="sm" radius="md" p="xl" style={{margin: "100px", marginLeft: "300px", marginRight: "300px"}}>
        <Container>
        <h2>To Do List</h2>
        <AddTask newTask={newTask} setNewTask={setNewTask}/>
        
        {/* To Do Tasks */}
        <ActiveTask task="Task 1"/>
        
        <h2>Completed</h2>
        <div>

        </div>
        </Container>
    </Paper>
  )
}

export default Todo