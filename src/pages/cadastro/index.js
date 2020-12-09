import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

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
                <img src={imagem} alt="gatinho"></img>
            </div>
            <div className='half screen'>
                <div className='centralizer'>
                    <img src={logo} alt="PetGato"></img>
                    <form>
                        <p>Nome</p>
                        <input onChange={(e) => setName(e.target.value)}></input>
                        <p>Email</p>
                        <input type='email' onChange={(e) => setEmail(e.target.value)}></input>
                        <p>Senha</p>
                        <input type='password'></input>
                        <p>Confirme sua Senha</p>
                        <input type='password'></input>
                        <button type="button" className='button-submit' value='CADASTRAR' onClick={handleSubmit}></button>
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