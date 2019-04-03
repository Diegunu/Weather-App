import React, {Component, Fragment} from 'react'
import { render } from 'react-dom'
import DayForecast from "./DayForecast"
import NightForecast from "./NightForecast"
export default class DetailedForecast extends Component {
   render() {
     return(
       <Fragment>
         <DayForecast/>
         <NightForecast/>
         </Fragment>
     )}

  }
