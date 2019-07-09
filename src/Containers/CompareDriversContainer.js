import React, {Component, Fragment} from 'react'
import DriverSelect from '../Components/SelectComponents/DriverSelect'
import TrackSelect from '../Components/SelectComponents/TrackSelect'
import CareerStatsCompare from '../Components/DriverStatsComponents/CareerStatsCompare'
import './CompareDriversContainer.css'

class CompareDriversContainer extends Component{

    constructor(props) {
        super(props)
        this.state = {
            allRaces1: [],
            name1: 'Please Select a Driver',
            code1: '',
            number1: '',
            nationality1: '',
            drivers: [],
            selectedDriverSeasonsResults1: [],
            selectedDriverTrackResults1: [],
            allRaces2: [],
            name2: 'Please Select a Driver',
            code2: '',
            number2: '',
            nationality2: '',
            selectedDriverSeasonsResults2: [],
            selectedDriverTrackResults2: [],
            tracks: []
        }
        this.onDriverSelected1 = this.onDriverSelected1.bind(this)
        this.onDriverSelected2 = this.onDriverSelected2.bind(this)
    }

    componentDidMount() {
        const driversUrl = 'http://ergast.com/api/f1/current/drivers.json'
        fetch(driversUrl)
            .then(res => res.json())
            .then(drivers => this.setState({
                drivers: drivers.MRData.DriverTable.Drivers
            }))

        const tracksUrl = 'http://ergast.com/api/f1/current/circuits.json'
        fetch(tracksUrl)
            .then(res => res.json())
            .then(drivers => this.setState({
                tracks: drivers.MRData.CircuitTable.Circuits
            }))
    }

    onDriverSelected1(event, number) {
        const driverId = event
        const driverUrl = `http://ergast.com/api/f1/drivers/${driverId}/results.json?limit=1000`;
        fetch(driverUrl)
            .then(res => res.json())
            .then(allRaces => {
                this.setState({
                    allRaces1: allRaces.MRData.RaceTable.Races,
                    name1: allRaces.MRData.RaceTable.Races[0].Results[0].Driver.givenName + ' ' + allRaces.MRData.RaceTable.Races[0].Results[0].Driver.familyName,
                    code1: allRaces.MRData.RaceTable.Races[0].Results[0].Driver.code,
                    number1: allRaces.MRData.RaceTable.Races[0].Results[0].Driver.permanentNumber,
                    nationality1: allRaces.MRData.RaceTable.Races[0].Results[0].Driver.nationality
                })
            })
            .catch(err => console.error)

        const seasonUrl = `http://ergast.com/api/f1/drivers/${driverId}/seasons.json`
        fetch(seasonUrl)
            .then(res => res.json())
            .then(seasons => {

                const promises = seasons.MRData.SeasonTable.Seasons.map((season) => {
                    return fetch(`http://ergast.com/api/f1/${season.season}/drivers/${driverId}/results.json`)
                        .then(res => res.json())
                })

                Promise.all(promises)
                    .then((results) => {
                        this.setState({
                            selectedDriverSeasonsResults1: results
                        })
                    })
            })

        const circuitUrl = `http://ergast.com/api/f1/current/circuits.json`
        fetch(circuitUrl)
            .then(res => res.json())
            .then(circuits => {
                const promises = circuits.MRData.CircuitTable.Circuits.map((circuit) => {
                    return fetch(`http://ergast.com/api/f1/circuits/${circuit.circuitId}/drivers/${driverId}/results.json`)
                        .then(res => res.json())
                })

                Promise.all(promises)
                    .then((results) => {
                        this.setState({
                            selectedDriverTrackResults1: results
                        })
                    })
            })
    }

    onDriverSelected2(event, number) {
        const driverId = event
        const driverUrl = `http://ergast.com/api/f1/drivers/${driverId}/results.json?limit=1000`;
        fetch(driverUrl)
            .then(res => res.json())
            .then(allRaces => {
                this.setState({
                    allRaces2: allRaces.MRData.RaceTable.Races,
                    name2: allRaces.MRData.RaceTable.Races[0].Results[0].Driver.givenName + ' ' + allRaces.MRData.RaceTable.Races[0].Results[0].Driver.familyName,
                    code2: allRaces.MRData.RaceTable.Races[0].Results[0].Driver.code,
                    number2: allRaces.MRData.RaceTable.Races[0].Results[0].Driver.permanentNumber,
                    nationality2: allRaces.MRData.RaceTable.Races[0].Results[0].Driver.nationality
                })
            })
            .catch(err => console.error)

        const seasonUrl = `http://ergast.com/api/f1/drivers/${driverId}/seasons.json`
        fetch(seasonUrl)
            .then(res => res.json())
            .then(seasons => {

                const promises = seasons.MRData.SeasonTable.Seasons.map((season) => {
                    return fetch(`http://ergast.com/api/f1/${season.season}/drivers/${driverId}/results.json`)
                        .then(res => res.json())
                })

                Promise.all(promises)
                    .then((results) => {
                        this.setState({
                            selectedDriverSeasonsResults2: results
                        })
                    })
            })

        const circuitUrl = `http://ergast.com/api/f1/current/circuits.json`
        fetch(circuitUrl)
            .then(res => res.json())
            .then(circuits => {
                const promises = circuits.MRData.CircuitTable.Circuits.map((circuit) => {
                    return fetch(`http://ergast.com/api/f1/circuits/${circuit.circuitId}/drivers/${driverId}/results.json`)
                        .then(res => res.json())
                })

                Promise.all(promises)
                    .then((results) => {
                        this.setState({
                            selectedDriverTrackResults2: results
                        })
                    })

            })

    }

    render(){
        return(
            <Fragment>
                <section id="selectors">
                    
                    <DriverSelect
                        drivers={this.state.drivers}
                        onDriverSelected={this.onDriverSelected1}
                        number={1}

                    />
                    <DriverSelect
                        drivers={this.state.drivers}
                        onDriverSelected={this.onDriverSelected2}
                        number={2}
                    />
                    <TrackSelect
                        tracks={this.state.tracks}

                    />



                </section>
                <section id="career-stats">
                    <div id="driver-1-career-stats">
                        <CareerStatsCompare
                            allRaces={this.state.allRaces1}
                            name={this.state.name1}
                            code={this.state.code1}
                            number={this.state.number1}
                            nationality={this.state.nationality1}
                        />
                    </div>
                    <div id="driver-2-career-stats">
                        <CareerStatsCompare
                            allRaces={this.state.allRaces2}
                            name={this.state.name2}
                            code={this.state.code2}
                            number={this.state.number2}
                            nationality={this.state.nationality2}
                        />
                    </div>
                    

                    
                </section>
            </Fragment>
            
        )
    }
}

export default CompareDriversContainer