import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/gatinho_petgato.svg'

const Login = (setEmail, handleSubmit) => {

    return (
        <div className='container-max login'>
            <div className='half screen'>
                <div className='centralizer'>
                    <img src={Logo} alt="PetGato"></img>
                    <form>
                        <p>Email</p>
                        <input type='email' autoComplete='email' onChange={(e) => setEmail(e.target.value)}></input>
                        <p>Senha</p>
                        <input type='password'></input>
                        <button type="button"  autoFocus className='button-submit' onClick={handleSubmit}>ENTRAR</button>
                    </form>
                    <Link to='/forget' className='Link forget'>Esqueci minha senha</Link>
                    <div className='login'>
                        <p className='textLogin'>Ainda não tem conta? </p>
                        <Link to='/register' className='Link'>Crie sua conta</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;