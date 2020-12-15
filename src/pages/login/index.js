import './style.css';
import { useCallback, useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/gatinho_petgato.svg'
import api from "../../services/api";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = useCallback(async () => {
        const { data } = await api.post("/auth/login", {
            email,
            password,
        });
        const token = data.token;
        localStorage.setItem("@PetGato:token", token);
    }, [email, password]);

    return (
        <div className='container-max login'>
            <div className='half screen'>
                <div className='centralizer'>
                    <img src={Logo} alt="PetGato"></img>
                    <form>
                        <p>Email</p>
                        <input type='email' autoComplete='email' onChange={(e) => setEmail(e.target.value)}></input>
                        <p>Senha</p>
                        <input type='password' onChange={e => setPassword(e.target.value)}></input>
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
};

export default LoginPage;
