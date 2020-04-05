import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiLogOut, FiFolder } from 'react-icons/fi'
import BarChart from '../../components/charts/BarChart';
import PieChart from '../../components/charts/PieChart';
import '../../App.css';


export default function Page1(){
    return(
        <div className="chart-container">
            <header className="menu">
            <Link className="back-link" to="/">
            <FiFolder size={16} color="#fff" />
                Page 1
                </Link>

                <Link className="back-link" to="/page2">
                <FiSearch size={16} color="#fff" />
                    Page 2
                </Link>            
                
            </header>
            <h1>Página de teste 1</h1>
            <BarChart />
            <PieChart />
        </div>
    )
}