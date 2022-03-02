import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Imagen from '../Img/carrito.png';
import '../NavBar/Navbar.css'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <div>
            <nav className="menu">
                <Link to='/'><label className="logo">Level</label></Link>
                <ul className="menu_items">
                    <li className="active"><Link to='/'>Inicio</Link></li>
                    <li><Link to ='/remeras'>Remeras</Link></li>
                    <li><Link to ='/pantalones'>Pantalones</Link></li>
                    <li><Link to ='/zapatillas'>Zapatillas</Link></li>
                </ul>
        <CartWidget imagen={Imagen} />
        </nav>
        </div>
    )
}

export default navbar