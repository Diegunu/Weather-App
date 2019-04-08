import React from 'react';
import '../css/weather-app.css';
import Days from './Days';
import DetailedForecast from './DetailedForecast';

class WeatherApp extends React.Component {

 constructor() {
    super();
    this.state = {
      city: [],
      currentDay:{}
    }
  }

componentDidMount(){
  fetch(`${process.env.PUBLIC_URL}/sample-city.json`)
  .then(res => res.json() )
  .then(data => {
    this.setState({
      city:data,
      currentDay:data[0]
    })
  })
}

  today() {
     return new Date().toLocaleDateString('en-US',
        {
           weekday: 'long',
           month: 'short',
           day: 'numeric'
        });
  }

  render() {
    return (
      <main>
        <Days cityState= {this.props.match.params.weatherId} data = {this.state}> </Days>
        <DetailedForecast />
      </main>
    )
  }
}

export default WeatherApp;
