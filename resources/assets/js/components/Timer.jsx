import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Timer extends Component {

    constructor(props) {
        super(props);

        this.days = null;
        this.hours = null;
        this.min = null;
        this.sec = null;
        this.now = Date.now;

        this.timer = null;

        // Example format
        // Date.parse('Thu, 01 Jan 1970 00:00:00 GMT');
        // this.time2Event = this.props.time2Event;
        this.event = Date.parse('Fri, 03 Aug 2018 00:00:00 GMT-0400');
    }

    getTime() {

        this.seconds = this.event % (1000);            // Seconds
        this.minutes = this.event % (60 * 1000);       // Minutes
        this.hours = this.event % (3600 * 1000);       // Hours
        this.days = this.event % (3600 * 24 * 1000);   // Days

    }

    componentWillMount () {
        this.timer = setInterval(this.getTime, 1000);
    }

    render() {
        return (
            <div className="timer">
                <div className="days">{this.days}</div>
                <div className="hours">{this.hours}</div>
                <div className="minutes">{this.min}</div>
                <div className="seconds">{this.sec}</div>


            </div>
        )
    }
}


ReactDOM.render(<Timer />,
document.getElementById('timer'));
