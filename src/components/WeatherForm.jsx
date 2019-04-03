import React, {Component, Fragment} from 'react'
import { render } from 'react-dom'
// Import CSS
import '../css/weather-form.css'

class WeatherForm extends Component {
  render() {
    return (
      <form className="weather-form">
        <header className="form-title">
Find your local weather!
        </header>
        <div>

          <label htmlFor="city">Enter city,state:</label>
          <input type="text" name="city" placeholder="ex: Opa-Locka,FL"/>
        </div>
         <footer>
           
           <input type="submit"/>
         </footer>
       </form>
    )
  }
}

export default WeatherForm
// Render requires two arguements, what you want to render and where
// Other way of doing it
// import React, { Component} from 'react'
// class WeatherForm extends Component {}
