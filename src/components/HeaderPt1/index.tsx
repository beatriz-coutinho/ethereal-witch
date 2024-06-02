import './HeaderPt1.css'
import ladoA from '../../assets/ladoA.png'
import ladoB from '../../assets/ladoB.png'

export const HeaderPt1 = () => {
    return (
        <section className='headerpt1-section'>
            <img src={ladoA} />
            <h1>Ethereal Witch</h1>
            <img src={ladoB} />
        </section>
    )
}