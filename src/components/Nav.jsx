import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <nav className="Nav">
            <Link to='/'><img src="./images/logo.svg" alt="logo"/></Link>
            <Link to='comolohacemos'>¿Cómo lo hacemos?</Link>
            <Link to='donaciones'>Donaciones</Link>
            <Link to='comunidad'>Nuestra Comunidad</Link>
            <Link to='login'>Iniciar Sesión</Link>
        </nav>
    )
}

export default Nav;
