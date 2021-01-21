import {} from './styles';
import Foto from "../../assets/mulhercomdog.jpg";

const Profile = () => {

    return:(

        <Container>
            <ContainerLeft>
                <img src={Foto} alt="autora"></img>
                <MiniLink>
                    <span>Alterar foto de perfil</span>
                </MiniLink>
            </ContainerLeft>
            <ContainerRight>
                
            </ContainerRight>
        </Container>

    );
}

export default Profile;