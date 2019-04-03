import React from 'react'
import { render } from 'react-dom'
// Import CSS
import './css/global.css'
import WeatherForm from './components/WeatherForm.jsx'
import WeatherApp from "./components/WeatherApp"

// Render requires two arguements, what you want to render and where
render(<WeatherApp/>,document.getElementById("app"))
// Other way of doing it
// import React, { Component} from 'react'
// class WeatherForm extends Component {}
