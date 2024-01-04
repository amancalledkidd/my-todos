import './Input.scss';
import { useState, FormEvent } from 'react';
import Todo from '../../types/Todo';
import plus from '../../assets/images/icons/plus.png';

type InputProps = {
    placeholder: string;
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
}

const Input = ({ placeholder, todos, setTodos }: InputProps) => {
    const [input, setInput] = useState<string>('')
    
    const handleInput = (event: FormEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value)
    }

    const handleAdd = () => {
        if (!input) {
            alert('Please enter a todo')
            return
        }

        let todoId;
        if (todos.length > 0 ) {
            const lastTodo = todos[todos.length - 1]
            todoId = lastTodo.id + 1
        } else {
            todoId = 1
        }


        const newTodo: Todo = {
            id: todoId,
            text: input,
            complete: false
        }
        const newTodos = [...todos, newTodo]

        setTodos(newTodos)
        setInput('')
        console.log(input)
    }

    return (
        <div className='input-container'>
            <input className='input-container__input' placeholder={placeholder} value={input} onChange={handleInput} />
            <img className='input-container__button'src={plus} alt="add" onClick={handleAdd} />
        </div>



    )
}

export default Input;