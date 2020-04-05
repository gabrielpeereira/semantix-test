import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import '../../App.css';

export class PieChart extends Component {
    constructor(props) {
        super(props);
        this.state = { Data: {} };
    }

    componentDidMount() {
        axios.get(`https://private-afe609-testefront.apiary-mock.com/anual-percentage`)
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
                                    "#ABE1FA",
                                    "#035A27",
                                    "#ABE1FA"
                                    
                                ],
                            }
                        ]
                    }
                });
            })

    }

    render() {
        return (
            <div className="pie-container">
                <Pie data={this.state.Data}
                    options={{ maintainAspectRatio: true }} />
            </div>
        )
    }
}

export default PieChart;