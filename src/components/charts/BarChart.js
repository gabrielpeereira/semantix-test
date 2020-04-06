import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import '../../App.css';

export class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = { Data: {} };
    }

    //Função para montar o Grafico Bar
   async componentDidMount() {

       await axios.get(`https://private-afe609-testefront.apiary-mock.com/anual-result`)
            .then(res => {
                const chart = res.data;

                let label = [];
                let value = [];

                chart.map(indexChart => {
                        label.push(indexChart.label);
                        value.push(indexChart.value);
                    
                });

                this.setState({
                    Data: {
                        labels: label,
                        datasets: [
                            {
                                label: 'BAR CHART',
                                data: value,
                                backgroundColor: [
                                    "#23366e",
                                    "#23366e",
                                    "#23366e",
                                    "#23366e",
                                    "#23366e",
                                    "#23366e",
                                    "#23366e",
                                    "#23366e",
                                    "#23366e",
                                    "#23366e",
                                    "#23366e",
                                    "#23366e"
                                ],
                            }
                        ]
                    }
                });
            })

    }

    render() {
        return (
            <div className="bar-container">
            <h2 className="title-charts">BAR CHART</h2>
                <Bar data={this.state.Data}
                    options={{ maintainAspectRatio: true,
                        legend: {
                            display: false,
                            position: 'top',
                            labels: {
                                fontColor: '#333'
                            }
                        } }} />
            </div>
        )
    }
}

export default BarChart;