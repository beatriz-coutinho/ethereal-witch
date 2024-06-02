import { AboutUs } from '../../components/AboutUs'
import { GiftsFolder } from '../../components/GiftsFolder'
import './Main.css'

export const Main = () => {
    return (
        <section>
            <GiftsFolder />
            <AboutUs />
        </section>
    )
}