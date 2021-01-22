import { useEffect, useCallback, useState } from 'react';
import { Container, ContainerLeft, MiniLink, ContainerRight } from './styles';
import Foto from "../../assets/mulhercomdog.jpg";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { AiFillCamera } from 'react-icons/ai';
import api from '../../services/api';
const Profile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleUserInfo = useCallback(async (id, token) => {
        const response = await api.get(`/users/${id}`, {
            headers: {
                "Authorization": token,
            },
        });

        setEmail(response.data.email);
        setName(response.data.name);
    }, [])

    useEffect(() => {
        const userId = localStorage.getItem("@PetGato:id");
        const token = localStorage.getItem("@PetGato:token");

        try {
            handleUserInfo(userId, token);
        } catch (error) {
            console.log(error);
        }
    }, [handleUserInfo]);

    return (
        <>
        <Header/>
        <Container>
            <ContainerLeft>
                <img src={Foto} alt="autora"></img>
                <MiniLink>
                    <AiFillCamera size='20'/>
                    <span>Alterar foto de perfil</span>
                </MiniLink>
            </ContainerLeft>
            <ContainerRight>
                <h2>SUA CONTA</h2>
                <h1>Edite seu perfil</h1>
                <form>
                    <input type='name' defaultValue={name}></input>
                    <input type='email' defaultValue={email} disabled></input>
                    <input placeholder='Nova senha' type='password'></input>
                    <input placeholder='Confirme sua senha' type='password'></input>
                    <input placeholder='Senha atual' type='password'></input>
                    <button>SALVAR</button>
                </form>
            </ContainerRight>
        </Container>
        <Footer/>
        </>
    );
}

export default Profile;