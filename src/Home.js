import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <h1 id="website-description">
      Choose DRIVER STATS or COMPARE DRIVERS to start
      <br />
      The purpose of this site is to display Formula 1 data on current drivers,
      tracks and constructors. The data is from the ergast.com F1 API.
      <br />
      The site uses JavaScript, React and Highcharts.
      <br />
      Code can be found @ https://github.com/ThomasHAOD/f1-stats-app-react. Any
      suggestions for improvements or questions can be made there.
    </h1>
  );
};

export default Home;
