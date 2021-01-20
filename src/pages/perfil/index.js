import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import profileImage from '../../assets/mulhercomdog.jpg';

const Perfil = () => {
    return (
        <div id="container">
          <Header />
          <main id="content">
            <div id="profile-image">
              <img src={profileImage} alt="Foto de Perfil"/>
              <p>Alterar foto de perfil</p>
            </div>
            <div id="form">
              <h2>Sua conta</h2>
              <h1>Edite seu perfil</h1>
              <div class="inputs-container">
                <input type="text"/>
                <input type="text" disabled/>
              </div>
              <div class="inputs-container">
                <input type="text"/>
                <input type="text"/>
              </div>
              <input type="text"/>
              <button>SALVAR</button>
            </div>
          </main>
          <Footer />
        </div>
    );
};

export default Perfil;
