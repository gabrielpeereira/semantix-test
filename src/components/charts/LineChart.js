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
                                backgroundColor: 'black',
                                borderColor: 'black',
                            }, {
                                
                                label: 'Yesterday',
                                data: value2,
                                yAxisID: 'yesterday',
                                fill: 'none',
                                backgroundColor: 'red',
                                pointRadius: 2,
                                borderColor: 'black',
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
                        scales: {
                            yAxes: [{
                                id: 'today',
                                type: 'linear',
                                position: 'left',
                                ticks: {
                                    
                                }
                            }, {
                                id: 'yesterday',
                                type: 'linear',
                                position: 'right',
                                ticks: {
                                    
                                }
                            }]
                            }

                     }} />
            </div>
        )
    }
}

export default LineChart;