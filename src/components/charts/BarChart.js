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

        //Callback de retorno da api
        await axios.get(`https://private-afe609-testefront.apiary-mock.com/anual-result`)
            .then(res => {
                const chart = res.data;

                let label = [];
                let value = [];

                // eslint-disable-next-line array-callback-return
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


    //Renderizando Grafico Bar
    render() {
        return (
            <div className="bar-container">
                <h2 className="title-charts">BAR CHART</h2>
                <Bar data={this.state.Data}
                    options={{
                        maintainAspectRatio: true,
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }]
                        },
                        legend: {
                            display: false,
                            position: 'top',
                            labels: {
                                fontColor: '#333'
                            },
                            gridLines: {
                                display: false,
                            },
                        }
                    }} />
            </div>
        )
    }
}

export default BarChart;