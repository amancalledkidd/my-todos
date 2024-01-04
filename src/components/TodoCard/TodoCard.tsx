import './TodoCard.scss';
import Todo from '../../types/Todo';
import bin from '../../assets/images/icons/bin.png';


type TodoCardProps = {
    todo: Todo;
}

const TodoCard = ({ todo }: TodoCardProps) => {

    return (
        <div className='todo-card'>
            <input className='todo-card__checkbox' type="checkbox" checked={todo.complete} />
            <p className='todo-card__todo'>{todo.text}</p>
            <img className='todo-card__delete' src={bin} alt="delete" />
        </div>
    )

}

export default TodoCard;