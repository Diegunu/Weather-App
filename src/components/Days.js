import React from 'react';
import Day from './Day';

class Days extends React.Component {


  render() {
    return (
      <div>
        <h1>Today's Weather {this.props.city}{this.props.today}</h1>
        <div className="days">
          {this.props.data.city.map( (elem, index) => {
            return <Day key={elem.dt} day={elem} index = {index} updateCurrentDay={ this.props.updateCurrentDay}
              currentDay={this.props.currentDay}/>
            })
          }
        </div>
      </div>
    )
  }
}
export default Days;
