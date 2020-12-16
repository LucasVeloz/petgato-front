import { useCallback, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Logo from "../../assets/gatinho_petgato.svg";

import api from "../../services/api";

import "./style.css";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");

    const history = useHistory();

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        try {
            await api.post("/password/forgot", {
                email,
            });

            alert("Um e-mail de recuperação de senha foi enviado para o usuário informado.");

            setEmail("");

            history.push('/password/reset');
        } catch (e) {
            alert("Não foi possível enviar o e-mail de recuperação para o usuário informado. Por favor, confira os dados e tente novamente.");
        }
    }, [email, history]);

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
                        <p className="forgetp">
                            Insira seu email para recuperar a senha
                        </p>
                        <button
                            type="submit"
                            autoFocus
                            className="button-submit forget"
                        >
                            RECUPERAR SENHA
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

export default ForgetPassword;
