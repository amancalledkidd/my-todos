import './TodoCard.scss';
import Todo from '../../types/Todo';
import bin from '../../assets/images/icons/bin.png';


type TodoCardProps = {
    todo: Todo;
    handleDelete: (todoToDelete: Todo) => void;
    handleCheck: (todoToComplete: Todo) => void;
}

const TodoCard = ({ todo, handleDelete, handleCheck }: TodoCardProps) => {


    return (
        <div className='todo-card'>
            <label className='todo-card__item'>
                <input className='todo-card__item__checkbox' type="checkbox" checked={todo.complete} onChange={() => handleCheck(todo)} />
                <p className='todo-card__item__todo'>{todo.text}</p>
            </label>
            <img className='todo-card__delete' src={bin} alt="delete" onClick={() => handleDelete(todo)} />
        </div>
    )

}

export default TodoCard;