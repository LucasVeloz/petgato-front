import { useEffect, useCallback, useState } from 'react';
import { Container, ContainerLeft, MiniLink, ContainerRight } from './styles';
import Foto from "../../assets/mulhercomdog.jpg";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
                    <span>Alterar foto de perfil</span>
                </MiniLink>
            </ContainerLeft>
            <ContainerRight>
                <h2>SUA CONTA</h2>
                <h1>Edite seu perfil</h1>
                <form>
                    <input placeholder="Nome" defaultValue={name}></input>
                    <input placeholder="E-mail" defaultValue={email} disabled></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <button>SALVAR</button>
                </form>
            </ContainerRight>
        </Container>
        <Footer/>
        </>
    );
}

export default Profile;