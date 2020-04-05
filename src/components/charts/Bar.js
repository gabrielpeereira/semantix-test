import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

export class Polararea extends Component {
    constructor(props) {
        super(props);
        this.state = { Data: {} };
    }

    componentDidMount() {

        axios.get(`https://private-afe609-testefront.apiary-mock.com/anual-result`)

            .then(res => {

                console.log(res);

                const ipl = res.data;

                let playername = [];

                let runscore = [];

                ipl.forEach(record => {

                    playername.push(record.label);

                    runscore.push(record.value);

                });

                this.setState({

                    Data: {

                        labels: playername,

                        datasets: [

                            {

                                label: 'IPL 2018/2019 Top Run Scorer',

                                data: runscore,

                                backgroundColor: [

                                    "#3cb371",

                                    "#0000FF",

                                    "#9966FF",

                                    "#4C4CFF",

                                    "#00FFFF",

                                    "#f990a7",

                                    "#aad2ed",

                                    "#FF00FF",

                                    "Blue",

                                    "Red"

                                ]

                            }

                        ]

                    }

                });

            })

    }

    render() {

        return (

            <div>

                <Bar data={this.state.Data}

                    options={{ maintainAspectRatio: false }} />

            </div>

        )

    }

}

export default Polararea