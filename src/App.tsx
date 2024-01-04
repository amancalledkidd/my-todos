import { useState } from 'react'
import Nav from './components/Nav/Nav'
import Input from './components/Input/Input'
import TodoList from './components/TodoList/TodoList'
import FilterList from './components/FilterList/FilterList'
import { Todo } from './types/Todo'
import './App.scss'


function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filteredList, setFilteredList] = useState<Todo[]>([])

  console.log(filteredList)
  return (
    <div className='main-container'>
      <Nav setTodos={setTodos}/>
      <FilterList todos={todos} setFilteredList={setFilteredList} />
      <Input placeholder='Add your task here...' setTodos={setTodos} todos={todos}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
