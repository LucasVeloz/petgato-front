import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css';
import { Link } from 'react-router-dom';
import img from '../../assets/image1.jpg';
import img2 from '../../assets/image2.jpg';
const Feed = () => {

    return(
        <div className='page'>
            <Header/>
            <div className='container'>
                <div className='auth'>

                </div>
                <div className='posts'>
                    <h2>Miau!</h2>
                    <p>Seja Bem-vinda(o) ao blog PetGatô! Confiranosso conteúdo mais recente:</p>
                    <ul>
                        
                    <li>
                            <div className='publica'>
                                <img src={img} alt='foto do post'></img>
                                <div className='colContainer'>
                                    <h1>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi</h1>
                                    <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
                                    <Link to='/'className='buttonleia'>LEIA MAIS</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='publica'>
                            <img src={img2} alt='foto do post'></img>
                                <div className='colContainer'>
                                    <h1>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi</h1>
                                    <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
                                    <Link to='/'className='buttonleia'>LEIA MAIS</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='publica'>
                            <img src={img} alt='foto do post'></img>

                                <div className='colContainer'>
                                    <h1>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi</h1>
                                    <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
                                    <Link to='/'className='buttonleia'>LEIA MAIS</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Feed;