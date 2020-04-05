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
                                    "#03A9F4",
                                    "#03A9F4",
                                    "#03A9F4",
                                    "#03A9F4",
                                    "#03A9F4",
                                    "#03A9F4",
                                    "#03A9F4",
                                    "#03A9F4",
                                    "#03A9F4",
                                    "#03A9F4",
                                    "#03A9F4",
                                    "#03A9F4"
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
                <Bar data={this.state.Data}
                    options={{ maintainAspectRatio: true }} />
            </div>
        )
    }
}

export default BarChart;