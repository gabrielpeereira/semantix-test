import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { FiSearch, FiLogOut, FiFolder } from 'react-icons/fi'

export default function Header() {
    return (
        <header className="menu">
            <span className="logo"></span>
            <div className="menu-pages">
            <Link className="back-link" to="/">
                    <div className="menu-logo">

                        <div>Semantix</div>

                    </div>
                </Link>

                <Link className="back-link" to="/">
                    <div className="menu-page1">

                        <FiFolder size={32} color="#fff" />
                        <div>Page 1</div>

                    </div>
                </Link>

                <Link className="back-link" to="/page2">
                    <div className="menu-page2">

                        <FiSearch size={32} color="#fff" />
                        <div>Page 2</div>

                    </div>
                </Link>
            </div>
            <Link className="back-link" to="/">
                <div className="menu-logout">

                    <FiLogOut size={29} color="#fff" />
                    <div>Logout </div>

                </div>
            </Link>

        </header>
    );
}