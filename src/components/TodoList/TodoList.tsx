import './TodoList.scss';
import Todo from '../../types/Todo';
import TodoCard from '../TodoCard/TodoCard';

type TodoListProps = {
    todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
    return (
        <>
        <div className='todo-list'>
            {todos.map(todo => (
                <TodoCard key={todo.id} todo={todo} />
            ))}
        </div>
        </>
    )
}

export default TodoList;