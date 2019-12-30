import React, { Component } from 'react';

class TimeDate extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         time: '12:00:00PM',
         date: 'Saturday, Decemeber 28, 2019'
      }
    }

    getCurrentTimeDate() {
        const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const d = new Date();
        const year = d.getFullYear();
        const month = months[d.getMonth()];
        const date = d.getDate();
        const day = days[d.getDay()];

        //Time
        const hour = d.getHours() % 12 || 12;
        const minute = d.getMinutes();
        const seconds = d.getSeconds();
        const ampm = (d.getHours() < 12 || d.getHours() === 24) ? "AM" : "PM";

        //date and time properties
        const fullTime = `${hour}:${minute}:${seconds}${ampm}`;
        const fullDate = `${day}, ${month} ${date}, ${year}`;

        //date time object

        return {
            time: fullTime,
            date: fullDate
        }

    }

    setTime = (dateTimeObject) => {
        this.setState(dateTimeObject);
    }

    componentDidMount() {
        setInterval(() => {
            this.setTime(this.getCurrentTimeDate());
        }, 1000);
    }
    
  render() {
    return (
      <div className="date-time">
        <p>{this.state.time}</p>
        <p>{this.state.date}</p>
      </div>
    )
  }
}

export default TimeDate;
