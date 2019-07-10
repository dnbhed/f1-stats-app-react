import React, {Component, Fragment} from 'react'
import CareerStats from '../Components/DriverStatsComponents/CareerStats'
import GridPie from '../Components/DriverStatsComponents/GridPie';
import FinishingPie from '../Components/DriverStatsComponents/FinishingPie';
import DriverSelect from '../Components/SelectComponents/DriverSelect';
import SeasonStats from '../Components/DriverStatsComponents/SeasonsStats'
import TrackStats from '../Components/DriverStatsComponents/TrackStats'
import './DriverStatsContainer.css'

class DriverStatsContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            allRaces: [],
            name: 'Please Select a Driver',
            code: '',
            number: '',
            nationality: '',
            drivers: [],
            selectedDriverSeasonsResults:[],
            selectedDriverTrackResults:[]
        }
        this.onDriverSelected = this.onDriverSelected.bind(this)
    }

    componentDidMount(){
        const driversUrl = 'https://ergast.com/api/f1/current/drivers.json'
        fetch(driversUrl)
            .then(res => res.json())
            .then(drivers => this.setState({
                drivers: drivers.MRData.DriverTable.Drivers
            }))
    }

    onDriverSelected(event){
        const driverId = event
        const driverUrl = `https://ergast.com/api/f1/drivers/${driverId}/results.json?limit=1000`;
        fetch(driverUrl)
            .then(res => res.json())
            .then(allRaces => {
                this.setState({
                allRaces: allRaces.MRData.RaceTable.Races,
                name: allRaces.MRData.RaceTable.Races[0].Results[0].Driver.givenName + ' ' + allRaces.MRData.RaceTable.Races[0].Results[0].Driver.familyName,
                code: allRaces.MRData.RaceTable.Races[0].Results[0].Driver.code,
                number: allRaces.MRData.RaceTable.Races[0].Results[0].Driver.permanentNumber,
                nationality: allRaces.MRData.RaceTable.Races[0].Results[0].Driver.nationality
                })
            })
            .catch(err => console.error)
        
        const seasonUrl = `https://ergast.com/api/f1/drivers/${driverId}/seasons.json`
        fetch(seasonUrl)
        .then(res => res.json())
        .then(seasons => {

            const promises = seasons.MRData.SeasonTable.Seasons.map((season) => {
                return fetch(`https://ergast.com/api/f1/${season.season}/drivers/${driverId}/results.json`)
                .then(res => res.json())
            }) 
        
            Promise.all(promises)
            .then((results) => {
                this.setState({
                    selectedDriverSeasonsResults: results
                })
            }) 
        })

        const circuitUrl = `https://ergast.com/api/f1/current/circuits.json`
        fetch(circuitUrl)
        .then(res => res.json())
        .then(circuits => {
            const promises = circuits.MRData.CircuitTable.Circuits.map((circuit) => {
                return fetch(`https://ergast.com/api/f1/circuits/${circuit.circuitId}/drivers/${driverId}/results.json`)
                .then(res => res.json())
            })
                
            Promise.all(promises)
            .then((results) => {
                this.setState({
                    selectedDriverTrackResults: results
                })
            })
        })
    }


    render(){
        return(
            <Fragment>
                <h2 id="page-explanation">Choose a driver to see their career stats</h2>

                <DriverSelect
                    drivers={this.state.drivers}
                    onDriverSelected={this.onDriverSelected}
                />
                <main id="driver-stats-container">
                    <CareerStats
                        allRaces={this.state.allRaces}
                        name={this.state.name}
                        code={this.state.code}
                        number={this.state.number}
                        nationality={this.state.nationality}
                    />
                    <GridPie
                        allRaces={this.state.allRaces}
                        code={this.state.code}
                        number={this.state.number}
                    />
                    <FinishingPie
                        allRaces={this.state.allRaces}
                        code={this.state.code}
                        number={this.state.number}
                    />
                    <SeasonStats
                        seasons={this.state.selectedDriverSeasonsResults}
                        code={this.state.code}
                        number={this.state.number}
                    />
                    <TrackStats
                        tracks={this.state.selectedDriverTrackResults}
                        code={this.state.code}
                        number={this.state.number}
                    />
                </main>
            </Fragment>
            
                
        )
    }
}

export default DriverStatsContainer;