import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';


export default function Page1(){
    return(
        <div className="chart-container">
            <header className="menu">
            <Link className="back-link" to="/">
                Page 1
                </Link>

                <Link className="back-link" to="/page2">
                Page 2
                </Link>
                
            </header>
            <h1>Página de teste 1</h1>
        </div>
    )
}