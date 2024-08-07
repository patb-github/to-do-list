import { Button, Flex, TextInput } from '@mantine/core';
import React from 'react';
type Props = {
    task: string,
    setNewTask: React.Dispatch<React.SetStateAction<string>>
}

function InactiveTask({task, settask}: Props) {
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
            value={task}
            onChange={(event) => settask(event.currentTarget.value)}
            placeholder='Add a task'
        />
        <Button variant="filled">Add</Button>
    </Flex>
  )
}

export default InactiveTask