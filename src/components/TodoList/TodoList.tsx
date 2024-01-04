import './TodoList.scss';
import { Todo } from '../../types/Todo';
import TodoCard from '../TodoCard/TodoCard';

type TodoListProps = {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {

    const handleDelete = (todoToDelete: Todo) => {
        const updatedTodos = todos.filter(todo => todo.id !== todoToDelete.id);
        setTodos(updatedTodos);
    }


    const handleComplete = (todoToComplete: Todo) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === todoToComplete.id) {
                return {
                    ...todo, 
                    complete: !todo.complete, 
                }
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    

    if (!todos.length) {
        return (
            <>
            <p className='todo-list__empty'>No todos yet!</p>
            </>
        )
    }

    return (
        <>
        <div className='todo-list'>
            {todos.map(todo => (
                <TodoCard  handleDelete={handleDelete} handleCheck={handleComplete} key={todo.id} todo={todo} />
            ))}
        </div>
        </>
    )
}

export default TodoList;