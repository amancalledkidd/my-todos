import './TodoCard.scss';
import Todo from '../../types/Todo';
import bin from '../../assets/images/icons/bin.png';


type TodoCardProps = {
    todo: Todo;
    handleDelete: (todoToDelete: Todo) => void;
    handleCheck: (todoToComplete: Todo) => void;
}

const TodoCard = ({ todo, handleDelete, handleCheck }: TodoCardProps) => {

    let content;
    if (todo.complete) {
        content = <p className='todo-card__todo'><s>{todo.text}</s></p>
    } else {
        content = <p className='todo-card__todo'>{todo.text}</p>
    }

    return (
        <div className='todo-card'>
            <input className='todo-card__checkbox' type="checkbox" checked={todo.complete} onChange={() => handleCheck(todo)} />
            {content}
            <img className='todo-card__delete' src={bin} alt="delete" onClick={() => handleDelete(todo)} />
        </div>
    )

}

export default TodoCard;