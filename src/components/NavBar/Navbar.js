import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Imagen from '../Img/carrito.png';
import '../NavBar/Navbar.css'

const navbar = () => {
    return (
        <div>
            <nav className="menu">
                <label className="logo">Level</label>
                <ul className="menu_items">
                    <li className="active"><a href="#">Inicio</a></li>
                    <li><a href="#">Remeras</a></li>
                    <li><a href="#">Pantalones</a></li>
                    <li><a href="#">Zapatillas</a></li>
                </ul>
        <CartWidget imagen={Imagen} />
        </nav>
        </div>
    )
}

export default navbar