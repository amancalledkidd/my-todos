import './Input.scss';
import Todo from '../../types/Todo';
import plus from '../../assets/images/icons/plus.png';

type InputProps = {
    placeholder: string;
    setTodos: (todos: Todo[]) => void;
}

const Input = ({ placeholder, setTodos }: InputProps) => {


    return (
        <div className='input-container'>
            <input className='input-container__input' placeholder={placeholder} />
            <img className='input-container__button'src={plus} alt="add" />
        </div>



    )
}

export default Input;