import React from 'react';
import Header from '../../ui/header/Header';
import LineChart from '../../components/charts/LineChart';
import '../../App.css';


export default function Page2(){
    return(
        <div className="chart-container">
            <Header />
                <div className="title-charts">
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