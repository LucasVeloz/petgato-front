// import './styles.css';
import Logo from '../../assets/gatinho_petgato_branco.svg';
import { NavLink } from 'react-router-dom';
import { Headerdiv } from './styles';
const Header = () => {

    return (
        <Headerdiv>
            
            <img src={Logo} alt='logo'></img>
            <ul>
                <li>
                    <NavLink exact to='/' className='Link' activeClassName='activeLink'>
                        Página Inicial
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/about' className='Link' activeClassName='activeLink'> 
                        Sobre Nós
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/contact' className='Link' activeClassName='activeLink'>
                        Fale Conosco
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/login' className='Link' activeClassName='activeLink'>
                        Entrar
                    </NavLink>
                </li>
            </ul>
        </Headerdiv>
    );
}

export default Header;