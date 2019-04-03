import React, {Component, Fragment} from 'react'
import { render } from 'react-dom'


import Days from "./Days"
import DetailedForecast from "./DetailedForecast"


export default class WeatherApp extends Component {
   render() {
     return(
       <main>
          <Days/>
          <DetailedForecast/>
   </main>
     )}

  }
