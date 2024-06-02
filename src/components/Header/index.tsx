import { HeaderPt1 } from '../HeaderPt1'
import { HeaderPt2 } from '../HeaderPt2'
import { HeaderPt3 } from '../HeaderPt3'
import './Header.css'

export const Header = () => {
    return (
        <header>
            <HeaderPt2 />
            <HeaderPt1 />
            <HeaderPt3 />
        </header>
    )
}