import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { FiSearch, FiLogOut, FiFolder } from 'react-icons/fi'

export default function Header() {
    return(
        <header className="menu">
            <div class="menu-container">
            <Link className="back-link" to="/">
            <FiFolder size={16} color="#fff" />
                Page 1
                </Link>

                <Link className="back-link" to="/page2">
                <FiSearch size={16} color="#fff" />
                    Page 2
                </Link>
                <FiLogOut size={16} color="#fff" >
                    Page 2  </FiLogOut>        
            </div>
       
        </header>
    );
}