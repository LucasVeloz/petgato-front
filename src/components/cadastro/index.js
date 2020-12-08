import './style.css';
import imagem from '../../assets/Cadastro.jpg';
import logo from '../../assets/gatinho_petgato.svg';
import { Link } from 'react-dom';

const Cadastro = () => {

    return (
        <div className='container-max'>
            <div className='half'>
                <img src={imagem}></img>
            </div>
            <div className='half screen'>
                <img src={logo}></img>
                <form>
                    <p>Nome</p>
                    <input></input>
                    <p>Email</p>
                    <input></input>
                    <p>Senha</p>
                    <input type='password'></input>
                    <p>Confirme sua Senha</p>
                    <input type='password'></input>
                    <input type='submit' className='button-submit' value='Cadastrar'></input>
                </form>
                <div className='login'>
                    <p className='textLogin'>Já Possui conta? </p>
                    <a className='Link'> Faça Login</a>
                    {/* <Link to='/'> Faça Login</Link> */}
                </div>
            </div>
        </div>
    );
}

export default Cadastro;