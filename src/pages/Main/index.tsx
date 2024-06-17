import { AboutUs } from '../../components/AboutUs'
import { GiftsFolder } from '../../components/GiftsFolder'
import { Header } from '../../components/Header'
import './Main.css'

export const Main = () => {
    return (
        <section>
            <Header />
            <GiftsFolder />
            <AboutUs />
        </section>
    )
}