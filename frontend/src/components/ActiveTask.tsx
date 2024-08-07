import { Checkbox } from '@mantine/core';
import { useState } from 'react';

type Props = {
    task: string,
}

function ActiveTask({task}: Props) {

  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      label={task}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      style={{borderTop: "1px solid lightgrey", paddingTop: "10px", paddingBottom: "10px"}}
    />
  )
}

export default ActiveTask