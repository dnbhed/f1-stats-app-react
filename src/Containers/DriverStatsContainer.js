import React, {Component, Fragment} from 'react'
import CareerStats from '../Components/CareerStatsContainer'

class DriverStatsContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            allRaces: [],
            name: '',
            code: '',
            number: '',
            nationality: ''
        }
    }

    componentDidMount(){
        const url = 'http://ergast.com/api/f1/drivers/alonso/results.json?limit=1000';
        fetch(url)
            .then(res => res.json())
            .then(allRaces => this.setState({ 
                allRaces: allRaces.MRData.RaceTable.Races, 
                name: allRaces.MRData.RaceTable.Races[0].Results[0].Driver.givenName + ' ' + allRaces.MRData.RaceTable.Races[0].Results[0].Driver.familyName,
                code: allRaces.MRData.RaceTable.Races[0].Results[0].Driver.code,
                number: allRaces.MRData.RaceTable.Races[0].Results[0].Driver.permanentNumber,
                nationality: allRaces.MRData.RaceTable.Races[0].Results[0].Driver.nationality
            } ))
            .catch(err => console.error)
    }

    render(){
        return(
            <CareerStats 
            allRaces={this.state.allRaces} 
            name={this.state.name} 
            code={this.state.code}
            number={this.state.number}
            nationality={this.state.nationality}/>
        )
    }
}

export default DriverStatsContainer;