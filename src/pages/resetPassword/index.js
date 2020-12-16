import "./styles.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/gatinho_petgato.svg";
import { useCallback, useState } from "react";
import api from "../../services/api";
const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = useCallback(async () => {
        await api.post("/password/reset", {
            email,
            token,
            password
        });
    }, [email, token, password]);

    return (
        <div className="container-max forgetScreen">
            <div className="half screen">
                <div className="centralizer">
                    <Link to='/' className='linklogo'>
                        <img src={Logo} alt="PetGato"></img>
                    </Link>
                    <form>
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
                            type="button"
                            autoFocus
                            className="button-submit forget"
                            onClick={handleSubmit}
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
