import './GiftsFolder.css'
import bcwg from '../../assets/black-cat-with-glasses.png'
import { PersonalizedButton } from '../PersonalizedButton'

export const GiftsFolder = () => {
    return (
        <section className='gifts-folder-section'>
            <div className='gifts-folder-container'>
                <div>
                    <img src={bcwg} />
                </div>
                <div>
                    <h2>Buy over $200.00</h2>
                    <h3>and get ethereal gifts </h3>
                    <PersonalizedButton color1='#A08B8F' color2='var(--dark-sienna)' />
                </div>
            </div>
        </section>
    )
}