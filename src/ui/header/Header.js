import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { FiSearch, FiLogOut, FiFolder } from 'react-icons/fi'

export default function Header() {
    return (
        <header className="menu">
            <span className="logo">Semantix</span>
            <div className="menu-pages">
                <div className="menu-page1">
                    <Link className="back-link" to="/">
                        <FiFolder size={16} color="#fff" />
                            <div>Page 1</div>
                    </Link>
                </div>

                <div className="menu-page2">
                    <Link className="back-link" to="/page2">
                        <FiSearch size={16} color="#fff" />
                        <div>Page 2</div>
                    </Link>
                </div>

            </div>

            <div>
            <Link className="back-link" to="/">
                <FiLogOut size={16} color="#fff" />
                <div>Logout </div>  
                    
            </Link>
            </div>


        </header>
    );
}