import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './menu.css'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="YagoFlix logo" />
            </a>

            <Button as="a" className="ButtonLink"  href="/">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu