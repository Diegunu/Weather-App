import React from 'react';

class Day extends React.Component {
  render() {
    return (
      <div className="day">
        <h2>TODAY</h2>
        <h3>{this.props.day.dt}</h3>
        <img src={`${process.env.PUBLIC_URL
        }/weather_icons/01d.png`} alt="weather" />
        <div className="degrees">
          <span className="high">81&deg;</span>/64&deg;
        </div>
        <p>{this.props.day.description}</p>
      </div>
    )
  }
}

export default Day;
