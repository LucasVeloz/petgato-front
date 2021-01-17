import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import "./styles.css";
import { Page, Tags } from './styles';
import { Link } from "react-router-dom";
import img from "../../assets/image1.jpg";
import Foto from "../../assets/mulhercomdog.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdChatBubbleOutline } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';

const Feed = () => {
    return (
        <Page>
            <Header />
            <div className="container">
                <div className="geral">
                    <input type="search" className="pesquisa"></input>
                    <div className="caixa-autora">
                        <img src={Foto} alt="autora"></img>
                        <div className="autora">
                            <p className="p1">SOBRE A AUTORA</p>
                            <p className="p2">Cíntia Lorenzzo</p>
                            <span>
                                Sou veterinária há 5 anos, apaixonada pelo mundo
                                animal, principalmenteos que estão conosco no
                                dia a dia. Quando não estou no meu consultório
                                ou com meu pets, estou aqui escrevendo conteúdo
                                para vocês. Espero que você goste;
                            </span>
                            <div className='icons'>
                                <FontAwesomeIcon icon={faFacebookSquare} className='icon' size='2x' />
                                <FontAwesomeIcon icon={faInstagramSquare} className='icon' size='2x' />
                                <FontAwesomeIcon icon={faTwitterSquare} className='icon' size='2x' />
                            </div>
                        </div>
                    </div>
                    <p className="p3">Publicações mais populares:</p>
                    <div className="post">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="ultimopost"></div>
                    <Link to="/" className='final'>VER TODAS</Link>
                </div>
                <div className="posts">
                    <h2>Miau!</h2>
                    <p>
                        Seja Bem-vinda(o) ao blog PetGatô! Confira nosso conteúdo
                        mais recente:
                    </p>
                    <ul>
                        <li>
                            <div className="publica">
                                <img src={img} alt="foto do post"></img>
                                <div className="colContainer">
                                    <Tags>
                                        <h4>Tags:</h4>
                                        <p className='tag'>Cuidados</p>
                                        <p className='tag'>Cães & Gatos</p>
                                        <p className='tag'>Guias</p>
                                    </Tags>
                                    <h1>
                                        Morbi in sem quis dui placerat ornare.
                                        Pellentesque odio nisi
                                    </h1>
                                    <p>
                                        Morbi in sem quis dui placerat ornare.
                                        Pellentesque odio nisi, euismod in,
                                        pharetra a, ultricies in, diam. Sed
                                        arcu. Cras consequat.
                                    </p>
                                    <div className='row'>
                                        <Link to="/" className="buttonleia">
                                            LEIA MAIS
                                        </Link>
                                        <AiOutlineHeart className='heart' size='2em' />
                                        <MdChatBubbleOutline size='2em' color='#707070'/>
                                        <AiOutlineEye size='2em' color='#707070' />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <Link to='/' className='buttonPreview'>
                        PUBLICAÇÕES ANTERIORES
                    </Link>
                </div>
            </div>
            <Footer />
        </Page>
    );
};

export default Feed;
