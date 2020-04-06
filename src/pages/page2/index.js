import React from 'react';
import Header from '../../ui/header/Header';
import LineChart from '../../components/charts/LineChart';
import './style.css';
import '../../App.css';


export default function Page2(){
    return(
        <div className="chart-container">
            <Header />
                <div className="title-pages">
                    <h1>Página de teste 2</h1>
                    <p>Description</p>
                </div>
                <div>
                <section class="charts-types">
                
                <LineChart />
                </section>
                </div>
        </div>
    )
}