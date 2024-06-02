import './GiftsFolder.css'
import bcwg from '../../assets/black-cat-with-glasses.png'
import { StartBuyingButton } from '../StartBuyingButton'

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
                    <StartBuyingButton color1='#B699D8' color2='#5F5AD4' />
                </div>
            </div>
        </section>
    )
}