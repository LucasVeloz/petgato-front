import { useState, useCallback } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import logo from '../../assets/gatinho_petgato.svg';
import { useHistory } from 'react-router-dom';
// import './styles.css';
import { ContainerMax } from './styles';

const Cadastro = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const history = useHistory();

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        try {
            await api.post('/users', {
                name,
                email,
                password,
                password_confirmation: passwordConfirmation,
            });

            alert("Usuário cadastrado com sucesso!");

            history.replace('/');
        } catch (e) {
            alert("Houve um erro ao cadastrar, por favor tente novamente mais tarde.");
        }
    }, [name, email, password, passwordConfirmation, history]);

    return (
        <ContainerMax>
            <div className='half screen'>
                <div className='centralizer'>
                    <Link to='/' className='linklogo'>
                        <img src={logo} alt="PetGato"></img>
                    </Link>
                    <form onSubmit={handleSubmit}>
                        <p>Nome</p>
                        <input autoComplete="name" required onChange={(e) => setName(e.target.value)}></input>
                        <p>Email</p>
                        <input autoComplete="email" required type='email' onChange={(e) => setEmail(e.target.value)}></input>
                        <p>Senha</p>
                        <input type='password' required onChange={(e) => setPassword(e.target.value)}></input>
                        <p>Confirme sua Senha</p>
                        <input type='password' required onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
                        <button autoFocus type="submit" className='button-submit'>CADASTRAR</button>
                    </form>
                    <div className='login'>
                        <p className='textLogin'>Já possui conta? </p>
                        <Link to='/login' className='Link'>Faça Login</Link>
                    </div>
                </div>
            </div>
        </ContainerMax>
    );
}
export default Cadastro;