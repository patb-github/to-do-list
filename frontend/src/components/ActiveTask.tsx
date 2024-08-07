import React from 'react'
import { Checkbox } from '@mantine/core';

type Props = {
    checked: boolean,
    setChecked: React.Dispatch<React.SetStateAction<boolean>>,
    task: string,
}

function ActiveTask({checked, setChecked, task}: Props) {
  return (
    <Checkbox
      checked={checked}
      label={task}
      onChange={(event) => setChecked(event.currentTarget.checked)}
    />
  )
}

export default ActiveTask