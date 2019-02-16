import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            min: 0,
            sec: 0
        };

        this.timer = null;

        // Example format
        // Date.parse('01 Jan 1970 00:00:00 GMT');
        this.event = Date.parse('22 Jun 2019 00:00:00 GMT-0400');
        this.time2Event = null;
    }

    getTime() {

        var seconds, minutes, hours, days;
        this.time2Event = this.event - Date.now();

        seconds = Math.floor(this.time2Event / 1000);   // Relative seconds
        minutes = Math.floor(seconds / 60);             // Relative minutes
        seconds = seconds % 60;                         // Seconds
        hours = Math.floor(minutes / 60);               // Relative hours
        minutes = minutes % 60;                         // Minutes
        days = Math.floor(hours / 24);                  // Days
        hours = hours % 24;                             // Hours

        this.setState({
            days: days,
            hours: hours,
            min: minutes,
            sec: seconds
        });

    }

    componentWillMount () {
        this.timer = setInterval(this.getTime.bind(this), 1000);
    }

    render() {
        return (
            <div className="d-flex timer">
                <div className="d-flex module">
                    <span>DÍAS</span>
                    <span>{(this.state.days < 10) ? `0${this.state.days}` : this.state.days}</span>
                </div>

                <div className="d-flex module">
                    <span>HORAS</span>
                    <span>{(this.state.hours < 10) ? `0${this.state.hours}` : this.state.hours}</span>
                </div>

                <div className="d-flex module">
                    <span>MIN</span>
                    <span>{(this.state.min < 10) ? `0${this.state.min}` : this.state.min}</span>
                </div>

                <div className="d-flex module">
                    <span>SEG</span>
                    <span>{(this.state.sec < 10) ? `0${this.state.sec}` : this.state.sec}</span>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Timer />,
    document.getElementById('timer')
);
