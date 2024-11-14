import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

export const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className='navbar bg-primary navbar-expand-lg fixed-top'>
                    <div className='container-fluid'>
                        <ul className='navbar-nav mx-auto mb-2 mb-lg-0 navbar-nav-scroll'>
                            <li className='nav-item'>
                                <Link className='nav-link formato01' to='/'>Inicio</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link formato01' to='/clientes'>Clientes</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link formato01' to='/productos'>Productos</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link formato01' to='/ventas'>Ventas</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default HeaderComponent;
