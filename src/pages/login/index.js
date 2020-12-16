import './style.css';
import { useCallback, useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/gatinho_petgato.svg'
import api from "../../services/api";
import { useHistory } from 'react-router-dom';  
const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const history = useHistory();

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        try{
            const { data } = await api.post("/auth/login", {
                email,
                password,
            });

            const token = data.token;

            localStorage.setItem("@PetGato:token", token);

            history.replace('/');
        } catch (e) {
            alert("Houve um erro, tente novamente mais tarde :)");
        }
    }, [email, password, history]);
    return (
        <div className='container-max login'>
            <div className='half screen'>
                <div className='centralizer'>
                    <img src={Logo} alt="PetGato"></img>
                    <form onSubmit={handleSubmit}>
                        <p>Email</p>
                        <input type='email' autoComplete='email' onChange={(e) => setEmail(e.target.value)}></input>
                        <p>Senha</p>
                        <input type='password' onChange={e => setPassword(e.target.value)}></input>
                        <button type="submit"  autoFocus className='button-submit'>ENTRAR</button>
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
