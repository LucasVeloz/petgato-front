import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./styles.css";
import { Link } from "react-router-dom";
import img from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";
import Foto from "../../assets/mulhercomdog.jpg";
const Feed = () => {
    return (
        <div className="page">
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
                        </div>
                    </div>
                    <p className="p3">Publicações mais populares:</p>
                    <div className="post">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="ultimopost"></div>
                    <button className="final">
                        <Link to=""></Link>Ver Todas
                    </button>
                </div>
                <div className="posts">
                    <h2>Miau!</h2>
                    <p>
                        Seja Bem-vinda(o) ao blog PetGatô! Confiranosso conteúdo
                        mais recente:
                    </p>
                    <ul>
                        <li>
                            <div className="publica">
                                <img src={img} alt="foto do post"></img>
                                <div className="colContainer">
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
                                    <Link to="/" className="buttonleia">
                                        LEIA MAIS
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="publica">
                                <img src={img2} alt="foto do post"></img>
                                <div className="colContainer">
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
                                    <Link to="/" className="buttonleia">
                                        LEIA MAIS
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="publica">
                                <img src={img} alt="foto do post"></img>

                                <div className="colContainer">
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
                                    <Link to="/" className="buttonleia">
                                        LEIA MAIS
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Feed;
