
import { useEffect, useState } from 'react'
import './HeaderPt2.css'
import menu from '../../assets/menu.png'
import { Link } from 'react-router-dom'

export const HeaderPt2 = () => {

    const listaMenu = [
        {
            titulo: 'Main',
            caminho: '/'
        },
        {
            titulo: 'About Us',
            caminho: '',
            sub: [
                {
                    tit: 'The Knight',
                    cam: '/theknight'
                },
                {
                    tit: 'The Witch',
                    cam: '/thewitch'
                }
            ]
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

    const [largura, setLargura] = useState(window.innerWidth)
    const [isOpen, setIsOpen] = useState(false)
    const [clicado, setClicado] = useState(0)
    const [showSubMenu, setShowSubMenu] = useState(false)

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
                    largura < 1140 && (
                        <div className='headerpt3-menu'>
                            <img src={menu} onClick={() => isOpen === false ? setIsOpen(true) : setIsOpen(false)} />
                            {
                                isOpen && (
                                    <ul className='headerpt3-menu-lista'>
                                        {
                                            listaMenu.map((item, indice) => {
                                                return <Link
                                                    className={indice === clicado ? 'lista-menu lista-menu-clicado' : 'lista-menu'}
                                                    to={item.caminho}
                                                    key={indice}
                                                >
                                                    <li
                                                        onClick={() => {
                                                            if (item.titulo === 'About Us') {
                                                                setShowSubMenu(!showSubMenu)
                                                            } else {
                                                                setClicado(indice)
                                                            }
                                                        }}
                                                    >
                                                        {item.titulo}
                                                        {
                                                            item.sub && showSubMenu && (
                                                                <ul className='about-us-sublista'>
                                                                    {
                                                                        item.sub.map((item, indice) => {
                                                                            return (
                                                                                <Link className='sublista-link' to={item.cam} key={indice}>
                                                                                    <li>{item.tit}</li>
                                                                                </Link>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            )
                                                        }
                                                    </li>
                                                </Link>
                                            })
                                        }
                                    </ul>
                                )
                            }
                        </div>
                    )
                }
                {
                    largura >= 1140 && (
                        <div className='big-container'>
                            <ul className='headerpt3-big-menu'>
                                {
                                    listaMenu.map((item, index) => {
                                        return <Link
                                        className='headerpt3-big-lista'
                                         to={item.caminho} >
                                            <li 
                                            onClick={() => setClicado(index)}
                                            key={index} >
                                                {item.titulo}
                                            </li>
                                        </Link>
                                    })
                                }
                                {
                                    clicado === 1 ? (
                                        <div className='about-us-menu'>
                                            alo mundo, 
                                            vamos, 
                                            la,
                                        </div>
                                    ): ''
                                }
                            </ul>
                        </div>
                    )
                }
            </nav>
        </section>
    )
}