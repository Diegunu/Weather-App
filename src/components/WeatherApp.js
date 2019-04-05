import React from 'react';
import '../css/weather-app.css';
import Days from './Days';
import DetailedForecast from './DetailedForecast';

class WeatherApp extends React.Component {

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
        <Days today={ this.today() }
           city={ this.props.match.params.weatherid} />
        <DetailedForecast />
      </main>
    )
  }
}

export default WeatherApp;
