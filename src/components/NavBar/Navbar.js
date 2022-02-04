import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Imagen from '../Img/carrito.png';
import Navbar from '../NavBar/Navbar.css'

const navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="./">Level</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="./">Inicio</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="./">Remeras</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="./">Pantalones</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="./">Zapatillas</a>
                        </li>
                    </ul>
                    </div>
                </div>
        <CartWidget imagen={Imagen} />
        </nav>
        </div>
    )
}

export default navbar