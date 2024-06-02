import './HeaderPt2.css'
import instagram from '../../assets/instagram.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

export const HeaderPt2 = () => {
    return (
        <section className='headerpt2-section'>
            <div className='headerpt2-container'>
                <div>
                    <a>
                        <img src={instagram} />
                    </a>
                    <a>
                        <img src={github} />
                    </a>
                    <a>
                        <img src={linkedin} />
                    </a>
                </div>
            </div>
        </section>
    )
}