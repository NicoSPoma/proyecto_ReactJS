import React from 'react';
import CartWidget from './CartWidget.js';

function NavBAr (props) {
    return (
        <div className='nav-bar'>
            <div className='logo'>  
            </div>
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
            <div>
                <CartWidget/>
            </div>
        </div>

    );
}

export default NavBAr;