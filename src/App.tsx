import { useState } from 'react'
import Nav from './components/Nav/Nav'
import Todo from './types/Todo'


function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <>
      <Nav setTodos={setTodos}/>
    </>
  )
}

export default App
