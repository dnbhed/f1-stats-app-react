import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import Card from 'react-bootstrap/Card';
import './FinishingPie.css';

class FinishingPie extends Component {
    constructor(props) {
        super(props)
        this.chartComponent = React.createRef();
    }

    componentDidMount() {
        this.chartComponent.current.chart.reflow();
    }

    parseFinishingData(races) {
        const reduced = races.reduce((acc, race) => {
            const position = `P${race.Results[0].position}`;
            if (acc[position]) {
                acc[position] += 1;
            } else {
                acc[position] = 1;
            }
            return acc;
        }, {})
        return Object.entries(reduced);
    }


    render() {
        const positions = this.parseFinishingData(this.props.allRaces)
        const options = {
            chartOptions: {
                chart: {
                    backgroundColor: {
                        linearGradient: [0, 0, 500, 500],
                        stops: [
                            [0, 'rgb(220, 220, 220)'],
                            [1, 'rgb(220, 220, 220)']
                        ]
                    },
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 45
                    }
                },
                title: {
                    text: this.props.code + ' ' + this.props.number
                },
                subtitle: {
                    text: `Times in Finishing Positions`
                },
                legend:{
                    color:'white'
                },
                plotOptions: {
                    pie: {
                        innerSize: 100,
                        depth: 45
                    }
                },
                series: [{
                    name: 'Grid Results',
                    size: 150,
                    center: ["50%", "50%"],
                    data: positions
                }]
            },
        };
        const { chartOptions } = options;
        return (
            <Card id="finishing-pie">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                    ref={this.chartComponent}

                />
            </Card>
        )
    }
}

export default FinishingPie
