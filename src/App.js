import React, {Fragment} from 'react';
import DriverStatsContainer from './Containers/DriverStatsContainer'
import NavBar from './Containers/NavBar'
import './App.css';

function App() {
  return (
    <Fragment>
      <NavBar />
      <DriverStatsContainer />
    </Fragment>

   
  );
}

export default App;
