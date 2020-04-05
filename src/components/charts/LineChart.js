import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import '../../App.css';

export class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = { Data: {} };
    }

    componentDidMount() {

        axios.get(`https://private-afe609-testefront.apiary-mock.com/time-data`)
            .then(res => {
                const chart = res.data;
                console.log(chart.yesterday);


                let label1 = [];
                let value1 = [];

                let label2 = [];
                let value2 = [];

                chart.today.map(record => {
                        label1.push(record.label);
                        value1.push(record.value);
                    
                });

                chart.yesterday.map(chartValue => {
                    label2.push(chartValue.label);
                    value2.push(chartValue.value);
                    
                });

                this.setState({
                    Data: {
                        labels: [label1. label2], 
                        datasets: [
                            {
                                label: 'Today',
                                data: value1,
                                yAxisID: 'today',
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
                            }, {
                                label: 'Yesterday',
                                data: value2,
                                yAxisID: 'yesterday',
                                backgroundColor: [
                                    "red",
                                    "red",
                                    "red",
                                    "red",
                                    "red",
                                    "red",
                                    "red",
                                    "red",
                                    "red",
                                    "red",
                                    "red",
                                    "red"
                                ],
                            }
                           
                        ]
                    }
                });
            })

    }

    render() {
        return (
            <div className="line-container">
                <Line data={this.state.Data}
                    options={{ 
                        scales: {
                            yAxes: [{
                                id: 'today',
                                type: 'linear',
                                position: 'left',
                            }, {
                                id: 'yesterday',
                                type: 'linear',
                                position: 'right',
                                
                            }]
                            }

                     }} />
            </div>
        )
    }
}

export default LineChart;