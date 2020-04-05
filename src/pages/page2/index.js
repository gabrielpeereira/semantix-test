import React from 'react';
import Header from '../../ui/header/Header';
import LineChart from '../../components/charts/LineChart';
import '../../App.css';


export default function Page2(){
    return(
        <div className="chart-container">
            <Header />
            <h1>Página de teste 2</h1>

            <LineChart />
        </div>
    )
}