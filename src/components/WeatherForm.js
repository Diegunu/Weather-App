import React from 'react';
import '../css/weather-form.css';

class WeatherForm extends React.Component {

handleSubmit = (event) => {
  event.preventDefault()
  let city = this.weatherFormInput.value.replace(/\s|\,/g,"")
  this.props.history.push(`/weather/${city}`);
}

  render() {
    return (
      <form className="weather-form" onSubmit={this.handleSubmit}>
        <h1 className="form-title">Find your local weather!</h1>
        <div>
          <label htmlFor="city">Enter city, state:</label>
          <input type="text"
             id="city"
             name="city"
             placeholder="ex: Miami, FL"
             ref={elem => this.weatherFormInput = elem} />
        </div>
        <footer>
          <input type="submit" value="Find my weather!" />
        </footer>
      </form>
    )
  }
}

export default WeatherForm;
