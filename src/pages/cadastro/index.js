import { useState, useCallback } from 'react';
import { Link } from 'react-dom';

import imagem from '../../assets/Cadastro.jpg';
import logo from '../../assets/gatinho_petgato.svg';

import './style.css';

import api from '../../services/api';

const Cadastro = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = useCallback(async () => {
        await api.post('/users', {
            name,
            email,
        });
    }, [name, email]);

    return (
        <div className='container-max'>
            <div className='half'>
                <img src={imagem}></img>
            </div>
            <div className='half screen'>
                <div className='centralizer'>
                    <img src={logo}></img>
                    <form>
                        <p>Nome</p>
                        <input onChange={(e) => setName(e)}></input>
                        <p>Email</p>
                        <input type='email' onClick={(e) => setEmail(e)}></input>
                        <p>Senha</p>
                        <input type='password'></input>
                        <p>Confirme sua Senha</p>
                        <input type='password'></input>
                        <input type="submit" className='button-submit' value='CADASTRAR' onClick={handleSubmit}></input>
                    </form>
                    <div className='login'>
                        <p className='textLogin'>Já possui conta? </p>
                        {/* <Link to='/' className='Link'>Faça Login</Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;