import './AboutUs.css'
import witch from '../../assets/witch.png'
import knight from '../../assets/knight.png'
import { Link } from 'react-router-dom'
import stamp2 from '../../assets/stamp2.png'

export const AboutUs = () => {
    return (
        <section className='about-us-section'>
            <div className='about-us-container'>
                <div className='witch-n-knight'>
                    <div>
                        <Link className='knight' to='/theknight'>
                            <img src={knight} />
                        </Link>
                    </div>
                    <div>
                        <Link className='witch' to='/thewitch'>
                            <img src={witch} />
                        </Link>
                    </div>
                </div>
                <div className='about-us-text'>
                    <h2>About Us</h2>
                    <p>Bem-vindos à nossa lojinha web de <span>bruxaria etérea</span>!</p> 
                    <p>Somos um projeto desenvolvido com muito carinho e dedicação, focado em trazer um pouco de magia e mistério para o mundo digital.</p>
                    <p>Estamos estudando React para aprimorar nossas habilidades e este site é um reflexo do nosso aprendizado. Todas as imagens foram encontradas na internet e não são de nossa autoria. As vendas não são reais, sendo tudo apenas para fins de demonstração e treino.</p>
                    <p>Agradecemos pela visita e esperamos que você aproveite a experiência mágica! Clique nas imagens para mais informações.</p>
                    <p>Abraços mágicos,</p>
                    <div>
                        <p>— The Knight & The Witch</p>
                        <img src={stamp2} />
                    </div>
                </div>
            </div>
        </section>
    )
}