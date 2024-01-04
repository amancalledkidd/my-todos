import { useState } from 'react'
import Nav from './components/Nav/Nav'
import Input from './components/Input/Input'
import Todo from './types/Todo'


function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <>
      <Nav setTodos={setTodos}/>
      <Input placeholder='Add your task here...' setTodos={setTodos}/>
    </>
  )
}

export default App
