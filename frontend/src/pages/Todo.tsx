import { Paper, Container, Flex } from '@mantine/core';
import { useState } from 'react';
import AddTask from '../components/AddTask';
import ActiveTask from '../components/ActiveTask';

type Props = {}

function Todo({}: Props) {
  const [newTask, setNewTask] = useState<string>("");

  const paperStyle = {
    marginTop: "100px",
    marginBottom: "100px",
    maxWidth: "800px",
    width: "100%",
    '@media (min-width: 800px)': {
      minWidth: "800px",
    }
  };

  return (
    <Flex
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Paper shadow="sm" radius="md" p="xl" style={paperStyle}>
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
    </Flex>
  )
}

export default Todo