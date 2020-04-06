import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import '../../App.css';

export class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = { Data: {} };
    }

    async componentDidMount() {

        await axios.get(`https://private-afe609-testefront.apiary-mock.com/time-data`)
            .then(res => {
                const chart = res.data;
                console.log(chart.yesterday);


                let label1 = [];
                let value1 = [];

                let label2 = [];
                let value2 = [];


                chart.today.map(indexChart => {
                    label1.push(indexChart.label);
                    value1.push(indexChart.value);
                });

                chart.yesterday.map(indexChart => {
                    label2.push(indexChart.label);
                    value2.push(indexChart.value);
                });

                this.setState({
                    Data: {
                        labels: label1,
                        datasets: [
                            {
                                label: 'Today',
                                data: value1,
                                yAxisID: 'today',
                                fill: 'none',
                                borderWidth: 1,
                                lineTension: 0,
                                backgroundColor: '#118aca',
                                borderColor: '#118aca',
                            }, {

                                label: 'Yesterday',
                                data: value2,
                                yAxisID: 'yesterday',
                                fill: 'none',
                                backgroundColor: '#035a27',
                                pointRadius: 2,
                                borderColor: '#035a27',
                                borderWidth: 1,
                                lineTension: 0
                            }

                        ],


                    }
                });
            })

    }

    render() {
        return (
            <div className="line-container">
                <h2 className="title-charts">LINE CHART</h2>
                <Line data={this.state.Data}
                    options={{
                        maintainAspectRatio: true,
                        legend: {
                            display: true,
                            position: 'top',
                            labels: {
                                usePointStyle: true,
                            }
                        },
                        scales: {
                            yAxes: [{
                                id: 'today',
                                type: 'linear',
                                position: 'left',
                                gridLines: {
                                    drawOnChartArea: false
                                },

                            }, {
                                id: 'yesterday',
                                type: 'linear',
                                position: 'right',
                                gridLines: {
                                    display: false
                                },

                            }],
                            
                        }

                    }} />
            </div>
        )
    }
}

export default LineChart;