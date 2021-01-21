import { Container, ContainerLeft, MiniLink, ContainerRight } from './styles';
import Foto from "../../assets/mulhercomdog.jpg";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const Profile = () => {

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
                    <input></input>
                    <input></input>
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