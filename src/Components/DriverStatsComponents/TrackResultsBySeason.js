import React from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const TrackResultsBySeason = (props) => {

    let driverName = ''
    let driverCode = ''


    if (props.results[0]) {
        driverName = props.results[0].Results[0].Driver.givenName + ' ' + props.results[0].Results[0].Driver.familyName + ' @ ' + props.results[0].Circuit.circuitName

        driverCode = props.code
    }

    function parseSeasonsGridDataresults(results) {
        const reduced = results.reduce((acc, result) => {
            const year = `${result.season}`;
            acc[year] = parseInt(result.Results[0].grid)
            return acc;
        }, {})
        return Object.entries(reduced);
    }

    function parseSeasonsFinishingData(results) {
        const reduced = results.reduce((acc, result) => {
            const year = `${result.season}`;
            acc[year] = parseInt(result.Results[0].position)
            return acc;
        }, {})
        return Object.entries(reduced);
    }



    const results = props.results
    const gridResults = parseSeasonsGridDataresults(results)
    const finishingResults = parseSeasonsFinishingData(results)

    const years = Object.values(gridResults.map(data => {
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
                type: 'line'
            },
            title: {
                text: driverName
            },
            subtitle: {
                text: `Average Grid and Finishing Positions`
            },
            xAxis: [{
                reversed: false,
                categories: years,
                crosshair: true
            }],
            yAxis: [{
                reversed: true,
                gridLineWidth: 0,
                title: {
                    text: 'Position',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: 'P{value} ',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                min: 1,
                max: 24
            }],
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
                data: gridResults
            },
            {
                name: 'Finishing Results',
                size: 150,
                center: [100, 100],
                data: finishingResults
            }]
        },
    };
    const { chartOptions } = options;

    return (
        <div id="track-stats">
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}

            />
        </div>
    )

}

export default TrackResultsBySeason