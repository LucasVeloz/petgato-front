import { Container, ContainerLeft, MiniLink, ContainerRight } from './styles';
import Foto from "../../assets/mulhercomdog.jpg";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { AiFillCamera } from 'react-icons/ai';
const Profile = () => {

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
                    <input placeholder='Nome' type='name'></input>
                    <input placeholder='Email' type='email'></input>
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