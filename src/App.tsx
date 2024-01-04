import { useState } from 'react'
import Nav from './components/Nav/Nav'
import Input from './components/Input/Input'
import TodoList from './components/TodoList/TodoList'
import Todo from './types/Todo'
import './App.scss'


function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <div className='main-container'>
      <Nav setTodos={setTodos}/>
      <Input placeholder='Add your task here...' setTodos={setTodos} todos={todos}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
