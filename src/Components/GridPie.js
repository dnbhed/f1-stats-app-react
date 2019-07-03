import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

class GridPie extends Component {
    

    parseGridData(races) {

        const reduced = races.reduce((acc, race) => {
            const gridPosition = `P${race.Results[0].grid}`;
            if(acc[gridPosition]){
                acc[gridPosition] += 1;
            } else {
                acc[gridPosition] = 1;
            }
            return acc;
        }, {})
        return Object.entries(reduced);
    }
    

    render() {
        
        const gridPositions = this.parseGridData(this.props.allRaces)
        
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
                    text: `Times in Grid Positions`
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
                    data: gridPositions
                }]
            },
        };
        const { chartOptions } = options;
        return (
            <div id="grid-pie">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                />
            </div>
        )
    }
}

export default GridPie
