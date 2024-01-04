import './Nav.scss';
import Button from '../Button/Button';
import Todo from '../../types/Todo';

type NavProps = {
    setTodos: (todos: Todo[])  => void;
}


const Nav = ({ setTodos }: NavProps) => {

    const handleReset = () => {
        setTodos([])
    }

    return (
        <nav className='nav'>
            <h1>My Todos</h1>
            <Button label='Reset' onClick={handleReset} />
        </nav>
    )
}

export default Nav;