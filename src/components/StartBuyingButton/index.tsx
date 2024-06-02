import './StartBuyingButton.css'
import sparkles from '../../assets/sparkles.png'

interface StartBuyingButtonProps {
    color1: string,
    color2: string
}

export const StartBuyingButton = ({ color1, color2 }:StartBuyingButtonProps) => {
    return (
        <button className='start-buying-button' style={{background: `linear-gradient(45deg, ${color1}, ${color2})`}}>
            <img src={sparkles} />
            <p>Start Buying</p>
            <img src={sparkles} />
        </button>
    )
}