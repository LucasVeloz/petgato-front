import './styles.css';
import Logo from '../../assets/gatinho_petgato_branco.svg';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='header'>
            
            <img src={Logo} alt='logo'></img>
            <ul>
                <li>
                    <Link to='/' className='Link'>
                        Página Inicial
                    </Link>
                </li>
                <li>
                    <Link to='/' className='Link'> 
                        Sobre Nós
                    </Link>
                </li>
                <li>
                    <Link to='/' className='Link'>
                        Fale Conosco
                    </Link>
                </li>
                <li>
                    <Link to='/login' className='Link'>
                        Entrar
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;