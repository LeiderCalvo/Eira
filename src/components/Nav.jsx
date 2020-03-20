import React from 'react';
import { Link } from 'react-router-dom';
import STORE from '../stores/Store';
import { observer } from 'mobx-react';

const Nav = observer( function Nav() {
    return(
        <nav className="Nav navbar navbar-expand-md">
            <Link className='navbar-brand' to='/'><img src="./images/logo.svg" alt="logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className='nav-link' to='comolohacemos'>¿Cómo lo hacemos?</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='donaciones'>Donaciones</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='comunidad'>Nuestra Comunidad</Link>
                    </li>
                    <li className="nav-item">
                        {STORE.user === null ?
                            <p className='nav-link' onClick={()=>STORE.setter('isLogging', true)}>Iniciar Sesión</p>
                        :
                            <Link className='nav-link' to='perfil'>{STORE.user.user}</Link>
                        }
                    </li>

                </ul>
            </div>
        </nav>
    )
});

export default Nav;
