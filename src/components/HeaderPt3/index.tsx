import { useEffect, useState } from 'react'
import './HeaderPt3.css'
import menu from '../../assets/menu.png'
import { Link } from 'react-router-dom'

export const HeaderPt3 = () => {

    const listaMenu = [
        {
            titulo: 'Início',
            caminho: '/'
        },
        {
            titulo: 'Velas',
            caminho: '/velas'
        },
        {
            titulo: 'Coleções',
            caminho: '/colecoes'
        },
        {
            titulo: 'Cristais',
            caminho: '/cristais'
        },
        {
            titulo: 'Tarot',
            caminho: '/tarot'
        },
        {
            titulo: 'Acessórios',
            caminho: '/acessorios'
        }
    ]

    const [largura, setLargura] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [clicado, setClicado] = useState(0)

    const larguraAtual = () => {
        setLargura(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', larguraAtual)
        console.log(largura)
        return () => window.removeEventListener('resize', larguraAtual)
    }, [largura])

    

    return (
        <section className='headerpt3-section'>
            <nav className='headerpt3-container'>
                {
                    largura < 768 && (
                        <div className='headerpt3-menu'>
                            <img src={menu} onClick={() => isOpen === false ? setIsOpen(true) : setIsOpen(false)} />
                            {
                                isOpen && (
                                    <ul className='headerpt3-menu-lista'>
                                        {
                                            listaMenu.map((item, indice) => <Link className='lista-menu' to={item.caminho} key={indice}>
                                                <li>{item.titulo}</li>
                                            </Link>)
                                        }
                                    </ul>
                                )
                            }
                        </div>
                    )
                }
                {
                    largura >= 768 && (
                        <ul className='tela-normal-menu'>
                            {
                                listaMenu.map((item, indice) => <Link className={clicado === indice ? 'tela-normal-clicado tela-normal-link' : 'tela-normal-link'} to={item.caminho} key={indice}>
                                    <li onClick={() => setClicado(indice)}>{item.titulo}</li>
                                </Link>)
                            }
                        </ul>
                    )
                }
            </nav>
        </section>
    )
}