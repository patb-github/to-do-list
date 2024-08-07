import React from 'react'
import { Container, Flex, TextInput, Button } from '@mantine/core';
type Props = {
    newTask: string,
    setNewTask: React.Dispatch<React.SetStateAction<string>>
}

function AddTask({newTask, setNewTask}: Props) {
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
        <Button variant="filled">Add</Button>
    </Flex>
  )
}

export default AddTask