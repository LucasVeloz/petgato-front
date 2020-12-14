import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/gatinho_petgato.svg'

const ForgetScreen = (setEmail, handleSubmit) => {

    return (
        <div className='container-max forgetScreen'>
            <div className='half screen'>
                <div className='centralizer'>
                    <img src={Logo} alt="PetGato"></img>
                    <form>
                        <p>Email</p>
                        <input type='email' onChange={(e) => setEmail(e.target.value)}></input>
                        <p className='forgetp'>Insira seu email para recuperar a senha</p>
                        <button type="button" className='button-submit forget' onClick={handleSubmit}>RECUPERAR SENHA</button>
                    </form>
                    <div className='login forget'>
                        <p className='textLogin'>Lembrou a senha? </p>
                        <Link to='/login' className='Link'> Faça Login</Link>
                    </div>
                    <div className='login forget'>
                        <p className='textLogin'>Ainda não tem conta? </p>
                        <Link to='/register' className='Link'>Crie sua conta</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgetScreen;