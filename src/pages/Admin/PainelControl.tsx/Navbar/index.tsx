import ladoA from '../../../../assets/ladoA.png'
import ladoB from '../../../../assets/ladoB.png'
import menu from '../../../../assets/menu.png'
import './NavBar.css'

export const NavBar: React.FC = () => {
    return (
        <>
            <header className="container-principal-admin">
                <nav className="navBar-admin">
                    <div className="elementos-admin">
                        <div className='logo-admin'>
                            <img src={ladoA} />
                            <h1>Ethereal Witch</h1>
                            <img src={ladoB} />
                        </div>
                        <div className='menu-hamburger-admin'>
                            <img src={menu} alt="menu-hamburguer" />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}