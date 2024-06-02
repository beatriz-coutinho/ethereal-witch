import './PersonalizedButton.css';
import sparkles from '../../assets/sparkles.png';

interface PersonalizedButtonProps {
    color1: string;
    color2: string;
}

export const PersonalizedButton = ({ color1, color2 }: PersonalizedButtonProps) => {
    const gradientStyle = {
        background: `linear-gradient(45deg, ${color1}, ${color2})`,
        backgroundSize: '200% 200%',
        animation: 'movement 3s ease-in-out infinite'
    };

    return (
        <button className="start-buying-button" style={gradientStyle}>
            <img src={sparkles} alt="Sparkles" />
            <p>Start Buying</p>
            <img src={sparkles} alt="Sparkles" />
        </button>
    );
};
