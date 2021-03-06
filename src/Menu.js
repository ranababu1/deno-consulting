import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <div class="container nav-wrapper">
                <a href="#" class="brand-logo">Deno</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li> 
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu;


