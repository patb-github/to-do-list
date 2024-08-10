import { Button, Flex, TextInput } from '@mantine/core';
import React from 'react';
import Task from '../types/Task';
import { createTask } from '../api/tasksAPI';

type Props = {
    newTask: string,
    setNewTask: React.Dispatch<React.SetStateAction<string>>,
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
}

function AddTask({newTask, setNewTask, setTasks}: Props) {

  async function addTask(): Promise<void> {
    const createdTask: Task = await createTask(newTask);
    setNewTask("");
    setTasks(prev => [createdTask, ...prev]);
  }
  return (
    <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
        <TextInput
            value={newTask}
            onChange={(event) => setNewTask(event.currentTarget.value)}
            placeholder='Add a task'
        />
        <Button variant="filled" onClick={addTask}>Add</Button>
    </Flex>
  )
}

export default AddTask