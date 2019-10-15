import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import './TrackStats.css'

class SeasonStats extends Component {

    constructor(props) {
        super(props)
        this.chartComponent = React.createRef();

    }

    componentDidMount() {
        this.chartComponent.current.chart.reflow();
    }

    parseTrackGridData(tracks) {
        const reduced = tracks.reduce((acc, track) => {
            const circuit = `${track.MRData.RaceTable.circuitId}`;
            acc[circuit] = this.getAverageGrid(track.MRData.RaceTable.Races)
            return acc;
        }, {})
        return Object.entries(reduced);
    }

    parseTrackFinishingData(tracks) {
        const reduced = tracks.reduce((acc, track) => {
            const circuit = `${track.MRData.RaceTable.circuitId}`;
            acc[circuit] = this.getAverageFinish(track.MRData.RaceTable.Races)
            return acc;
        }, {})
        return Object.entries(reduced);
    }

    getAverageGrid(races) {
        let count = 0;
        races.forEach(race => {
            if (parseInt(race.Results[0].grid) === 0) {
                count += 20
            } else {
                count += parseInt(race.Results[0].grid)
            }
        })
        return parseFloat((count / races.length).toFixed(2))
    }

    getAverageFinish(races) {
        let count = 0;
        races.forEach(race => {
            if (parseInt(race.Results[0].position)) {
                count += parseInt(race.Results[0].position)
            }
        })
        return parseFloat((count / races.length).toFixed(2))
    }

    render() {

        const trackGridData = this.parseTrackGridData(this.props.tracks)

        const trackFinishingData = this.parseTrackFinishingData(this.props.tracks)
        const tracks = Object.values(trackGridData.map(data => {
            return data[0]
        }))
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
                    type: 'column',

                },
                legend:{
                    color:'white'},
                title: {
                    text: this.props.code + ' ' + this.props.number
                },
                subtitle: {
                    text: `Average Grid and Finishing Positions`
                },
                
                xAxis: [{
                    categories: tracks,
                }],
                yAxis: [{

                    gridLineWidth: 0,
                    title: {
                        text: 'Position'
                        
                    },
                    labels: {
                        format: 'P{value} '
                        
                    },
                    min: 1,
                    max: 24
                }],
                series: [{
                    name: 'Grid Results',
                    size: 150,
                    center: [100, 100],
                    data: trackGridData
                },
                {
                    name: 'Finishing Results',
                    size: 150,
                    center: [100, 100],
                    data: trackFinishingData
                }]
            },
        };
        const { chartOptions } = options;
        return (
            <div id="track-stats">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                    ref={this.chartComponent}
                />
            </div>
        )
    }
}

export default SeasonStats