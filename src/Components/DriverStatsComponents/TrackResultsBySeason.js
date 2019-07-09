import React from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const TrackResultsBySeason = (props) => {

    const options = { chartOptions:{
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: `code Results @ track`,
            align: 'center'
        },
        subtitle: {
            text: 'Source: ergast.com',
            align: 'center'
        },
        xAxis: [{
            reversed: false,
            categories: [],
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
            max: 20
        }
        ],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'center',
            x: 80,
            verticalAlign: 'top',
            y: 55,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255,255,255,0.25)'
        },
        series: [
            {
                name: `code Grid Position`,
                type: 'line',
                yAxis: 0,
                data: [],
                marker: {
                    enabled: true
                },
                tooltip: {
                    valuePrefix: 'P'
                }
            },
            {
                name: `code Finishing Position`,
                type: 'line',
                yAxis: 0,
                data: [],
                marker: {
                    enabled: true
                },
                tooltip: {
                    valuePrefix: 'P'
                }
            }
        ],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        floating: false,
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom',
                        x: 0,
                        y: 0
                    }
                }
            }]
        }
 
    }}
    const { chartOptions } = options;

    return(
        <div id="track-stats">
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}

            />
        </div>
    )

}

export default TrackResultsBySeason