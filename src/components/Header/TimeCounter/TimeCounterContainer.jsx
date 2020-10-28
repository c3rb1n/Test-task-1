import React from "react";
import TimeCounter from "./TimeCounter";

class TimeCounterContainer extends React.Component {
    state = {
        days: this.props.days,
        hours: this.props.hours,
        mins: this.props.minutes,
        secs: this.props.seconds
    };

    setTimeCounter = state => {
        let days = state.days;
        let hours = state.hours;
        let mins = state.mins;
        let secs = state.secs;

        if (!this.props.isLogin) {
            clearInterval(this.interval);

            this.props.setWorkTime(days, hours, mins, secs);

            return;
        }

        if (secs > 58) {
            secs = 0;
            mins++;
        } else {
            secs++;
        }

        if (mins > 59) {
            mins = 0;
            hours++
        }

        if (hours > 23) {
            hours = 0;
            days++
        }

        this.setState({
            days,
            hours,
            mins,
            secs
        })
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setTimeCounter(this.state)
        }, 1000);
    };

    render = () => {
        return (
            <TimeCounter days={this.state.days}
                         hours={this.state.hours}
                         mins={this.state.mins}
                         secs={this.state.secs}/>
        );
    };
};

export default TimeCounterContainer;