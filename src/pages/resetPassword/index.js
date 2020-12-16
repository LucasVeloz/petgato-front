import { useCallback, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import Logo from "../../assets/gatinho_petgato.svg";

import "./style.css";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        try {
            await api.post("/password/reset", {
                email,
                token,
                password
            });

            alert("Senha alterada com sucesso!");

            history.replace('/');
        } catch (e) {
            alert("Não foi possível alterar a senha, verifique se o e-mail e o token são válidos");
        }
    }, [email, token, password, history]);

    return (
        <div className="container-max forgetScreen">
            <div className="half screen">
                <div className="centralizer">
                    <img src={Logo} alt="PetGato"></img>
                    <form onSubmit={handleSubmit}>
                        <p>Email</p>
                        <input
                            type="email"
                            autoComplete="email"
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <p>Token</p>
                        <input
                            onChange={(e) => setToken(e.target.value)}
                        ></input>
                        <p>Nova senha</p>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        <p className="forgetp">
                            Altere sua senha
                        </p>
                        <button
                            type="submit"
                            autoFocus
                            className="button-submit forget"
                        >
                            ATUALIZAR SENHA
                        </button>
                    </form>
                    <div className="login forget">
                        <p className="textLogin">Lembrou a senha? </p>
                        <Link to="/login" className="Link">
                            {" "}
                            Faça Login
                        </Link>
                    </div>
                    <div className="login forget">
                        <p className="textLogin">Ainda não tem conta? </p>
                        <Link to="/register" className="Link">
                            Crie sua conta
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
