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

                let label = [];
                let value = [];

                chart.map(record => {
                        label.push(record.label);
                        value.push(record.value);
                    
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
                <Line data={this.state.Data}
                    options={{ maintainAspectRatio: true }} />
            </div>
        )
    }
}

export default LineChart;