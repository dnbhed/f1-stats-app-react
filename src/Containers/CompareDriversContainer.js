import React, {Component, Fragment} from 'react'
import DriverSelect from '../Components/SelectComponents/DriverSelect'
import TrackSelect from '../Components/SelectComponents/TrackSelect'
import CareerStatsCompare from '../Components/DriverStatsComponents/CareerStatsCompare'
import TrackResultsBySeason from '../Components/DriverStatsComponents/TrackResultsBySeason'
import './CompareDriversContainer.css'

class CompareDriversContainer extends Component{

    constructor(props) {
        super(props)
        this.state = {
            allRaces1: [],
            name1: 'Please Select a Driver',
            code1: '',
            driver1ID: '',
            number1: '',
            nationality1: '',
            drivers: [],
            selectedDriverSeasonsResults1: [],
            selectedDriverTrackResults1: [],
            allRaces2: [],
            name2: 'Please Select a Driver',
            code2: '',
            driver2ID: '',
            number2: '',
            nationality2: '',
            selectedDriverSeasonsResults2: [],
            selectedDriverTrackResults2: [],
            tracks: [],
            selectedTrack: '', 
            selectedTrackName: ''

        }
        this.onDriverSelected1 = this.onDriverSelected1.bind(this)
        this.onDriverSelected2 = this.onDriverSelected2.bind(this)
        this.onTrackSelect = this.onTrackSelect.bind(this)
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
        this.setState({driver1ID: event})
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

        if (this.state.selectedTrack) {
            const trackId = this.state.selectedTrack
            const url = `http://ergast.com/api/f1/circuits/${trackId}/drivers/${event}/results.json`
            fetch(url)
                .then(res => res.json())
                .then(results => this.setState({
                    selectedDriverTrackResults1: results.MRData.RaceTable.Races
                }))
        }   
    }

    onDriverSelected2(event, number) {
        const driverId = event
        this.setState({ driver2ID: event })
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

        if (this.state.selectedTrack) {
            const trackId = this.state.selectedTrack
            const url = `http://ergast.com/api/f1/circuits/${trackId}/drivers/${event}/results.json`
            fetch(url)
                .then(res => res.json())
                .then(results => this.setState({
                    selectedDriverTrackResults1: results.MRData.RaceTable.Races
                }))
        }
    }

    onTrackSelect(event){
        const trackId = event.target.value
        this.setState({ selectedTrack: trackId})
        if(this.state.code1){
            const driverId = this.state.driver1ID
            console.log(driverId)
            const url = `http://ergast.com/api/f1/circuits/${trackId}/drivers/${driverId}/results.json`
            console.log(url)
            fetch(url)
                .then(res => res.json())
                .then(results => this.setState({
                    selectedDriverTrackResults1: results.MRData.RaceTable.Races
                }))
        }

        if(this.state.code2){
            const driverId = this.state.driver2ID
            const url = `http://ergast.com/api/f1/circuits/${trackId}/drivers/${driverId}/results.json`
            fetch(url)
                .then(res => res.json())
                .then(results => this.setState({
                    selectedDriverTrackResults1: results.MRData.RaceTable.Races
                }))
        }
    }

    render(){
        return(
            <Fragment>
                <h2 id="page-explanation">Choose two drivers to compare their career stats. Choose a track to compare their preformances at that track.</h2>
                
                <section id="selectors">

                    <div id="driver-1-select">
                        <DriverSelect
                            drivers={this.state.drivers}
                            onDriverSelected={this.onDriverSelected1}
                            number={1}

                        />
                    </div>

                    <div id="track-select">
                        <TrackSelect
                            tracks={this.state.tracks}
                            onTrackSelected={this.onTrackSelect}
                        />
                    </div>

                    <div id="driver-2-select">
                        <DriverSelect
                            drivers={this.state.drivers}
                            onDriverSelected={this.onDriverSelected2}
                            number={2}
                        />
                    </div>

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

                <section id="charts-container">
                    <div>
                        <TrackResultsBySeason
                            results={this.state.selectedDriverTrackResults1}
                            code={this.state.code1}
                        />
                    </div>
                    <div>
                        <TrackResultsBySeason
                            results={this.state.selectedDriverTrackResults2}
                            code={this.state.code2}
                        />
                    </div>
                    
                    
                </section>
            </Fragment>
            
        )
    }
}

export default CompareDriversContainer