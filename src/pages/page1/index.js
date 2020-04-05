import React from 'react';
import Header from '../../ui/header/Header';
import BarChart from '../../components/charts/BarChart';
import PieChart from '../../components/charts/PieChart';
import './style.css';
import '../../App.css';


export default function Page1(){
    return(
        <div className="chart-container">
                <Header />
                <section class="charts-page1">
                <h1>Página de teste 1</h1>
                    <div >
                        <BarChart />
                        <PieChart />
                    </div>
                </section>
            
            
        </div>
    )
}