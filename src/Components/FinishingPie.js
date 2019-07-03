import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

class FinishingPie extends Component {
    

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
                plotOptions: {
                    pie: {
                        innerSize: 100,
                        depth: 45
                    }
                },
                series: [{
                    name: 'Grid Results',
                    size: 150,
                    center: [100, 100],
                    data: positions
                }]
            },
        };
        const { chartOptions } = options;
        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                />
            </div>
        )
    }
}

export default FinishingPie
