import React, { Component } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import "./SeasonsStats.css";

class SeasonStats extends Component {
  constructor(props) {
    super(props);
    this.chartComponent = React.createRef();
  }

  componentDidMount() {
    this.chartComponent.current.chart.reflow();
  }

  parseSeasonsGridData(seasons) {
    const reduced = seasons.reduce((acc, season) => {
      const year = `${season.MRData.RaceTable.season}`;
      acc[year] = this.getAverageGrid(season.MRData.RaceTable.Races);
      return acc;
    }, {});
    return Object.entries(reduced);
  }
  parseSeasonsFinishingData(seasons) {
    const reduced = seasons.reduce((acc, season) => {
      const year = `${season.MRData.RaceTable.season}`;
      acc[year] = this.getAverageFinish(season.MRData.RaceTable.Races);
      return acc;
    }, {});
    return Object.entries(reduced);
  }

  getAverageGrid(races) {
    let count = 0;
    races.forEach(race => {
      if (parseInt(race.Results[0].grid) === 0) {
        count += 20;
      } else {
        count += parseInt(race.Results[0].grid);
      }
    });
    return parseFloat((count / races.length).toFixed(2));
  }

  getAverageFinish(races) {
    let count = 0;
    races.forEach(race => {
      if (parseInt(race.Results[0].position)) {
        count += parseInt(race.Results[0].position);
      }
    });
    return parseFloat((count / races.length).toFixed(2));
  }

  render() {
    const seasonsGridData = this.parseSeasonsGridData(this.props.seasons);
    const seasonsFinishingData = this.parseSeasonsFinishingData(
      this.props.seasons
    );
    const years = Object.values(
      seasonsGridData.map(data => {
        return data[0];
      })
    );
    const options = {
      chartOptions: {
        chart: {
          backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
              [0, "rgb(220, 220, 220)"],
              [1, "rgb(220, 220, 220)"]
            ]
          },
          type: "line"
        },
        title: {
          text: this.props.code + " " + this.props.number
        },
        subtitle: {
          text: `Average Grid and Finishing Positions`
        },
        xAxis: [
          {
            reversed: false,
            categories: years,
            crosshair: true
          }
        ],
        yAxis: [
          {
            reversed: true,
            gridLineWidth: 0,
            title: {
              text: "Position",
              style: {
                color: Highcharts.getOptions().colors[0]
              }
            },
            labels: {
              format: "P{value} ",
              style: {
                color: Highcharts.getOptions().colors[0]
              }
            },
            min: 1,
            max: 24
          }
        ],
        plotOptions: {
          pie: {
            innerSize: 100,
            depth: 45
          }
        },
        series: [
          {
            name: "Grid Results",
            size: 150,
            center: [100, 100],
            data: seasonsGridData
          },
          {
            name: "Finishing Results",
            size: 150,
            center: [100, 100],
            data: seasonsFinishingData
          }
        ]
      }
    };

    const { chartOptions } = options;
    return (
      <div id="season-stats">
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          ref={this.chartComponent}
        />
      </div>
    );
  }
}

export default SeasonStats;
