// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import Todo from './pages/Todo';

function App() {

  return (
    <MantineProvider>
      <Todo />
      {/* <ToDoList /> */}
    </MantineProvider>
  )
}

export default App