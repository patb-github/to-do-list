import { Paper, Container, Flex } from '@mantine/core';
import { useEffect, useState } from 'react';
import AddTask from '../components/AddTask';
import ActiveTask from '../components/ActiveTask';
import { getAllTasks } from '../api/tasksAPI';
import Task from '../types/Task';

type Props = {}

function Todo({}: Props) {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const paperStyle = {
    marginTop: "100px",
    marginBottom: "100px",
    maxWidth: "800px",
    width: "100%",
    '@media (min-width: 800px)': {
      minWidth: "800px",
    }
  };

  useEffect(() => {
    async function fetchTasks() {
      try {
        const tasks = await getAllTasks();

        // If createdAt is a string, convert it to Date
        const tasksWithDate = tasks.map(task => ({
          ...task,
          createdAt: new Date(task.createdAt) // Ensure createdAt is a Date object
        }));

        tasksWithDate.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        
        setTasks(tasksWithDate);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

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
        <AddTask newTask={newTask} setNewTask={setNewTask} setTasks={setTasks}/>
        
        {/* To Do Tasks */}
        {tasks.map((task) => (
          <ActiveTask key={task.id} task={task.description} />
        ))}
        
        <h2>Completed</h2>
        <div>

        </div>
        </Container>
      </Paper>
    </Flex>
  )
}

export default Todo