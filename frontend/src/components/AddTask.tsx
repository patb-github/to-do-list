import { Button, Flex, TextInput } from '@mantine/core';
import React from 'react';
import Task from '../types/Task';
import { createTask } from '../api/tasksAPI';

type Props = {
    newTask: string,
    setNewTask: React.Dispatch<React.SetStateAction<string>>
}

function AddTask({newTask, setNewTask}: Props) {

  function addTask(): void {
    console.log("HELLO");
    
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