import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { FiSearch, FiLogOut, FiFolder } from 'react-icons/fi'

export default function Header() {
    return (
        <header className="menu">

            <div className="menu-pages">
                <div className="menu-page1">
                    <Link className="back-link" to="/">
                        <FiFolder size={16} color="#fff" />
                            Page 1
                    </Link>
                </div>

                <div className="menu-page2">
                    <Link className="back-link" to="/page2">
                        <FiSearch size={16} color="#fff" />
                        Page 2
                    </Link>
                </div>

            </div>

            <div>
                <FiLogOut size={16} color="#fff" >
                    Logout  </FiLogOut>
            </div>


        </header>
    );
}